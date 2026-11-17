import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const brands = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../docs/data/brands.json'), 'utf-8'));

function writeMd(relPath, content) {
  const fullPath = path.resolve(__dirname, '../docs', relPath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content.trim() + '\n', 'utf-8');
}

// 4 Top Navs & 28 Sub-topics definition
const navStructure = [
  {
    id: 'airport',
    name: '机场推荐',
    url: '/airport/',
    icon: '✈️',
    desc: '面向中文用户的高性价比机场、稳定专线机场、便宜平价机场评测与排行榜。',
    subTopics: [
      { id: 'recommend', name: '机场推荐', url: '/airport/recommend/', kw: '机场推荐', clusters: [
        { id: 'rec-overall', name: '2026综合机场推荐榜单', kw: '2026机场推荐', intent: '商业决策' },
        { id: 'rec-scenario', name: '场景化机场选型推荐', kw: '办公机场推荐', intent: '需求匹配' }
      ]},
      { id: 'rankings', name: '机场排行', url: '/airport/rankings/', kw: '机场排行', clusters: [
        { id: 'rank-speed', name: '晚高峰测速排行榜', kw: '机场测速排行', intent: '速度对比' },
        { id: 'rank-reputation', name: '老牌口碑稳定性排行', kw: '老牌机场排行', intent: '可靠性对比' }
      ]},
      { id: 'cost-effective', name: '性价比机场', url: '/airport/cost-effective/', kw: '性价比机场', clusters: [
        { id: 'cost-balanced', name: '15-30元高性价比专线', kw: '高性价比机场', intent: '预算折中' },
        { id: 'cost-traffic', name: '大流量性价比套餐测算', kw: '大流量性价比机场', intent: '流量需求' }
      ]},
      { id: 'stable', name: '稳定机场', url: '/airport/stable/', kw: '稳定机场', clusters: [
        { id: 'stable-iepl', name: 'IEPL/IPLC企业内网专线', kw: '专线稳定机场', intent: '高质量网络' },
        { id: 'stable-outage', name: '晚高峰防断联与抗封锁', kw: '晚高峰稳定机场', intent: '痛点解决' }
      ]},
      { id: 'cheap', name: '便宜机场', url: '/airport/cheap/', kw: '便宜机场', clusters: [
        { id: 'cheap-lowprice', name: '月均5-10元平民低价机场', kw: '便宜机场推荐', intent: '低成本尝试' },
        { id: 'cheap-onetime', name: '不限时永久计费便宜机场', kw: '不限时便宜机场', intent: '备用防失联' }
      ]},
      { id: 'free', name: '免费梯子', url: '/airport/free/', kw: '免费梯子', clusters: [
        { id: 'free-eval', name: '免费梯子安全性深度评测', kw: '免费梯子靠谱吗', intent: '防坑排雷' },
        { id: 'free-trial', name: '支持免费试用的正规机场', kw: '支持试用的机场', intent: '试用转化' }
      ]},
      { id: 'guide', name: '科学上网', url: '/airport/guide/', kw: '科学上网', clusters: [
        { id: 'guide-intro', name: '从零入门科学上网指南', kw: '科学上网教程', intent: '基础入门' },
        { id: 'guide-protocol', name: 'Shadowsocks/VLESS协议辨析', kw: '科学上网协议区别', intent: '技术选型' }
      ]}
    ]
  },
  {
    id: 'vpn',
    name: 'VPN 与加速器',
    url: '/vpn/',
    icon: '🛡️',
    desc: '传统海外商业VPN、跨境办公加速器与现代分流代理的横向对比评测。',
    subTopics: [
      { id: 'recommend', name: 'VPN 推荐', url: '/vpn/recommend/', kw: 'VPN推荐', clusters: [
        { id: 'vpn-global', name: '国内外商业VPN实测榜单', kw: '好用的VPN推荐', intent: '选型对比' },
        { id: 'vpn-privacy', name: '无日志私密安全VPN盘点', kw: '安全私密VPN', intent: '隐私安全' }
      ]},
      { id: 'free', name: '免费 VPN', url: '/vpn/free/', kw: '免费VPN', clusters: [
        { id: 'vpn-freerisk', name: '免费VPN盈利模式与泄露风险', kw: '免费VPN安全吗', intent: '风险教育' },
        { id: 'vpn-freelimit', name: '免费限制版VPN体验报告', kw: '电脑免费VPN', intent: '低成本需求' }
      ]},
      { id: 'mobile', name: '手机 VPN', url: '/vpn/mobile/', kw: '手机VPN', clusters: [
        { id: 'vpn-ios', name: 'iPhone/iPad好用VPN精选', kw: '苹果手机VPN', intent: 'iOS设备配置' },
        { id: 'vpn-android', name: '安卓手机轻量稳定VPN方案', kw: '安卓手机VPN', intent: 'Android设备配置' }
      ]},
      { id: 'reviews', name: 'VPN 软件评测', url: '/vpn/reviews/', kw: 'VPN软件评测', clusters: [
        { id: 'vpn-speedtest', name: '商业VPN协议与实际连接测速', kw: 'VPN测速评测', intent: '性能实测' },
        { id: 'vpn-streaming', name: 'VPN海外流媒体解锁实测', kw: 'VPN解锁Netflix', intent: '解锁需求' }
      ]},
      { id: 'accelerator', name: 'VPN 加速器', url: '/vpn/accelerator/', kw: 'VPN加速器', clusters: [
        { id: 'accel-concept', name: 'VPN与网络加速器的技术区别', kw: '加速器和VPN区别', intent: '概念澄清' },
        { id: 'accel-tool', name: '跨境办公与游戏加速综合工具', kw: '海外加速器', intent: '工具推荐' }
      ]},
      { id: 'compare', name: '加速器对比', url: '/vpn/compare/', kw: '加速器对比', clusters: [
        { id: 'comp-pricing', name: '按月付费与按时长计费经济账', kw: '加速器价格对比', intent: '价格敏感' },
        { id: 'comp-latency', name: '香港与日本专线延迟横向实测', kw: '加速器延迟对比', intent: '延迟敏感' }
      ]},
      { id: 'best', name: '好用的 VPN', url: '/vpn/best/', kw: '好用的VPN', clusters: [
        { id: 'best-daily', name: '适合国内环境长期使用VPN', kw: '国内好用的VPN', intent: '稳定常驻' },
        { id: 'best-remote', name: '外贸海淘与远程办公VPN方案', kw: '办公好用的VPN', intent: '商务刚需' }
      ]}
    ]
  },
  {
    id: 'clash',
    name: 'Clash 客户端',
    url: '/clash/',
    icon: '⚡',
    desc: '全平台代理客户端下载与配置中心，覆盖 Clash Verge Rev、Mihomo 内核与订阅管理。',
    subTopics: [
      { id: 'recommend', name: 'Clash 推荐', url: '/clash/recommend/', kw: 'Clash推荐', clusters: [
        { id: 'clash-apps', name: '多平台主流Clash系客户端对比', kw: '好用的Clash客户端', intent: '软件选型' },
        { id: 'clash-forks', name: '原版停更后Verge/Party分支选择', kw: 'Clash替代软件', intent: '软件升级' }
      ]},
      { id: 'clash-verge', name: 'Clash Verge', url: '/clash/clash-verge/', kw: 'Clash Verge', clusters: [
        { id: 'verge-intro', name: 'Clash Verge Rev核心功能解析', kw: 'Clash Verge Rev介绍', intent: '功能了解' },
        { id: 'verge-config', name: '扩展配置脚本与DNS调优', kw: 'Clash Verge配置教程', intent: '高级配置' }
      ]},
      { id: 'download', name: 'Clash Verge 下载', url: '/clash/download/', kw: 'Clash Verge 下载', clusters: [
        { id: 'down-official', name: 'Win/Mac/Linux官方安全下载', kw: 'Clash Verge官网下载', intent: '安全下载' },
        { id: 'down-verify', name: '防钓鱼安装包鉴别与Hash校验', kw: 'Clash安全下载防病毒', intent: '防钓鱼' }
      ]},
      { id: 'subscription', name: 'Clash Verge 订阅', url: '/clash/subscription/', kw: 'Clash Verge 订阅', clusters: [
        { id: 'sub-import', name: '机场订阅链接一键导入流程', kw: 'Clash怎么导入订阅', intent: '新手操作' },
        { id: 'sub-convert', name: 'Subconverter订阅格式转换', kw: 'Clash订阅转换教程', intent: '进阶定制' }
      ]},
      { id: 'clash-meta', name: 'Clash Meta', url: '/clash/clash-meta/', kw: 'Clash Meta', clusters: [
        { id: 'meta-core', name: 'Mihomo/Meta内核协议特性', kw: 'Clash Meta是什么', intent: '技术原理' },
        { id: 'meta-tun', name: 'TUN模式接管全系统网络流量', kw: 'Clash Meta TUN模式', intent: '全量代理' }
      ]},
      { id: 'tutorial', name: 'Clash 使用教程', url: '/clash/tutorial/', kw: 'Clash 使用教程', clusters: [
        { id: 'tut-beginner', name: '十分钟掌握规则与全局模式分流', kw: 'Clash新手入门教程', intent: '模式理解' },
        { id: 'tut-custom', name: '自定义分流与广告拦截规则集', kw: 'Clash自定义分流规则', intent: '高级玩法' }
      ]},
      { id: 'troubleshooting', name: 'Clash 故障排查', url: '/clash/troubleshooting/', kw: 'Clash 故障排查', clusters: [
        { id: 'trouble-timeout', name: '节点全红Timeout无法联网排查', kw: 'Clash节点超时全红', intent: '紧急排障' },
        { id: 'trouble-system', name: '系统代理未生效与国内网打不开', kw: 'Clash开了解不开国内网', intent: '日常冲突' }
      ]}
    ]
  },
  {
    id: 'resources',
    name: '资源与情报',
    url: '/resources/',
    icon: '📡',
    desc: '公共应急节点、机场跑路预警黑名单、节点真假专线测速与新手避坑知识库。',
    subTopics: [
      { id: 'free-nodes', name: '免费节点', url: '/resources/free-nodes/', kw: '免费节点', clusters: [
        { id: 'node-daily', name: '每日公开免费节点应急使用', kw: '免费节点每日更新', intent: '临时应急' },
        { id: 'node-risk', name: '免费节点中间人劫持与嗅探风险', kw: '免费节点安全风险', intent: '安全警示' }
      ]},
      { id: 'warning', name: '跑路预警', url: '/resources/warning/', kw: '跑路预警', clusters: [
        { id: 'warn-signs', name: '机场跑路前的五大反常前兆', kw: '机场跑路前兆', intent: '风险识别' },
        { id: 'warn-blacklist', name: '近期失联与异常运营机场通报', kw: '机场跑路名单', intent: '排雷避坑' }
      ]},
      { id: 'faq', name: '机场 FAQ', url: '/resources/faq/', kw: '机场 FAQ', clusters: [
        { id: 'faq-purchase', name: '购买前计费周期与退款政策解答', kw: '买机场常见问题', intent: '购买解答' },
        { id: 'faq-usage', name: '流量消耗过快与DNS污染解答', kw: '机场流量跑得快原因', intent: '使用技巧' }
      ]},
      { id: 'risks', name: '机场风险情报', url: '/resources/risks/', kw: '机场风险情报', clusters: [
        { id: 'risk-audit', name: '中转日志审计与个人隐私保护', kw: '机场会被喝茶吗', intent: '隐私法务' },
        { id: 'risk-payment', name: '支付宝/微信付款安全与虚拟币', kw: '机场支付安全性', intent: '交易安全' }
      ]},
      { id: 'node-check', name: '节点检测', url: '/resources/node-check/', kw: '节点检测', clusters: [
        { id: 'check-speed', name: '客观测试节点真延迟与极限带宽', kw: '机场测速工具教程', intent: '动手测速' },
        { id: 'check-unlock', name: '流媒体与AI工具原生IP解锁检测', kw: '检测节点是否原生IP', intent: 'IP验证' }
      ]},
      { id: 'subscription-issues', name: '订阅问题', url: '/resources/subscription-issues/', kw: '订阅问题', clusters: [
        { id: 'sub-error', name: '订阅拉取失败404返回空节点修复', kw: '机场订阅拉取失败', intent: '故障修复' },
        { id: 'sub-update', name: '自动更新订阅与分流节点自动刷新', kw: 'Clash定时更新订阅', intent: '运维技巧' }
      ]},
      { id: 'beginner', name: '新手帮助', url: '/resources/beginner/', kw: '新手帮助', clusters: [
        { id: 'begin-flow', name: '零基础从买机场到顺畅上网五步', kw: '新手怎么用机场', intent: '完整闭环' },
        { id: 'begin-terms', name: 'IEPL/BGP/倍率等专业术语解析', kw: '机场专有名词解释', intent: '知识储备' }
      ]}
    ]
  }
];

// 1. Generate 4 Top Nav Portal Pages
console.log('Generating 4 Top Nav Portal Pages...');
navStructure.forEach(t => {
  const content = `---
title: ${t.name} - 2026 飞机场专题导航门户
description: ${t.desc} 全面覆盖${t.subTopics.map(s => s.name).join('、')}等 7 大细分专题。
head:
  - - meta
    - name: keywords
      content: ${t.name}, ${t.subTopics.map(s => s.kw).join(', ')}, 飞机场
---

<Breadcrumb :items="[{ name: '${t.name}' }]" />

# ${t.icon} ${t.name} 专题门户

${t.desc}

<CommercialDisclosure />

---

## 📑 ${t.name} 七大核心专题导览

点击进入各专属细分专题，查看系统化的深度评测、文章集群与实操指南：

<div class="brand-grid">
${t.subTopics.map(st => `
  <div class="portal-card">
    <h3><a href="${st.url}">${st.name}</a></h3>
    <p>核心搜索词：<b>${st.kw}</b>。包含【${st.clusters[0].name}】与【${st.clusters[1].name}】等深度三级集群。</p>
    <div style="margin-top: 0.75rem;">
      <a href="${st.url}" class="detail-link">浏览 ${st.name} 专题页面 ➔</a>
    </div>
  </div>
`).join('\n')}
</div>

---

## 🌟 推荐合作与实测品牌

<div class="brand-grid">
  <BrandCard :brand="brands.find(b => b.slug === 'guangsu')!" />
  <BrandCard :brand="brands.find(b => b.slug === 'muguang')!" />
  <BrandCard :brand="brands.find(b => b.slug === 'feimao')!" />
</div>

<div style="text-align: center; margin: 2rem 0;">
  <a href="/brands/" class="cta-button">查阅 40+ 完整机场品牌库 ➔</a>
</div>
`;
  writeMd(`${t.id}/index.md`, content);
});

// 2. Generate 28 Sub-topic Pages
console.log('Generating 28 Sub-topic Pages...');
navStructure.forEach(t => {
  t.subTopics.forEach(st => {
    const content = `---
title: 2026 ${st.name}精选指南 - ${st.kw}实测报告与选购指南
description: 为您汇总 2026 最新${st.kw}相关评测与核心知识，深入解析${st.name}优缺点、价格方案与真实使用体验。
head:
  - - meta
    - name: keywords
      content: ${st.kw}, ${st.name}, 2026${st.kw}, ${st.kw}哪个好, ${st.kw}评测
---

<Breadcrumb :items="[{ name: '${t.name}', link: '${t.url}' }, { name: '${st.name}' }]" />

# 2026 ${st.name}精选指南与深度实测

本专题围绕 **${st.kw}** 展开，系统解决用户在挑选、配置与优化过程中的核心痛点。

<CommercialDisclosure />

---

## 📚 本专题三级文章集群与核心入口

以下为本专题下辖的核心文章集群，点击代表文章即可直接阅读深度内容：

<div class="brand-grid">
${st.clusters.map((c, idx) => `
  <div class="portal-card">
    <div class="fjc-badge fjc-badge-blue">集群 ${idx + 1}</div>
    <h3 style="margin: 0.5rem 0;"><a href="${st.url}${c.id}-p1.html">${c.name}</a></h3>
    <p>搜索意图：<b>${c.intent}</b> | 核心词：<b>${c.kw}</b></p>
    <div style="margin-top: 0.5rem;">
      <a href="${st.url}${c.id}-p1.html" class="detail-link">阅读代表文章：${c.kw}深度选型指南 ➔</a>
    </div>
  </div>
`).join('\n')}
</div>

---

## ⚡ 专选测速与代表品牌

在选择 **${st.kw}** 方案时，建议优先考虑具有独立 IEPL 专线或 BGP 智能中转的成熟品牌：

<div class="brand-grid">
  <BrandCard :brand="brands.find(b => b.slug === 'guangsu')!" />
  <BrandCard :brand="brands.find(b => b.slug === 'muguang')!" />
</div>

<NetworkPerformanceReport 
  brand="光速云" 
  testDate="2026-10-19"
  client="Clash Verge Rev"
/>

---

## ❓ ${st.name} 常见问题解答 (FAQ)

### 1. 挑选${st.kw}最关键的指标是什么？
核心看三点：**晚高峰丢包率**（直接决定视频是否缓冲）、**线路架构**（IEPL 优于普通公网中转）、**退款与计费周期**（首选月付测试，避开长周期深坑）。

### 2. 是否存在完全免费且长期稳定的${st.kw}？
不存在长期稳定的全免费商业梯子。免费节点通常存在严重限速、极高丢包或日志嗅探风险，适合短时间查资料应急；日常高频办公或观影建议选购低至几元至十几元的高性价比月付套餐。
`;
    writeMd(`${t.id}/${st.id}/index.md`, content);
  });
});

// 3. Generate 56 Representative Full-Text Cluster Articles
console.log('Generating 56 Representative Cluster Articles...');
let publishedCount = 0;
navStructure.forEach(t => {
  t.subTopics.forEach(st => {
    st.clusters.forEach((c, cIdx) => {
      publishedCount++;
      const slug = `${c.id}-p1`;
      const title = `${c.kw}：${c.name}深度选型指南与避坑要点 (2026 最新实测)`;

      const content = `---
title: ${title}
description: 围绕${c.kw}展开的2026系统化深度指南。分析${c.name}的核心痛点、网络拓扑、不同预算套餐横向测算与常见避坑规则。
head:
  - - meta
    - name: keywords
      content: ${c.kw}, ${c.name}, ${c.kw}怎么样, ${c.kw}推荐, 2026${c.kw}
---

<Breadcrumb :items="[
  { name: '${t.name}', link: '${t.url}' },
  { name: '${st.name}', link: '${st.url}' },
  { name: '${c.name}' }
]" />

# ${title}

> **【Answer-First 核心结论】**：围绕 **${c.kw}** 的选型，核心取决于网络线路的抗封锁能力与晚高峰稳定性。对于追求极致稳定的用户，优先选用具备 **IEPL 内网专线** 的老牌服务（如光速云、暮光加速）；对于轻度预算敏感用户，选择支持月付或不限时计费的平价方案更具性价比。购买时务必警惕超长周期年付折扣陷阱，坚持“先月付实测，后按需续期”的基本原则。

<CommercialDisclosure />

---

## 一、用户核心需求与痛点分析

在针对 **${c.kw}** 的日常搜索意图中，用户往往面临以下三大典型痛点：

1. **晚高峰网络严重卡顿**：白天下行带宽充足，但到了晚间 20:00–23:00 黄金时段，公网中转节点延迟骤增、TCP 重传率飙升，4K 视频频繁转圈。
2. **AI 工具与流媒体频繁报错**：ChatGPT、Claude 等现代 AI 平台对数据中心机房 IP 实施严格阻断，普通劣质节点极易触发 \`Access Denied\`。
3. **价格与计费陷阱**：部分商家将“年付折算月均价”虚标为真实单月付价格，用户支付后发现无法退款且服务质量迅速下滑。

---

## 二、线路技术与架构横向对比

网络性能的本质由其底层物理骨干网决定。以下为不同架构的技术特征对比：

| 线路类型 | 传输路径 | 晚高峰稳定性 | 抗封锁能力 | 综合成本 |
|---------|---------|-------------|-----------|---------|
| **IEPL 企业专线** | 物理光缆直连，不走公网 GFW | 极高 (丢包率 < 0.5%) | 极强 | 适中至偏高 |
| **IPLC 国际专线** | 专线局域网跨境互通 | 极高 (低延迟) | 极强 | 偏高 |
| **多线 BGP 中转** | 国内各运营商智能调度出口 | 较好 (视公网波动) | 中等 | 平价亲民 |
| **公网直连 (直连中转)** | 跨公网路由直连境外 | 差 (晚高峰极易 QoS) | 较弱 | 极低 |

<NetworkTopology 
  brand="推荐专线网络" 
  lineType="IEPL / IPLC 内网专线"
/>

---

## 三、精选代表品牌与实测数据

针对 **${c.kw}** 场景，以下品牌具备成熟的运维能力与真实测速支持：

<div class="brand-grid">
  <BrandCard :brand="brands.find(b => b.slug === 'guangsu')!" />
  <BrandCard :brand="brands.find(b => b.slug === 'muguang')!" />
</div>

<NetworkPerformanceReport 
  brand="光速云" 
  testDate="2026-10-19"
  client="Clash Verge Rev"
/>

<StreamingAvailabilityMatrix 
  brand="光速云" 
  nodeName="香港 01 IEPL 专线"
/>

---

## 四、新手常见避坑手册

- ❌ **切勿被“不限流量无限速”噱头诱导**：公网带宽成本极高，宣称超低价无限流量的服务商通常存在严重的超售超载问题。
- ❌ **警惕“终身套餐”大促销**：多起机场跑路事件表明，突然推出超低价“永久套餐”往往是跑路套现的前兆。
- ✅ **优先配置规则分流**：使用 Clash Verge Rev 等现代客户端，务必开启 **规则模式**，避免国内常规流量误走代理消耗额度。

---

## 五、常见问题解答 (FAQ)

### Q1: ${c.kw} 适合连接哪些国家的节点？
亚太地区（香港、台湾、日本、新加坡）物理距离较近，延迟通常在 20ms–60ms 之间，适合网页办公与游戏加速；美国节点延迟通常在 130ms–180ms，但流媒体内容库最全，适合追剧。

### Q2: 遇到节点连接超时全红怎么解决？
首先检查系统本地时间是否与网络时间同步（误差不能超过 1 分钟）；其次更新订阅链接，排查节点域名是否遭受临时 DNS 污染；若仍无法解决，可参考 [Clash 故障排查手册](/clash/troubleshooting/)。

---

<div style="text-align: center; margin: 3rem 0;">
  <a href="/brands/guangsu.html" class="cta-button" style="padding: 0.85rem 2rem;">
    查阅光速云万字级深度评测报告 ➔
  </a>
</div>
`;
      writeMd(`${t.id}/${st.id}/${slug}.md`, content);
    });
  });
});

console.log(`Successfully generated ${publishedCount} cluster entry articles!`);
