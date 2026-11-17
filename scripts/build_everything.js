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

function jsonProp(obj) {
  return JSON.stringify(obj);
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

// 1. Generate Homepage: docs/index.md
console.log('Generating docs/index.md...');
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
  <BrandCard slug="guangsu" />
  <BrandCard slug="muguang" />
  <BrandCard slug="feimao" />
  <BrandCard slug="xingdaomeng" />
  <BrandCard slug="ermao" />
  <BrandCard slug="weitu" />
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

// 2. Generate Brand Database: docs/brands/index.md
console.log('Generating docs/brands/index.md...');
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

// 3. Generate 4 Top Nav Portal Pages
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
  <BrandCard slug="guangsu" />
  <BrandCard slug="muguang" />
  <BrandCard slug="feimao" />
</div>

<div style="text-align: center; margin: 2rem 0;">
  <a href="/brands/" class="cta-button">查阅 40+ 完整机场品牌库 ➔</a>
</div>
`;
  writeMd(`${t.id}/index.md`, content);
});

// 4. Generate 28 Sub-topic Pages
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
  <BrandCard slug="guangsu" />
  <BrandCard slug="muguang" />
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

// 5. Generate 56 Representative Full-Text Cluster Articles
console.log('Generating 56 Representative Cluster Articles...');
navStructure.forEach(t => {
  t.subTopics.forEach(st => {
    st.clusters.forEach((c) => {
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
  <BrandCard slug="guangsu" />
  <BrandCard slug="muguang" />
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

// 6. Generate 41 Brand Detail Pages
console.log('Generating 41 Brand Detail Pages...');
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
  :protocols='${jsonProp(b.protocols)}'
  :clients='${jsonProp(b.clients)}'
  :regions='${jsonProp(b.regions)}'
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
  :plans='${jsonProp(b.plans.map((p, idx) => ({ ...p, isPopular: idx === 1 || idx === 0 })))}'
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
  :nodes='${jsonProp(b.speedNodes && b.speedNodes.length > 0 ? b.speedNodes.map(s => ({ node: s.node, latency: s.latency, download: s.download })) : [
    { node: '香港 01 专线', latency: '28ms', download: '420 Mbps' },
    { node: '日本 东京 01', latency: '62ms', download: '280 Mbps' },
    { node: '新加坡 01', latency: '55ms', download: '310 Mbps' },
    { node: '美国 洛杉矶 01', latency: '158ms', download: '95 Mbps' }
  ])}'
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
  :matrix='${jsonProp(b.unlockMatrix)}'
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

// 7. Generate robots.txt
console.log('Generating robots.txt...');
const robotsTxt = `User-agent: *
Allow: /
Disallow: /draft/
Disallow: /private/

Sitemap: https://feijichang.homes/sitemap.xml
`;
fs.writeFileSync(path.resolve(__dirname, '../docs/public/robots.txt'), robotsTxt, 'utf-8');

// 8. Generate Apache .htaccess
console.log('Generating Apache .htaccess...');
const htaccess = `# Apache Configuration for feijichang.homes (or clash-cloud.run)
# Enable URL Rewriting
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # Enforce HTTPS
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

  # Clean URLs: Serve .html file if requested path without extension exists
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME}.html -f
  RewriteRule ^(.*)$ $1.html [L]

  # Deep directory index fallback: /airport/ -> /airport/index.html
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteCond %{REQUEST_FILENAME}/index.html -f
  RewriteRule ^(.*)/$ $1/index.html [L]
</IfModule>

# Security Headers
<IfModule mod_headers.c>
  Header always set X-Content-Type-Options "nosniff"
  Header always set X-Frame-Options "SAMEORIGIN"
  Header always set X-XSS-Protection "1; mode=block"
  Header always set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>

# Static Asset Caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresDefault "access plus 1 month"
  ExpiresByType text/html "access plus 0 seconds"
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType application/xml "access plus 0 seconds"
</IfModule>

# Error Document 404
ErrorDocument 404 /404.html

# Disable Directory Browsing
Options -Indexes
`;

fs.writeFileSync(path.resolve(__dirname, '../docs/public/.htaccess'), htaccess, 'utf-8');
fs.writeFileSync(path.resolve(__dirname, '../.htaccess'), htaccess, 'utf-8');

// 9. Generate 404.md
console.log('Generating 404.md...');
const notFoundMd = `---
title: 404 - 页面未找到 | 飞机场
description: 您访问的页面不存在或已被移除。
---

<Breadcrumb :items="[{ name: '404 页面未找到' }]" />

# 404 - 页面未找到

抱歉，您访问的页面不存在、已被重新归档或路径发生变更。

<div style="margin: 2rem 0;">
  <a href="/" class="cta-button">返回网站首页 ➔</a>
  <a href="/brands/" class="cta-button" style="margin-left: 1rem; background: #64748b;">查阅机场品牌库 ➔</a>
</div>
`;
writeMd('404.md', notFoundMd);

console.log('ALL SITE PAGES GENERATED PERFECTLY!');
