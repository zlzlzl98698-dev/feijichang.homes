const fs = require('fs');
const path = require('path');

const brandListPath = 'C:/Users/Pro User/Desktop/机场品牌信息/42家机场品牌清单.txt';
const content = fs.readFileSync(brandListPath, 'utf-8');
const lines = content.split(/\r?\n/);

console.log('Total lines in 42家机场品牌清单.txt:', lines.length);

let brands = [];
let current = null;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const trimLine = line.trim();

  // match header like '主推## 1. 光速云' or '## 2. 暮光加速（muguang）'
  const hMatch = trimLine.match(/^(?:主推)?##\s*(\d+)?[\.、]?\s*([^（\(]+)(?:[（\(]([^）\)]+)[）\)])?/);
  const isSecondBlock = i > 950;
  const isBrandNameBeforeBase = isSecondBlock && i < lines.length - 1 && lines[i+1].includes('基础信息');

  if (hMatch && !trimLine.includes('完整数据表') && !trimLine.includes('合规提醒')) {
    if (current) brands.push(current);
    current = {
      index: hMatch[1] || '',
      name: hMatch[2].trim(),
      slug: (hMatch[3] || '').trim(),
      startLine: i + 1,
      lines: [line],
      block: 1
    };
  } else if (isBrandNameBeforeBase && trimLine.length > 0 && !trimLine.startsWith('#')) {
    if (current) brands.push(current);
    current = {
      index: '',
      name: trimLine.replace(/^\d+[\.、]\s*/, ''),
      slug: '',
      startLine: i + 1,
      lines: [line],
      block: 2
    };
  } else if (current) {
    if (trimLine.startsWith('## 完整数据表') || trimLine.startsWith('## 合规提醒')) {
      brands.push(current);
      current = null;
    } else {
      current.lines.push(line);
    }
  }
}
if (current) brands.push(current);

console.log('Total extracted brands count:', brands.length);

brands.forEach((b, idx) => {
  const body = b.lines.join('\n');
  const urlM = body.match(/https?:\/\/[^\s`\)\"\'<>]+/);
  const aff = urlM ? urlM[0] : 'NO_AFF';
  console.log(`${idx + 1}. [${b.index || '-'}] ${b.name}${b.slug ? ' (' + b.slug + ')' : ''} (Block ${b.block}, Line ${b.startLine}) -> ${aff}`);
});

// Write to json for inspection
fs.writeFileSync('scripts/parsed_brands_raw.json', JSON.stringify(brands, null, 2), 'utf-8');
console.log('Wrote parsed_brands_raw.json');
