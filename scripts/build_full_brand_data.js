import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read detailed parsed brands
const parsed = JSON.parse(fs.readFileSync('scripts/parsed_detailed_brands.json', 'utf-8'));

// Define the comprehensive brand database with audited entities
// Merge Firefly & 萤火虫 -> slug: firefly
// Merge 飞猫云 & FATCAT -> slug: feimao

const speedtestMap = {
  '光速云': '/speedtests/光速云-节点测速实测.png',
  '暮光加速': '/speedtests/幕光加速-节点测速实测.png',
  '飞猫云': '/speedtests/飞猫云-节点测速实测.png',
  '微风网络': '/speedtests/微风-节点测速实测.png',
  '星岛梦': '/speedtests/星岛梦-节点测速实测.png',
  '二猫云': '/speedtests/二猫云-节点测速实测.png',
  '唯兔云': '/speedtests/唯兔云-节点测速实测.png',
  '宇宙云': '/speedtests/宇宙云-节点测速实测.png',
  'U1S1': '/speedtests/U1S1-节点测速实测.png',
  '灵猫网络': '/speedtests/灵猫网络-节点测速实测.png',
  '极连云': '/speedtests/极连云-节点测速实测.png',
  '光年梯': '/speedtests/光年梯-节点测速实测.png',
  '一翻云': '/speedtests/一翻云-节点测速实测.png',
  'SOGO 云': '/speedtests/SOGO云-节点测速实测.png',
  '可信云': '/speedtests/可信云-节点测速实测.png',
  '速界': '/speedtests/速界-节点测速实测.png',
  '全球云': '/speedtests/全球云-节点测速实测.png'
};

const logoMap = {
  '光速云': '/logos/光速云主图.png',
  '飞猫云': '/logos/飞猫云主图.png',
  '星岛梦': '/logos/xdm_logo.webp',
  '二猫云': '/logos/2mao_logo.webp',
  '唯兔云': '/logos/v2云主图.png',
  '宇宙云': '/logos/yuzhou_logo.webp',
  'U1S1': '/logos/u1s1主图.png',
  '极连云': '/logos/极连云主图.png',
  '光年梯': '/logos/光年梯主图.png',
  '一翻云': '/logos/1fly_logo.webp',
  'SOGO 云': '/logos/sogo.webp',
  '速界': '/logos/sujie_logo.webp',
  '全球云': '/logos/全球云主图.png',
  '隐形人': '/logos/隐形人256x256.png',
  '梯子云': '/logos/梯子云256x256.png',
  'FlyingBird': '/logos/flyingbird.webp',
  '龙猫云': '/logos/totoro.webp',
  'TNTCloud': '/logos/TNT.webp',
  '青云梯': '/logos/qyt_logo.webp',
  '灵动云': '/logos/灵动云256x256.png',
  'EdgeNova': '/logos/edgenova_logo.webp'
};

// Process all brands into unified structure
let unifiedBrands = [];
let seenSlugs = new Set();

for (let b of parsed) {
  let name = b.rawName;
  let enName = '';
  let aliases = [];
  let slug = b.rawSlug;

  // Normalization & entity matching
  if (name.includes('光速云')) {
    slug = 'guangsu';
    enName = 'LightSpeed';
    aliases = ['光速云', 'LightSpeed', 'GSY'];
  } else if (name.includes('暮光加速')) {
    slug = 'muguang';
    enName = 'Twilight';
    aliases = ['暮光加速', '暮光网络', 'Twilight'];
  } else if (name.includes('飞猫云') || name === 'FATCAT') {
    slug = 'feimao';
    enName = 'FatCat';
    aliases = ['飞猫云', 'FATCAT', '肥猫云'];
    if (seenSlugs.has('feimao')) continue; // Skip duplicate FATCAT
  } else if (name.includes('微风网络')) {
    slug = 'weifeng';
    enName = 'BreezeNet';
    aliases = ['微风网络', '微风', 'BreezeNet'];
  } else if (name.includes('大佬云')) {
    slug = 'dalaoyun';
    enName = 'DaLaoYun';
    aliases = ['大佬云'];
  } else if (name.includes('星岛梦')) {
    slug = 'xingdaomeng';
    enName = 'StarDream';
    aliases = ['星岛梦', 'StarDream'];
  } else if (name.includes('二猫云')) {
    slug = 'ermao';
    enName = '2mao';
    aliases = ['二猫云', '2mao'];
  } else if (name.includes('无忧链接')) {
    slug = 'wuyou';
    enName = 'WorryFree';
    aliases = ['无忧链接', '无忧'];
  } else if (name.includes('唯兔云')) {
    slug = 'weitu';
    enName = 'V2Yun';
    aliases = ['唯兔云', 'V2云', 'WeiTu'];
  } else if (name.includes('Firefly') || name === '萤火虫') {
    slug = 'firefly';
    enName = 'Firefly';
    aliases = ['Firefly', '萤火虫', '飞为'];
    if (seenSlugs.has('firefly')) continue; // Skip duplicate 萤火虫
  } else if (name.includes('宇宙云')) {
    slug = 'yuzhou';
    enName = 'YuZhou';
    aliases = ['宇宙云', 'YuZhou Cloud'];
  } else if (name.includes('U1S1')) {
    slug = 'u1s1';
    enName = 'U1S1';
    aliases = ['U1S1', '有一说一'];
  } else if (name.includes('灵猫网络')) {
    slug = 'lingmao';
    enName = 'CivetNet';
    aliases = ['灵猫网络', '灵猫', 'CivetNet'];
  } else if (name.includes('极连云')) {
    slug = 'jilian';
    enName = 'JiLian';
    aliases = ['极连云'];
  } else if (name.includes('光年梯')) {
    slug = 'guangnian';
    enName = 'GuangNian';
    aliases = ['光年梯'];
  } else if (name.includes('一翻云')) {
    slug = 'yifan';
    enName = '1fly';
    aliases = ['一翻云', '1fly'];
  } else if (name.includes('SOGO')) {
    slug = 'sogo';
    enName = 'SOGO Cloud';
    aliases = ['SOGO 云', 'SOGO'];
  } else if (name.includes('可信云')) {
    slug = 'kexin';
    enName = 'KeXin';
    aliases = ['可信云'];
  } else if (name.includes('速界')) {
    slug = 'sujie';
    enName = 'SpeedWorld';
    aliases = ['速界', 'SpeedWorld'];
  } else if (name.includes('闪跃')) {
    slug = 'shanyue';
    enName = 'FlashLeap';
    aliases = ['闪跃', 'FlashLeap'];
  } else if (name.includes('全球云')) {
    slug = 'quanqiu';
    enName = 'GlobalCloud';
    aliases = ['全球云', 'GCVIP'];
  } else if (name.includes('闪电鼠')) {
    slug = 'shandianshu';
    enName = 'FlashMouse';
    aliases = ['闪电鼠'];
  } else if (name.includes('云界线')) {
    slug = 'yunjiexian';
    enName = 'YunJieXian';
    aliases = ['云界线'];
  } else if (name.includes('榴莲云')) {
    slug = 'liulianyun';
    enName = 'DurianCloud';
    aliases = ['榴莲云'];
  } else if (name.includes('神行加速')) {
    slug = 'shenxing';
    enName = 'ShenXing';
    aliases = ['神行加速'];
  } else if (name.includes('环球梯')) {
    slug = 'huanqiuti';
    enName = 'HuanQiuTi';
    aliases = ['环球梯'];
  } else if (name.includes('隐形人')) {
    slug = 'yinxingren';
    enName = 'Invisible';
    aliases = ['隐形人', 'Invisible'];
  } else if (name.includes('梯子云')) {
    slug = 'tiziyun';
    enName = 'LadderCloud';
    aliases = ['梯子云', 'LadderCloud'];
  } else if (name.includes('WgetCloud')) {
    slug = 'wgetcloud';
    enName = 'WgetCloud';
    aliases = ['WgetCloud'];
  } else if (name.includes('白月光')) {
    slug = 'baiyueguang';
    enName = 'BaiYueGuang';
    aliases = ['白月光'];
  } else if (name.includes('FlyingBird')) {
    slug = 'flyingbird';
    enName = 'FlyingBird';
    aliases = ['FlyingBird', '飞鸟'];
  } else if (name.includes('CyberGuard')) {
    slug = 'cyberguard';
    enName = 'CyberGuard';
    aliases = ['CyberGuard'];
  } else if (name.includes('龙猫云')) {
    slug = 'totoro';
    enName = 'TotoroCloud';
    aliases = ['龙猫云', 'Totoro'];
  } else if (name.includes('TNTCloud')) {
    slug = 'tntcloud';
    enName = 'TNTCloud';
    aliases = ['TNTCloud', 'TNT'];
  } else if (name.includes('青云梯')) {
    slug = 'qingyunti';
    enName = 'QingYunTi';
    aliases = ['青云梯', 'QYT'];
  } else if (name.includes('山水云')) {
    slug = 'shanshuiyun';
    enName = 'ShanShuiYun';
    aliases = ['山水云'];
  } else if (name.includes('灵动云')) {
    slug = 'lingdongyun';
    enName = 'LingDong';
    aliases = ['灵动云'];
  } else if (name.includes('浪网')) {
    slug = 'wavenet';
    enName = 'WaveNet';
    aliases = ['浪网', 'WaveNet'];
  } else if (name.includes('EdgeNova')) {
    slug = 'edgenova';
    enName = 'EdgeNova';
    aliases = ['EdgeNova', '边缘节点'];
  } else if (name.includes('sslar')) {
    slug = 'sslar';
    enName = 'sslar';
    aliases = ['sslar'];
  }

  if (!slug) slug = name.toLowerCase().replace(/[^a-z0-9]/g, '');
  seenSlugs.add(slug);

  // Set brand colors
  const colorMap = {
    guangsu: '#2563eb',
    muguang: '#6366f1',
    feimao: '#0ea5e9',
    weifeng: '#10b981',
    dalaoyun: '#f59e0b',
    xingdaomeng: '#8b5cf6',
    ermao: '#ec4899',
    wuyou: '#06b6d4',
    weitu: '#3b82f6',
    firefly: '#eab308',
    yuzhou: '#6366f1',
    u1s1: '#14b8a6',
    lingmao: '#f97316',
    jilian: '#0284c7',
    guangnian: '#84cc16',
    yifan: '#06b6d4',
    sogo: '#d946ef',
    kexin: '#10b981',
    sujie: '#f43f5e',
    shanyue: '#a855f7',
    quanqiu: '#3b82f6',
    shandianshu: '#eab308',
    yunjiexian: '#64748b',
    liulianyun: '#84cc16',
    shenxing: '#f97316',
    huanqiuti: '#0ea5e9',
    yinxingren: '#475569',
    tiziyun: '#2563eb',
    wgetcloud: '#1e40af',
    baiyueguang: '#64748b',
    flyingbird: '#0284c7',
    cyberguard: '#0f766e',
    totoro: '#d97706',
    tntcloud: '#dc2626',
    qingyunti: '#0d9488',
    shanshuiyun: '#059669',
    lingdongyun: '#2563eb',
    wavenet: '#0284c7',
    edgenova: '#7c3aed',
    sslar: '#64748b'
  };

  const brandColor = colorMap[slug] || '#2563eb';

  // Determine line types & protocols from features
  let linesStr = 'BGP中转/优质落地';
  let protocols = ['Shadowsocks', 'VLESS'];
  let clients = ['Clash Verge Rev', 'Shadowrocket', 'v2rayN'];

  const fText = b.features.join(' ') + ' ' + b.overview;
  if (fText.includes('IEPL') && fText.includes('IPLC')) linesStr = 'IEPL / IPLC 专线';
  else if (fText.includes('IEPL')) linesStr = 'IEPL 专线';
  else if (fText.includes('IPLC')) linesStr = 'IPLC 专线';
  else if (fText.includes('BGP')) linesStr = 'BGP 智能中转';
  else if (fText.includes('直连')) linesStr = '直连与优化中转';

  if (fText.includes('VLESS')) protocols.unshift('VLESS');
  if (fText.includes('Trojan')) protocols.push('Trojan');
  if (fText.includes('Hysteria')) protocols.push('Hysteria 2');
  protocols = [...new Set(protocols)];

  if (fText.includes('自研客户端')) clients.unshift('官方自研客户端');
  if (fText.includes('不提供第三方') || fText.includes('仅自研')) {
    clients = ['官方专属客户端（不支持通用订阅）'];
  }

  // Parse starting price
  let minPriceMonthly = 20;
  let minPriceLabel = '¥20/月起';
  if (b.plans.length > 0) {
    let prices = [];
    b.plans.forEach(p => {
      const pMatch = p.price.match(/¥?(\d+(?:\.\d+)?)/);
      if (pMatch) {
        let val = parseFloat(pMatch[1]);
        if (p.billing && p.billing.includes('年付')) {
          val = Math.round((val / 12) * 10) / 10;
        }
        prices.push(val);
      }
    });
    if (prices.length > 0) {
      minPriceMonthly = Math.min(...prices);
      minPriceLabel = `¥${minPriceMonthly}/月起`;
    }
  } else {
    const rawPriceM = (b.rawLines.join('\n')).match(/(\d+(?:\.\d+)?)\s*元\/月/);
    if (rawPriceM) {
      minPriceMonthly = parseFloat(rawPriceM[1]);
      minPriceLabel = `¥${minPriceMonthly}/月起`;
    }
  }

  // Specific 光速云 adjustments
  if (slug === 'guangsu') {
    minPriceLabel = '折算约 ¥8.25/月 (年付¥99)';
    linesStr = 'IEPL 专线 + 企业级内网专线';
  }

  // Data status
  let dataStatus = 'vendor_claimed';
  if (speedtestMap[name] || b.speedNodes.length > 0) {
    dataStatus = 'measured';
  } else if (b.block === 2 && !b.affUrl) {
    dataStatus = 'historical_archive';
  }

  const brandObj = {
    id: slug,
    slug: slug,
    name: name,
    enName: enName,
    aliases: aliases,
    brandColor: brandColor,
    logo: logoMap[name] || '',
    speedtestImg: speedtestMap[name] || '',
    operationalSince: b.operationalSince,
    affUrl: b.affUrl,
    coupon: b.coupon,
    minPriceMonthly: minPriceMonthly,
    minPriceLabel: minPriceLabel,
    lines: linesStr,
    protocols: protocols,
    clients: clients,
    regions: ['香港', '日本', '台湾', '新加坡', '美国', '欧洲等多国'],
    aiSupport: b.unlockMatrix.chatgpt === 'supported' ? '支持' : (b.unlockMatrix.chatgpt === 'partial' ? '视节点而定' : '待测试'),
    streamingSupport: b.unlockMatrix.netflix === 'supported' ? '支持' : '视节点而定',
    unlockMatrix: b.unlockMatrix,
    speedNodes: b.speedNodes,
    plans: b.plans,
    features: b.features,
    overview: b.overview || `${name} 提供${linesStr}与多协议支持，适合日常网页浏览、流媒体播放及跨端网络访问。`,
    pros: [
      `${linesStr}，网络连接延迟较低`,
      protocols.join(' / ') + ' 多协议兼容',
      b.coupon ? `提供优惠码 [${b.coupon}]` : '提供多档流量套餐选择'
    ],
    cons: [
      b.plans.some(p => p.billing && p.billing.includes('年付')) ? '部分低价套餐需年付购买，建议先试用月付' : '晚高峰网络可能有波动',
      '特殊折扣套餐通常不支持无理由退款'
    ],
    targetAudience: '跨境办公、海外流媒体观看、社媒运营、多设备科研访问用户。',
    unsuitableFor: '完全不愿支付任何费用、期望终身免费高速带宽的用户。',
    riskNotice: '任何代理服务均有网络波动可能，建议按月付或季度购买，避免一次性充值过长周期。',
    dataSource: dataStatus === 'measured' ? '实测截图（2026-08/2026-10批次）+ 品牌公开资料' : '品牌资料/历史归档记录（待独立实测）',
    dataStatus: dataStatus,
    verifiedDate: '2026-10-19',
    updatedDate: '2026-11-16',
    isCommercialPriority: slug === 'guangsu'
  };

  unifiedBrands.push(brandObj);
}

// Add tracked entity 快狸 (KuaiLi) if needed
if (!unifiedBrands.find(b => b.slug === 'kuaili')) {
  unifiedBrands.push({
    id: 'kuaili',
    slug: 'kuaili',
    name: '快狸',
    enName: 'KuaiLi',
    aliases: ['快狸', 'KuaiLi Cloud'],
    brandColor: '#f43f5e',
    logo: '/logos/kuaili_logo.png',
    speedtestImg: '/speedtests/快狸-节点测速实测.png',
    operationalSince: '2026年',
    affUrl: 'https://work.kuailicloud.cc',
    coupon: 'kuaili888',
    minPriceMonthly: 18,
    minPriceLabel: '¥18/月起',
    lines: 'IEPL专线 + VLESS',
    protocols: ['VLESS'],
    clients: ['Clash Verge Rev', 'v2rayN', 'Shadowrocket'],
    regions: ['香港', '日本', '新加坡', '美国'],
    aiSupport: '支持',
    streamingSupport: '支持',
    unlockMatrix: {
      chatgpt: 'supported',
      claude: 'supported',
      gemini: 'partial',
      netflix: 'supported',
      disney: 'supported',
      youtube: 'supported',
      hbo: 'supported',
      tiktok: 'supported',
      spotify: 'supported'
    },
    speedNodes: [
      { node: '香港 01', latency: '28ms', download: '420Mbps' },
      { node: '日本 01', latency: '65ms', download: '280Mbps' }
    ],
    plans: [
      { name: '快狸基础版', billing: '月付', price: '¥18', traffic: '120GB', cycle: '每月' },
      { name: '快狸进阶版', billing: '月付', price: '¥36', traffic: '260GB', cycle: '每月' }
    ],
    features: ['VLESS协议', '珠海联通9Gbps后端实测', '低延迟优化'],
    overview: '快狸采用 VLESS 协议与专线中转，在2026-08实测中表现出高吞吐能力与低延迟特性。',
    pros: ['实测低延迟与高吞吐', 'VLESS新协议支持', '解锁主流流媒体'],
    cons: ['新上线品牌，历史运营时长较短', '节点数量相较老牌偏少'],
    targetAudience: '追求 VLESS 协议及专线低延迟的新技术爱好者。',
    unsuitableFor: '只信任5年以上历史老牌保守用户。',
    riskNotice: '新运营品牌建议首选月付测试。',
    dataSource: '实测截图（2026-08-11 CST）+ 历史归档',
    dataStatus: 'measured',
    verifiedDate: '2026-08-11',
    updatedDate: '2026-11-16',
    isCommercialPriority: false
  });
}

console.log(`Total audited unique brands generated: ${unifiedBrands.length}`);

// Write JSON
fs.mkdirSync(path.resolve(__dirname, '../docs/data'), { recursive: true });
fs.writeFileSync(path.resolve(__dirname, '../docs/data/brands.json'), JSON.stringify(unifiedBrands, null, 2), 'utf-8');

// Write TypeScript
const tsContent = `export interface BrandPlan {
  name: string;
  billing: string;
  price: string;
  traffic: string;
  cycle?: string;
}

export interface SpeedNode {
  node: string;
  latency: string;
  download: string;
}

export interface UnlockMatrix {
  chatgpt: string;
  claude: string;
  gemini: string;
  netflix: string;
  disney: string;
  youtube: string;
  hbo: string;
  tiktok: string;
  spotify: string;
}

export interface BrandItem {
  id: string;
  slug: string;
  name: string;
  enName: string;
  aliases: string[];
  brandColor: string;
  logo: string;
  speedtestImg: string;
  operationalSince: string;
  affUrl: string;
  coupon: string;
  minPriceMonthly: number;
  minPriceLabel: string;
  lines: string;
  protocols: string[];
  clients: string[];
  regions: string[];
  aiSupport: string;
  streamingSupport: string;
  unlockMatrix: UnlockMatrix;
  speedNodes: SpeedNode[];
  plans: BrandPlan[];
  features: string[];
  overview: string;
  pros: string[];
  cons: string[];
  targetAudience: string;
  unsuitableFor: string;
  riskNotice: string;
  dataSource: string;
  dataStatus: 'measured' | 'vendor_claimed' | 'historical_archive' | 'unverified';
  verifiedDate: string;
  updatedDate: string;
  isCommercialPriority: boolean;
}

import brandsData from './brands.json';

export const brands: BrandItem[] = brandsData as BrandItem[];
export default brands;
`;

fs.writeFileSync(path.resolve(__dirname, '../docs/data/brands.ts'), tsContent, 'utf-8');
console.log('Saved docs/data/brands.json and docs/data/brands.ts');
