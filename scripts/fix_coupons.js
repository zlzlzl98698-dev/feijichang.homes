import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const txt = fs.readFileSync('C:/Users/Pro User/Desktop/机场品牌信息/42家机场品牌清单.txt', 'utf-8');

// Parse the table
const tableIndex = txt.indexOf('## 完整数据表');
const tableLines = txt.slice(tableIndex, txt.indexOf('## 合规提醒', tableIndex)).split(/\r?\n/);

const tableCoupons = {
  '光速云': 'AMM',
  '飞猫云': 'flycat888',
  '微风网络': 'flat888',
  '星岛梦': 'nmw888',
  '无忧链接': 'wuyou666',
  '二猫云': 'ermao5555',
  '唯兔云': 'weitu666',
  'Firefly': 'firefly',
  '暮光加速': 'muguang5555',
  '宇宙云': 'YUZHOU553',
  'U1S1': 'akaka',
  '灵猫网络': 'lmao888',
  '极连云': 'ji8888',
  '光年梯': 'gnt6666',
  '一翻云': 'yfy6666',
  'SOGO云': 'sss777',
  'SOGO 云': 'sss777',
  '可信云': 'kkk333',
  '速界': 'sss1111',
  '闪跃': 'shanyue',
  '全球云': 'qqy7777',
  '闪电鼠': 'sd88',
  '大佬云': 'dly888',
  '云界线': 'yjx888',
  '榴莲云': 'll88',
  '神行加速': 'xs0077',
  '环球梯': 'HQ66',
  '隐形人': 'yxr888',
  '梯子云': 'tiziyun',
  'FlyingBird': 'theo',
  'TNTCloud': 'TNT85',
  '青云梯': 'qyt85',
  'EdgeNova': 'TH888',
  '萤火虫': 'firefly',
  'sslar': 'ko3eTt0w',
  '快狸': 'kuaili888'
};

tableLines.forEach(l => {
  const parts = l.split('|').map(s => s.trim().replace(/`/g, ''));
  if (parts.length >= 6) {
    const num = parts[1];
    const name = parts[2];
    const cp = parts[4];
    if (name && name !== '品牌' && !name.includes('---')) {
      tableCoupons[name] = cp;
      console.log(`Table coupon: ${name} -> ${cp}`);
    }
  }
});

// Update docs/data/brands.json
const brandsJsonPath = path.resolve(__dirname, '../docs/data/brands.json');
const brands = JSON.parse(fs.readFileSync(brandsJsonPath, 'utf-8'));

brands.forEach(b => {
  if (tableCoupons[b.name]) {
    b.coupon = tableCoupons[b.name];
  } else if (tableCoupons[b.enName]) {
    b.coupon = tableCoupons[b.enName];
  } else if (b.slug === 'guangsu') {
    b.coupon = 'AMM';
  } else if (b.slug === 'muguang') {
    b.coupon = 'muguang5555';
  } else if (b.slug === 'feimao') {
    b.coupon = 'flycat888';
  }
  console.log(`${b.name} (${b.slug}) -> Final Coupon: [${b.coupon}]`);
});

fs.writeFileSync(brandsJsonPath, JSON.stringify(brands, null, 2), 'utf-8');
console.log('Updated docs/data/brands.json successfully!');
