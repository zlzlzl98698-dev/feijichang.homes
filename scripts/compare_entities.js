const fs = require('fs');
const brands = JSON.parse(fs.readFileSync('scripts/parsed_brands_raw.json', 'utf-8'));

console.log('Comparing potential duplicates:');

function printSummary(b) {
  const text = b.lines.join('\n');
  const baseMatch = text.match(/基础[数信][据息][：:]\s*([^\n\r]+)/);
  const coreMatch = text.match(/核心特色|品牌资料明确说了的/);
  console.log(`--- ${b.name} (${b.slug || 'no-slug'}, Block ${b.block}, Line ${b.startLine}) ---`);
  if (baseMatch) console.log('  Base: ' + baseMatch[1]);
  // check first 5 lines
  console.log('  Preview: ' + b.lines.slice(0, 6).join(' | ').replace(/\s+/g, ' '));
}

// Compare Firefly (#10) and 萤火虫 (#41)
console.log('=== Firefly vs 萤火虫 ===');
printSummary(brands.find(b => b.name.includes('Firefly')));
printSummary(brands.find(b => b.name === '萤火虫'));

// Compare 飞猫云 (#3) and FATCAT (#34)
console.log('\n=== 飞猫云 vs FATCAT ===');
printSummary(brands.find(b => b.name.includes('飞猫')));
printSummary(brands.find(b => b.name === 'FATCAT'));

// Let's check all brands for any overlapping domains or codes
console.log('\n=== Aff domains and codes check ===');
const affMap = {};
brands.forEach(b => {
  const text = b.lines.join('\n');
  const urlM = text.match(/https?:\/\/([^\/\s`\)\"\'<>]+)[^\s`\)\"\'<>]*[?&]code=([A-Za-z0-9_]+)/);
  if (urlM) {
    const domain = urlM[1];
    const code = urlM[2];
    console.log(`${b.name.padEnd(12)} -> Domain: ${domain.padEnd(30)} Code: ${code}`);
    if (!affMap[domain]) affMap[domain] = [];
    affMap[domain].push(b.name);
  } else {
    const rawUrl = text.match(/https?:\/\/[^\s`\)\"\'<>]*/);
    console.log(`${b.name.padEnd(12)} -> URL: ${rawUrl ? rawUrl[0] : 'None'}`);
  }
});

console.log('\n=== Domains with multiple brands ===');
for (let d in affMap) {
  if (affMap[d].length > 1) {
    console.log(`${d}: ${affMap[d].join(', ')}`);
  }
}
