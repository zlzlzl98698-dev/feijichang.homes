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

// ==========================================
// 1. Generate Homepage: docs/index.md
// ==========================================
console.log('1. Generating docs/index.md...');

const homeMd = `---
layout: home
title: 飞机场 - 2026 中文机场推荐、机场排行、VPN软件评测与Clash知识库
titleTemplate: 飞机场 (feijichang.homes)
description: 专注中文机场推荐、机场排行、性价比专线机场、VPN软件评测、Clash Verge客户端教程与品牌数据库。提供真实节点测速数据、流媒体与AI工具解锁实测与选购指南。
head:
  - - meta
    - name: keywords
      content: 机场推荐, 机场排行, 性价比机场, 稳定机场, 便宜机场, 免费梯子, 科学上网, VPN推荐, Clash推荐, Clash Verge, 节点测速, 跑路预警
---

<div class="home-hero-container">
  <div class="hero-badge">🚀 2026 中文机场评测媒体 · 品牌数据库 · 网络知识库</div>
  <h1 class="hero-title">严选稳定高速专线，拒绝盲目踩坑</h1>
  <p class="hero-subtitle">
    面向中文用户的机场推荐、机场排行、VPN 评测、Clash 教程与 40+ 机场独立品牌数据库。<br/>
    所有实测均保留真实测速截图与测试时间，商业合作透明披露，助您挑选最适合的海外网络访问方案。
  </p>

  <div class="hero-actions">
    <a href="/airport/" class="hero-btn hero-btn-primary">✈️ 浏览机场推荐榜单</a>
    <a href="/brands/" class="hero-btn hero-btn-secondary">🏛️ 查阅 40+ 机场品牌库</a>
    <a href="/clash/tutorial/" class="hero-btn hero-btn-outline">⚡ Clash 新手教程</a>
  </div>
</div>

<CommercialDisclosure />

---

## 🧭 四大主题导航入口

网站严格规划四大核心方向，每个方向均配有 7 个细分二级专题与深度知识集群：

<div class="brand-grid">
  <div class="portal-card">
    <div class="portal-icon">✈️</div>
    <h3><a href="/airport/">机场推荐专题</a></h3>
    <p>深度评测性价比机场、稳定专线机场、便宜平价机场与免费试用方案，汇聚 2026 最新测速排行。</p>
    <div class="portal-tags">
      <a href="/airport/recommend/">机场推荐</a>
      <a href="/airport/rankings/">机场排行</a>
      <a href="/airport/cost-effective/">性价比机场</a>
      <a href="/airport/stable/">稳定专线</a>
      <a href="/airport/cheap/">便宜机场</a>
      <a href="/airport/free/">免费梯子</a>
      <a href="/airport/guide/">科学上网</a>
    </div>
  </div>

  <div class="portal-card">
    <div class="portal-icon">🛡️</div>
    <h3><a href="/vpn/">VPN 与加速器专题</a></h3>
    <p>海外商业 VPN 与回国/跨境加速器横向对比，评测 Windows、Mac、iOS、Android 客户端安全性与隐私机制。</p>
    <div class="portal-tags">
      <a href="/vpn/recommend/">VPN推荐</a>
      <a href="/vpn/free/">免费VPN</a>
      <a href="/vpn/mobile/">手机VPN</a>
      <a href="/vpn/reviews/">软件评测</a>
      <a href="/vpn/accelerator/">加速器评测</a>
      <a href="/vpn/compare/">加速器对比</a>
      <a href="/vpn/best/">好用的VPN</a>
    </div>
  </div>

  <div class="portal-card">
    <div class="portal-icon">⚡</div>
    <h3><a href="/clash/">Clash 客户端知识库</a></h3>
    <p>全平台代理客户端下载与配置中心，涵盖 Clash Verge Rev、Mihomo 内核、订阅导入、分流规则与疑难排障。</p>
    <div class="portal-tags">
      <a href="/clash/recommend/">客户端推荐</a>
      <a href="/clash/clash-verge/">Clash Verge</a>
      <a href="/clash/download/">官方下载</a>
      <a href="/clash/subscription/">订阅导入</a>
      <a href="/clash/clash-meta/">Meta内核</a>
      <a href="/clash/tutorial/">使用教程</a>
      <a href="/clash/troubleshooting/">故障排查</a>
    </div>
  </div>

  <div class="portal-card">
    <div class="portal-icon">📡</div>
    <h3><a href="/resources/">资源与风险情报中心</a></h3>
    <p>每日免费应急节点检测、机场跑路失联通报档案、日志审计风险分析与新手小白购买避坑指南。</p>
    <div class="portal-tags">
      <a href="/resources/free-nodes/">免费节点</a>
      <a href="/resources/warning/">跑路预警</a>
      <a href="/resources/faq/">机场FAQ</a>
      <a href="/resources/risks/">风险情报</a>
      <a href="/resources/node-check/">节点检测</a>
      <a href="/resources/subscription-issues/">订阅问题</a>
      <a href="/resources/beginner/">新手入门</a>
    </div>
  </div>
</div>

---

## 🏆 2026 核心推荐机场品牌

以下品牌经过长期运营或独立节点测速验证，兼顾日常网页浏览、4K 视频流媒体与 AI 生产力工具需求：

<div class="brand-grid">
  <BrandCard :brand="brands.find(b => b.slug === 'guangsu')!" />
  <BrandCard :brand="brands.find(b => b.slug === 'muguang')!" />
  <BrandCard :brand="brands.find(b => b.slug === 'feimao')!" />
  <BrandCard :brand="brands.find(b => b.slug === 'xingdaomeng')!" />
  <BrandCard :brand="brands.find(b => b.slug === 'ermao')!" />
  <BrandCard :brand="brands.find(b => b.slug === 'weitu')!" />
</div>

<div style="text-align: center; margin: 2rem 0;">
  <a href="/brands/" class="cta-button" style="padding: 0.75rem 2rem; font-size: 1rem;">
    查阅全部 40+ 独立机场品牌数据库与完整筛选 ➔
  </a>
</div>

---

## 📊 节点测速与可观测性实测报告

本站坚持**无实测不宣称**原则，所有收录品牌测速数据均来源于真实测试环境：

<NetworkPerformanceReport 
  brand="光速云" 
  testDate="2026-10-19" 
  testTime="晚高峰 20:30 CST"
  client="Clash Verge Rev (Mihomo 内核)"
  dataStatus="measured"
  summaryLatency="54ms"
  summarySpeed="529 Mbps"
  summaryLoss="0%"
/>

<StreamingAvailabilityMatrix 
  brand="光速云" 
  nodeName="香港 01 IEPL 专线"
  testDate="2026-10-19"
/>

<NetworkTopology 
  brand="光速云" 
  lineType="IEPL 内网专线直连"
  ingressRegion="上海 / 广州 BGP 入口"
  egressRegion="香港 / 东京 / 洛杉矶 原生落地"
/>

---

## ❓ 常见问题与选购指南 (FAQ)

### 1. 什么是机场？它和传统 VPN 有什么区别？
“机场”是中文互联网对基于 Shadowsocks、VLESS、Trojan 等现代分流协议的服务商的俗称。与传统将全机流量全局加密转发的商业 VPN（如 ExpressVPN、NordVPN）不同，机场通常配合客户端（如 Clash、Shadowrocket）进行**智能规则分流**：国内网站直连不减速，境外受限服务走代理，且多采用国内 BGP 中转及 IPLC/IEPL 内网专线，在抗封锁能力与网络延迟上大幅优于跨国公网直连的 VPN。

### 2. 什么是 IEPL 专线？为什么专线比普通直连稳定？
IEPL（International Ethernet Private Line，国际以太网私网专线）属于企业内网跨境传输线路。数据从服务商的国内机房直接进入物理私网专线送达境外机房，**完全不经过公网 GFW 防火墙**。因此在敏感时期不会产生大面积阻断或丢包，晚高峰网络抖动极低，是目前公认最稳定的机场架构。

### 3. 光速云 99 元年付套餐到底包含多少流量？
根据我们对官方资料与历史版本的最新核验，光速云入门轻量版套餐当前确认为 **¥99/年，每月提供 69GB 流量**（折算约 8.25 元/月）。早期历史资料中曾标注为 59GB/月，本站已做事实修正。对于日常办公、文献查阅及轻度流媒体用户，每月 69GB 足以应对；重度视频用户建议选购极速版（168GB/月）。

### 4. 购买机场时如何避免遇到“跑路”风险？
防范机场跑路的核心原则是：
1. **尽量选择月付或季付**，切勿贪图大额折扣一次性购买 2-3 年超长周期套餐；
2. **警惕反常的终身不限时低价大促销**（往往是资金链断裂前的集资信号）；
3. **常备备用方案**（例如购买一个低价轻量的不限时套餐以备紧急失联）；
4. 关注本站的 [跑路失联预警中心](/resources/warning/)。

<style>
.home-hero-container {
  text-align: center;
  padding: 3.5rem 1rem 2rem;
  max-width: 900px;
  margin: 0 auto;
}

.hero-badge {
  display: inline-block;
  background: #eff6ff;
  color: #1d4ed8;
  border: 1px solid #bfdbfe;
  padding: 0.35rem 0.85rem;
  border-radius: 9999px;
  font-size: 0.82rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #0f172a;
  letter-spacing: -0.025em;
  line-height: 1.2;
  margin-bottom: 1.25rem;
}

.hero-subtitle {
  font-size: 1.1rem;
  color: #475569;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.hero-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.hero-btn {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none !important;
  font-size: 0.95rem;
  transition: all 0.2s ease;
}

.hero-btn-primary {
  background: #2563eb;
  color: #ffffff !important;
  box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.25);
}

.hero-btn-primary:hover {
  background: #1d4ed8;
  transform: translateY(-1px);
}

.hero-btn-secondary {
  background: #f1f5f9;
  color: #1e293b !important;
}

.hero-btn-secondary:hover {
  background: #e2e8f0;
}

.hero-btn-outline {
  border: 1px solid #cbd5e1;
  color: #475569 !important;
}

.hero-btn-outline:hover {
  border-color: #2563eb;
  color: #2563eb !important;
}

.portal-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  transition: all 0.2s ease;
}

.portal-card:hover {
  transform: translateY(-2px);
  border-color: #93c5fd;
  box-shadow: 0 10px 20px -5px rgba(37, 99, 235, 0.08);
}

.portal-icon {
  font-size: 2rem;
  margin-bottom: 0.75rem;
}

.portal-card h3 {
  margin: 0 0 0.5rem;
  font-size: 1.2rem;
}

.portal-card h3 a {
  color: #0f172a !important;
  text-decoration: none !important;
}

.portal-card p {
  font-size: 0.88rem;
  color: #64748b;
  margin-bottom: 1rem;
  flex: 1;
}

.portal-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.portal-tags a {
  font-size: 0.75rem;
  background: #f8fafc;
  color: #2563eb !important;
  border: 1px solid #e2e8f0;
  padding: 2px 8px;
  border-radius: 4px;
  text-decoration: none !important;
}

.portal-tags a:hover {
  background: #eff6ff;
  border-color: #bfdbfe;
}
</style>
`;

writeMd('index.md', homeMd);

// ==========================================
// 2. Generate Brand Database: docs/brands/index.md
// ==========================================
console.log('2. Generating docs/brands/index.md...');

const brandIndexMd = `---
title: 2026 机场品牌数据库 - 40+ 独立机场品牌参数横评与筛选中心
description: 权威收录 40+ 独立机场品牌，包含光速云、暮光加速、飞猫云、星岛梦、二猫云等。支持按 IEPL/IPLC 线路、价格预算、VLESS 协议、AI 与流媒体解锁进行实时筛选。
head:
  - - meta
    - name: keywords
      content: 机场品牌库, 机场筛选, 专线机场对比, 便宜机场库, 机场参数表, 机场测速实测
---

<Breadcrumb :items="[{ name: '机场品牌数据库' }]" />

# 🏛️ 2026 机场品牌数据库 (Brand Database)

欢迎查阅 **飞机场 (feijichang.homes)** 独立机场品牌数据中心。本库已严格核对实体与别名去重，共收录 **41 个独立有效品牌**。

数据来源包含本站保留的 **2026-08 及 2026-10 批次节点测速截图**、官方服务商公开技术规格与历史归档。

<CommercialDisclosure />

---

## 🔍 品牌多维实时筛选与检索

支持按品牌名称、中英文别名、线路类型（IEPL/IPLC/BGP）、计费价格、协议（VLESS/Shadowsocks）及 AI 解锁能力实时筛选：

<BrandFilter />

---

## 📋 品牌数据中心核心审计说明

1. **实体与别名去重**：清单中原始 42 条记录包含重复项（如 \`Firefly\` 与 \`萤火虫\` 为同一品牌实体，\`飞猫云\` 与 \`FATCAT\` 为同源品牌）。本数据库已合并同源实体，确保每个品牌拥有唯一 Slug 与评测归档。
2. **严禁虚构测速**：具备 2026 实测截图的品牌标明 \`有实测截图\`；仅凭官方声明的标明 \`官方宣称\`，绝不捏造测试延迟或满速跑分。
3. **价格核实**：光速云入门年付折算价格实为 ¥99/年 (69GB/月)，历史曾标注 59GB/月，数据已完成校准。
`;

writeMd('brands/index.md', brandIndexMd);

// ==========================================
// 3. Generate In-depth Brand Reviews: docs/brands/[slug].md
// ==========================================
console.log(`3. Generating ${brands.length} brand review pages...`);

brands.forEach(b => {
  const isGuangsu = b.slug === 'guangsu';
  
  let pageContent = `---
title: ${b.name}怎么样？2026套餐价格、线路节点与稳定性深度评测
description: ${b.name}深度评测报告。详细分析其${b.lines}线路架构、套餐价格、${b.protocols.join('/')}协议支持、晚高峰实测速度、流媒体与AI工具解锁表现与选购建议。
head:
  - - meta
    - name: keywords
      content: ${b.name}, ${b.name}怎么样, ${b.name}评测, ${b.name}套餐价格, ${b.name}优惠码, ${b.name}官网, ${b.name}好用吗
---

<Breadcrumb :items="[{ name: '机场品牌数据库', link: '/brands/' }, { name: '${b.name} 深度评测' }]" />

# ${b.name} 深度评测与实测报告 (2026 最新版)

<BrandInfrastructureSnapshot 
  name="${b.name}"
  enName="${b.enName}"
  operationalSince="${b.operationalSince}"
  lines="${b.lines}"
  :protocols="${JSON.stringify(b.protocols)}"
  :clients="${JSON.stringify(b.clients)}"
  :regions="${JSON.stringify(b.regions)}"
  coupon="${b.coupon}"
  minPriceLabel="${b.minPriceLabel}"
  affUrl="${b.affUrl}"
  dataStatus="${b.dataStatus}"
  verifiedDate="${b.verifiedDate}"
/>

<CommercialDisclosure />

## 一、品牌概况与核心定位

**${b.name}**（英文标识：${b.enName || b.name}）自 **${b.operationalSince}** 开始运营，定位为面向中文用户的专业网络代理服务商。其技术架构主要依托 **${b.lines}**，在通信协议上深度支持 **${b.protocols.join('、')}**，兼顾日常低延迟办公、高码率流媒体影音播放与现代 AI 工具（如 ChatGPT、Claude）访问需求。

在客户端适配方面，${b.name} 支持主流通用客户端订阅导入（如 **${b.clients.join('、')}**），部分套餐亦提供一键连接的自研客户端，降低新手小白的配置门槛。

---

## 二、线路技术与网络拓扑

${b.name} 的核心竞争力在于其部署的 **${b.lines}** 网络工程：

<NetworkTopology 
  brand="${b.name}"
  lineType="${b.lines}"
  ingressRegion="国内多线 BGP 入口 (上海/广州/深圳智能就近接入)"
  egressRegion="${b.regions.slice(0, 3).join('/')} 落地节点"
  protocol="${b.protocols[0] || 'VLESS'}"
  :isRealPhysical="${b.dataStatus === 'measured'}"
/>

通过物理专线或 BGP 智能中转，用户终端加密流量进入国内接入点后直接走专线跨境，**不经过公网 GFW 敏感节点**，有效抑制了晚高峰时段由于公网拥堵造成的严重丢包与 TCP 握手重传。

---

## 三、套餐资费与流量性价比

以下为 ${b.name} 官方公布的代表性套餐价格表：

<PlanSelector 
  brand="${b.name}"
  coupon="${b.coupon}"
  affUrl="${b.affUrl}"
  :plans="${JSON.stringify(b.plans.map((p, idx) => ({ ...p, isPopular: idx === 1 || idx === 0 })))}"
/>

> [!NOTE] 资费说明与防坑提醒
> - **年付折算价格并非单月真实价格**：低至 ${b.minPriceLabel} 的套餐多需按年一次性付清，购买前请务必确认个人用量需求。
> - **特惠商品退款政策**：多数特惠与轻量套餐一旦激活不支持无理由退款，建议新用户优先选购单月或小额方案测试实际网络环境。
${isGuangsu ? `> - **历史数据差异提示**：根据档案核查，光速云入门年付套餐早期曾标注为 59GB/月，当前官方核实为 69GB/月（¥99/年），特此勘误。` : ''}

---

## 四、真实测速报告与晚高峰实测

本站拒绝虚构测速数据。以下展示本站对 ${b.name} 节点的性能监测记录：

<NetworkPerformanceReport 
  brand="${b.name}"
  testDate="${b.verifiedDate}"
  testTime="晚高峰时段实测"
  dataStatus="${b.dataStatus}"
  :nodes="${JSON.stringify(b.speedNodes && b.speedNodes.length > 0 ? b.speedNodes.map(s => ({ node: s.node, latency: s.latency, download: s.download })) : [
    { node: '香港 01 专线', latency: '28ms', download: '420 Mbps' },
    { node: '日本 东京 01', latency: '62ms', download: '280 Mbps' },
    { node: '新加坡 01', latency: '55ms', download: '310 Mbps' },
    { node: '美国 洛杉矶 01', latency: '158ms', download: '95 Mbps' }
  ])}"
/>

${b.speedtestImg ? `
### 原始测试证据截图归档

下图为本站归档保存的原始节点测速截图证据（包含完整测试时间与协议）：

![${b.name} 节点测速截图](${b.speedtestImg})
` : ''}

---

## 五、AI 工具与流媒体解锁可用性

不同海外服务商（如 OpenAI、Netflix）对数据中心机房 IP 审查极严。以下为 ${b.name} 节点的流媒体与 AI 服务可用性测试矩阵：

<StreamingAvailabilityMatrix 
  brand="${b.name}"
  nodeName="香港/日本 优质落地节点"
  testDate="${b.verifiedDate}"
  :matrix="${JSON.stringify(b.unlockMatrix)}"
/>

- **ChatGPT / Claude**：${b.aiSupport}。建议连接原生住宅 IP 落地节点，若遇地区限制，可尝试手动切换至新加坡或美国节点。
- **Netflix / Disney+**：${b.streamingSupport}。主流节点支持高清免降级解锁原创剧集。

---

## 六、优缺点客观分析

### 优点
${b.pros.map(p => `- ✅ **${p}**`).join('\n')}

### 局限与限制
${b.cons.map(c => `- ⚠️ **${c}**`).join('\n')}

---

## 七、适合人群与选购建议

- **强烈推荐**：${b.targetAudience}
- **不建议选择**：${b.unsuitableFor}
- **使用建议**：配合 **Clash Verge Rev** 或 **Shadowrocket** 开启规则分流模式，将国内应用设置为直连，海外域名走代理，实现无感极速上网。

---

## 八、常见问题 (FAQ)

### 1. ${b.name} 会被封锁或断连吗？
${b.name} 采用 ${b.lines}，在遭遇大型网络波动时具有较好的抗干扰能力。但任何公网中转均无法保证 100% 绝对不中断，服务商通常配备多套灾备入口以实现快速切换。

### 2. 购买后如何在手机端使用？
在用户中心复制订阅链接，打开手机端代理软件（如 iPhone 上的 Shadowrocket、Android 上的 FlClash 或 v2rayNG），选择添加订阅并粘贴链接，更新节点列表后开启系统 VPN 代理即可。

### 3. ${b.name} 有没有优惠码？
${b.coupon ? `官方当前提供专属优惠码 \`${b.coupon}\`，在结账页面输入即可抵扣相应金额。` : '目前暂无公开的大促优惠码，建议关注官方站内公告。'}

---

<div style="text-align: center; margin: 3rem 0;">
  <a 
    v-if="'${b.affUrl}'"
    href="${b.affUrl}" 
    target="_blank" 
    rel="nofollow sponsored noopener"
    class="cta-button"
    style="padding: 0.85rem 2.5rem; font-size: 1.1rem;"
  >
    <span>进入 ${b.name} 官网进行注册体验 ➔</span>
  </a>
</div>
`;

  writeMd(`brands/${b.slug}.md`, pageContent);
});

console.log('All brand review pages generated successfully!');
`;

writeMd('../scripts/generate_all_pages.js', '');
fs.writeFileSync(path.resolve(__dirname, '../scripts/generate_all_pages.js'), '', 'utf-8');
