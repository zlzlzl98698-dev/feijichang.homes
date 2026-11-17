import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rawContent = fs.readFileSync('C:/Users/Pro User/Desktop/机场品牌信息/42家机场品牌清单.txt', 'utf-8');
const lines = rawContent.split(/\r?\n/);

let rawBlocks = [];
let cur = null;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const trim = line.trim();

  const hMatch = trim.match(/^(?:主推)?##\s*(\d+)?[\.、]?\s*([^（\(]+)(?:[（\(]([^）\)]+)[）\)])?/);
  const isSecondBlock = i > 950;
  const isBrandNameBeforeBase = isSecondBlock && i < lines.length - 1 && lines[i+1].includes('基础信息');

  if (hMatch && !trim.includes('完整数据表') && !trim.includes('合规提醒')) {
    if (cur) rawBlocks.push(cur);
    cur = {
      headerIndex: hMatch[1] || '',
      name: hMatch[2].trim(),
      slug: (hMatch[3] || '').trim(),
      startLine: i + 1,
      lines: [line],
      block: 1
    };
  } else if (isBrandNameBeforeBase && trim.length > 0 && !trim.startsWith('#')) {
    if (cur) rawBlocks.push(cur);
    cur = {
      headerIndex: '',
      name: trim.replace(/^\d+[\.、]\s*/, ''),
      slug: '',
      startLine: i + 1,
      lines: [line],
      block: 2
    };
  } else if (cur) {
    if (trim.startsWith('## 完整数据表') || trim.startsWith('## 合规提醒')) {
      rawBlocks.push(cur);
      cur = null;
    } else {
      cur.lines.push(line);
    }
  }
}
if (cur) rawBlocks.push(cur);

console.log(`Parsed raw blocks: ${rawBlocks.length}`);

// Function to parse a raw block into structured fields
function parseBlock(b) {
  const text = b.lines.join('\n');
  
  // Registration URL
  const affMatch = text.match(/https?:\/\/[^\s`\)\"\'<>]+/);
  let affUrl = affMatch ? affMatch[0] : '';
  
  // Coupon
  const couponMatch = text.match(/优惠码[：:]\s*`?([A-Za-z0-9_]+)`?/);
  const coupon = couponMatch ? couponMatch[1] : '';

  // Operational since
  const opMatch = text.match(/(\d{4})\s*年/);
  const operationalSince = opMatch ? `${opMatch[1]}年` : '待核实';

  // Base text / Features
  const features = [];
  const bulletMatches = text.matchAll(/^[-\*]\s*([^\n\r]+)/gm);
  for (const m of bulletMatches) {
    const val = m[1].trim();
    if (!val.startsWith('来源资料') && !val.startsWith('品牌入口') && !val.startsWith('优惠码')) {
      features.push(val);
    }
  }

  // Parse Plans table if exists
  const plans = [];
  const planIdx = text.indexOf('套餐价格');
  if (planIdx !== -1) {
    const planText = text.slice(planIdx);
    const planLines = planText.split('\n');
    for (let pl of planLines) {
      if (pl.includes('¥') || (pl.includes('元') && (pl.includes('月付') || pl.includes('年付') || pl.includes('一次性') || pl.includes('/月') || pl.includes('/年')))) {
        const parts = pl.split(/\t|\s{2,}|\|/).map(s => s.trim().replace(/^\||\|$/g, '')).filter(Boolean);
        if (parts.length >= 3) {
          plans.push({
            name: parts[0],
            billing: parts[1] || '月付',
            price: parts[2] || '',
            traffic: parts[3] || '',
            cycle: parts[4] || ''
          });
        }
      }
    }
  }

  // Parse Speedtest if exists
  const speedNodes = [];
  const speedIdx = text.indexOf('测速');
  if (speedIdx !== -1) {
    const speedSection = text.slice(speedIdx, text.indexOf('流媒体', speedIdx) > 0 ? text.indexOf('流媒体', speedIdx) : undefined);
    const speedLines = speedSection.split('\n');
    for (let sl of speedLines) {
      const parts = sl.split(/\t|\s{2,}|\|/).map(s => s.trim()).filter(Boolean);
      if (parts.length >= 3 && (parts[1].includes('ms') || parts[2].includes('Mbps') || parts[2].includes('MB/s'))) {
        speedNodes.push({
          node: parts[0],
          latency: parts[1],
          download: parts[2]
        });
      }
    }
  }

  // Parse Unlocks
  const unlockMatrix = {
    chatgpt: 'not_tested',
    claude: 'not_tested',
    gemini: 'not_tested',
    netflix: 'not_tested',
    disney: 'not_tested',
    youtube: 'not_tested',
    hbo: 'not_tested',
    tiktok: 'not_tested',
    spotify: 'not_tested'
  };

  const unlockIdx = text.indexOf('流媒体');
  if (unlockIdx !== -1) {
    const unText = text.slice(unlockIdx, text.indexOf('介绍说明', unlockIdx) > 0 ? text.indexOf('介绍说明', unlockIdx) : undefined);
    if (unText.includes('支持：') || unText.includes('支持')) {
      if (unText.includes('ChatGPT')) unlockMatrix.chatgpt = 'supported';
      if (unText.includes('Claude')) unlockMatrix.claude = 'supported';
      if (unText.includes('Netflix')) unlockMatrix.netflix = 'supported';
      if (unText.includes('Disney')) unlockMatrix.disney = 'supported';
      if (unText.includes('YouTube')) unlockMatrix.youtube = 'supported';
      if (unText.includes('HBO')) unlockMatrix.hbo = 'supported';
      if (unText.includes('TikTok')) unlockMatrix.tiktok = 'supported';
      if (unText.includes('Spotify')) unlockMatrix.spotify = 'supported';
    }
    if (unText.includes('视节点而定：') || unText.includes('视节点')) {
      if (unText.includes('ChatGPT') && unText.indexOf('视节点') < unText.indexOf('ChatGPT')) unlockMatrix.chatgpt = 'partial';
      if (unText.includes('Gemini')) unlockMatrix.gemini = 'partial';
    }
  }

  // Parse Overview / Intro
  let overview = '';
  const descIdx = text.indexOf('介绍说明：');
  if (descIdx !== -1) {
    overview = text.slice(descIdx + 5, text.indexOf('\n\n', descIdx + 5) > 0 ? text.indexOf('\n\n', descIdx + 5) : undefined).trim();
  }

  return {
    rawName: b.name,
    rawSlug: b.slug,
    affUrl,
    coupon,
    operationalSince,
    features,
    plans,
    speedNodes,
    unlockMatrix,
    overview,
    block: b.block,
    rawLines: b.lines
  };
}

const parsed = rawBlocks.map(parseBlock);
fs.writeFileSync('scripts/parsed_detailed_brands.json', JSON.stringify(parsed, null, 2), 'utf-8');
console.log('Saved parsed_detailed_brands.json');
