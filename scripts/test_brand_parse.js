import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rawContent = fs.readFileSync('C:/Users/Pro User/Desktop/机场品牌信息/42家机场品牌清单.txt', 'utf-8');
const lines = rawContent.split(/\r?\n/);

// Let's identify the 42 brand blocks
let brandBlocks = [];
let current = null;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const trim = line.trim();

  const hMatch = trim.match(/^(?:主推)?##\s*(\d+)?[\.、]?\s*([^（\(]+)(?:[（\(]([^）\)]+)[）\)])?/);
  const isSecondBlock = i > 950;
  const isBrandNameBeforeBase = isSecondBlock && i < lines.length - 1 && lines[i+1].includes('基础信息');

  if (hMatch && !trim.includes('完整数据表') && !trim.includes('合规提醒')) {
    if (current) brandBlocks.push(current);
    current = {
      headerIndex: hMatch[1] || '',
      rawName: hMatch[2].trim(),
      rawSlug: (hMatch[3] || '').trim(),
      startLine: i + 1,
      lines: [line],
      block: 1
    };
  } else if (isBrandNameBeforeBase && trim.length > 0 && !trim.startsWith('#')) {
    if (current) brandBlocks.push(current);
    current = {
      headerIndex: '',
      rawName: trim.replace(/^\d+[\.、]\s*/, ''),
      rawSlug: '',
      startLine: i + 1,
      lines: [line],
      block: 2
    };
  } else if (current) {
    if (trim.startsWith('## 完整数据表') || trim.startsWith('## 合规提醒')) {
      brandBlocks.push(current);
      current = null;
    } else {
      current.lines.push(line);
    }
  }
}
if (current) brandBlocks.push(current);

console.log(`Parsed ${brandBlocks.length} brand blocks.`);

// Analyze aliases, duplicates, and unique entities
// 1. Firefly (Block 1) and 萤火虫 (Block 2) -> Domain vip02.fireflyaff.com, coupon firefly
// 2. 飞猫云 (Block 1) and FATCAT (Block 2) -> Fat Cat
// 3. 唯兔云 (Block 1) -> alias V2云 (v2yunvipaff.com)
// 4. U1S1 -> alias 有一说一
// 5. 梯子云 -> alias LadderCloud
// 6. 星岛梦 -> alias StarDream
// 7. 微风网络 -> alias Breezenet
// 8. 闪跃 -> alias FlashLeap
// 9. 浪网 -> alias WaveNet
// 10. 龙猫云 -> alias Totoro

brandBlocks.forEach((b, idx) => {
  const text = b.lines.join('\n');
  const affMatch = text.match(/https?:\/\/[^\s`\)\"\'<>]+/);
  const couponMatch = text.match(/优惠码[：:]\s*`?([A-Za-z0-9_]+)`?/);
  const baseDataMatch = text.match(/基础[数信][据息][：:]\s*([^\n\r]+)/);
  
  console.log(`[#${idx+1}] ${b.rawName} (Slug: ${b.rawSlug || 'none'}, Block: ${b.block})`);
  console.log(`     AFF: ${affMatch ? affMatch[0] : 'None'}`);
  console.log(`     Coupon: ${couponMatch ? couponMatch[1] : 'None'}`);
  if (baseDataMatch) console.log(`     Base: ${baseDataMatch[1]}`);
});
