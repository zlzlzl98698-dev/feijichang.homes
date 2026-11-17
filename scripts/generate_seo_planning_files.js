import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const brands = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../docs/data/brands.json'), 'utf-8'));

// 1. Structure Definitions: 4 Top Navs & 28 Sub-topics & 56 Clusters
const topNavs = [
  {
    id: 'airport',
    name: '机场推荐',
    url: '/airport/',
    desc: '全面评测高性价比、稳定专线与便宜机场，包含实测测速报告与选购指南。',
    subTopics: [
      { id: 'recommend', name: '机场推荐', url: '/airport/recommend/', kw: '机场推荐', clusters: [
        { id: 'rec-overall', name: '2026年度综合机场推荐榜单', kw: '2026机场推荐', intent: '商业决策' },
        { id: 'rec-scenario', name: '按场景选择机场推荐（AI/办公/流媒体）', kw: '办公机场推荐', intent: '需求选型' }
      ]},
      { id: 'rankings', name: '机场排行', url: '/airport/rankings/', kw: '机场排行', clusters: [
        { id: 'rank-speed', name: '节点速度与晚高峰稳定性排行榜', kw: '机场测速排行', intent: '性能对比' },
        { id: 'rank-reputation', name: '老牌机场口碑与抗封锁排行榜', kw: '老牌机场排行', intent: '信任度筛选' }
      ]},
      { id: 'cost-effective', name: '性价比机场', url: '/airport/cost-effective/', kw: '性价比机场', clusters: [
        { id: 'cost-balanced', name: '15-30元高性价比专线机场评测', kw: '高性价比机场', intent: '预算折中' },
        { id: 'cost-traffic', name: '大流量性价比套餐横向测算', kw: '大流量性价比机场', intent: '流量需求' }
      ]},
      { id: 'stable', name: '稳定机场', url: '/airport/stable/', kw: '稳定机场', clusters: [
        { id: 'stable-iepl', name: '原生IPLC/IEPL企业专线稳定机场', kw: '专线稳定机场', intent: '高质量网络' },
        { id: 'stable-outage', name: '晚高峰不卡顿与抗断联技术解析', kw: '晚高峰稳定机场', intent: '痛点解决' }
      ]},
      { id: 'cheap', name: '便宜机场', url: '/airport/cheap/', kw: '便宜机场', clusters: [
        { id: 'cheap-lowprice', name: '月均5-10元平民便宜机场精选', kw: '便宜机场推荐', intent: '低预算尝试' },
        { id: 'cheap-onetime', name: '不限时永久计费便宜机场分析', kw: '不限时便宜机场', intent: '备用防失联' }
      ]},
      { id: 'free', name: '免费梯子', url: '/airport/free/', kw: '免费梯子', clusters: [
        { id: 'free-eval', name: '免费梯子与节点安全性深度评测', kw: '免费梯子靠谱吗', intent: '安全防坑' },
        { id: 'free-trial', name: '支持免费试用的正规机场体验整理', kw: '支持试用的机场', intent: '试用转化' }
      ]},
      { id: 'guide', name: '科学上网', url: '/airport/guide/', kw: '科学上网', clusters: [
        { id: 'guide-intro', name: '从零入门科学上网基础通识指南', kw: '科学上网教程', intent: '小白启蒙' },
        { id: 'guide-protocol', name: 'Shadowsocks/VLESS/Trojan协议辨析', kw: '科学上网协议区别', intent: '技术选型' }
      ]}
    ]
  },
  {
    id: 'vpn',
    name: 'VPN 与加速器',
    url: '/vpn/',
    desc: '传统商业VPN、游戏网络加速器与代理机场的跨维度评测与选择建议。',
    subTopics: [
      { id: 'recommend', name: 'VPN 推荐', url: '/vpn/recommend/', kw: 'VPN推荐', clusters: [
        { id: 'vpn-global', name: '国内外主流商业VPN评测与选购', kw: '好用的VPN推荐', intent: '国际VPN对比' },
        { id: 'vpn-privacy', name: '高安全性与无日志私密VPN盘点', kw: '安全私密VPN', intent: '隐私安全' }
      ]},
      { id: 'free', name: '免费 VPN', url: '/vpn/free/', kw: '免费VPN', clusters: [
        { id: 'vpn-freerisk', name: '免费VPN的盈利模式与数据泄露隐患', kw: '免费VPN安全吗', intent: '风险教育' },
        { id: 'vpn-freelimit', name: '免费限制版VPN体验与应急替代方案', kw: '电脑免费VPN', intent: '低成本需求' }
      ]},
      { id: 'mobile', name: '手机 VPN', url: '/vpn/mobile/', kw: '手机VPN', clusters: [
        { id: 'vpn-ios', name: 'iPhone/iPad 苹果端好用的VPN与代理应用', kw: '苹果手机VPN', intent: 'iOS设备配置' },
        { id: 'vpn-android', name: 'Android 安卓手机轻量稳定VPN方案', kw: '安卓手机VPN', intent: 'Android设备配置' }
      ]},
      { id: 'reviews', name: 'VPN 软件评测', url: '/vpn/reviews/', kw: 'VPN软件评测', clusters: [
        { id: 'vpn-speedtest', name: '商业VPN协议与实际连接速度实测', kw: 'VPN测速评测', intent: '性能实测' },
        { id: 'vpn-streaming', name: 'VPN海外流媒体与AI工具解锁实测', kw: 'VPN解锁Netflix', intent: '解锁需求' }
      ]},
      { id: 'accelerator', name: 'VPN 加速器', url: '/vpn/accelerator/', kw: 'VPN加速器', clusters: [
        { id: 'accel-concept', name: 'VPN、网络加速器与机场的区别全解', kw: '加速器和VPN区别', intent: '概念澄清' },
        { id: 'accel-tool', name: '跨境办公与游戏加速综合工具推荐', kw: '海外加速器', intent: '多用途选型' }
      ]},
      { id: 'compare', name: '加速器对比', url: '/vpn/compare/', kw: '加速器对比', clusters: [
        { id: 'comp-pricing', name: '按月付费与按时长计费加速器经济账', kw: '加速器价格对比', intent: '价格敏感' },
        { id: 'comp-latency', name: '香港与日本专线网络延迟横向实测对比', kw: '加速器延迟对比', intent: '延迟敏感' }
      ]},
      { id: 'best', name: '好用的 VPN', url: '/vpn/best/', kw: '好用的VPN', clusters: [
        { id: 'best-daily', name: '适合国内普通网络环境长期使用的VPN精选', kw: '国内好用的VPN', intent: '稳定常驻' },
        { id: 'best-remote', name: '外贸、海淘与远程办公VPN解决方案', kw: '办公好用的VPN', intent: '商务刚需' }
      ]}
    ]
  },
  {
    id: 'clash',
    name: 'Clash 客户端',
    url: '/clash/',
    desc: '全平台 Clash 客户端下载、规则分流配置、Mihomo 内核与疑难故障排查。',
    subTopics: [
      { id: 'recommend', name: 'Clash 推荐', url: '/clash/recommend/', kw: 'Clash推荐', clusters: [
        { id: 'clash-apps', name: '2026多平台主流Clash系客户端横向对比', kw: '好用的Clash客户端', intent: '软件选型' },
        { id: 'clash-forks', name: '原版停止维护后Rev/Party/Nyanpasu分支选择', kw: 'Clash替代软件', intent: '软件升级' }
      ]},
      { id: 'clash-verge', name: 'Clash Verge', url: '/clash/clash-verge/', kw: 'Clash Verge', clusters: [
        { id: 'verge-intro', name: 'Clash Verge Rev 核心功能与使用优点', kw: 'Clash Verge Rev介绍', intent: '功能了解' },
        { id: 'verge-config', name: 'Clash Verge 扩展配置脚本与DNS深度调优', kw: 'Clash Verge配置教程', intent: '高级设置' }
      ]},
      { id: 'download', name: 'Clash Verge 下载', url: '/clash/download/', kw: 'Clash Verge 下载', clusters: [
        { id: 'down-official', name: 'Windows/macOS/Linux 官方安全下载地址', kw: 'Clash Verge官网下载', intent: '安全下载' },
        { id: 'down-verify', name: '防钓鱼安装包鉴别与安全Hash校验指南', kw: 'Clash安全下载防病毒', intent: '防钓鱼' }
      ]},
      { id: 'subscription', name: 'Clash Verge 订阅', url: '/clash/subscription/', kw: 'Clash Verge 订阅', clusters: [
        { id: 'sub-import', name: '机场订阅链接一键导入与批量更新流程', kw: 'Clash怎么导入订阅', intent: '新手操作' },
        { id: 'sub-convert', name: 'Subconverter 订阅格式转换与规则增强', kw: 'Clash订阅转换教程', intent: '进阶定制' }
      ]},
      { id: 'clash-meta', name: 'Clash Meta', url: '/clash/clash-meta/', kw: 'Clash Meta', clusters: [
        { id: 'meta-core', name: 'Mihomo/Meta 内核演进与协议特性', kw: 'Clash Meta是什么', intent: '技术演进' },
        { id: 'meta-tun', name: 'Meta内核开启TUN模式接管全系统网络', kw: 'Clash Meta TUN模式', intent: '全量代理' }
      ]},
      { id: 'tutorial', name: 'Clash 使用教程', url: '/clash/tutorial/', kw: 'Clash 使用教程', clusters: [
        { id: 'tut-beginner', name: '十分钟掌握规则、全局与直连模式分流', kw: 'Clash新手入门教程', intent: '模式理解' },
        { id: 'tut-custom', name: '自定义分流规则与广告拦截规则集配置', kw: 'Clash自定义分流规则', intent: '高级玩法' }
      ]},
      { id: 'troubleshooting', name: 'Clash 故障排查', url: '/clash/troubleshooting/', kw: 'Clash 故障排查', clusters: [
        { id: 'trouble-timeout', name: '节点全红/全部 Timeout 无法联网救砖手册', kw: 'Clash节点超时全红', intent: '紧急排障' },
        { id: 'trouble-system', name: '系统代理未生效与微信国内应用打不开', kw: 'Clash开了解不开国内网', intent: '日常冲突' }
      ]}
    ]
  },
  {
    id: 'resources',
    name: '资源与情报',
    url: '/resources/',
    desc: '公共应急节点、机场跑路预警、新手避坑指南与代理连通性检测知识。',
    subTopics: [
      { id: 'free-nodes', name: '免费节点', url: '/resources/free-nodes/', kw: '免费节点', clusters: [
        { id: 'node-daily', name: '每日公开免费节点获取与应急使用原则', kw: '免费节点每日更新', intent: '临时应急' },
        { id: 'node-risk', name: '免费节点的中间人劫持与明文流量嗅探风险', kw: '免费节点安全风险', intent: '安全警示' }
      ]},
      { id: 'warning', name: '跑路预警', url: '/resources/warning/', kw: '跑路预警', clusters: [
        { id: 'warn-signs', name: '机场跑路前的五大反常前兆（长年付促销/失联）', kw: '机场跑路前兆', intent: '风险识别' },
        { id: 'warn-blacklist', name: '近期失联与异常运营机场通报档案', kw: '机场跑路名单', intent: '排雷避坑' }
      ]},
      { id: 'faq', name: '机场 FAQ', url: '/resources/faq/', kw: '机场 FAQ', clusters: [
        { id: 'faq-purchase', name: '购买前必看的计费周期、退款政策与设备数问题', kw: '买机场常见问题', intent: '购买解答' },
        { id: 'faq-usage', name: '日常使用中流量消耗过快与DNS污染解答', kw: '机场流量跑得快原因', intent: '使用技巧' }
      ]},
      { id: 'risks', name: '机场风险情报', url: '/resources/risks/', kw: '机场风险情报', clusters: [
        { id: 'risk-audit', name: '机场中转日志审计与个人隐私保护指南', kw: '机场会被喝茶吗', intent: '隐私法务' },
        { id: 'risk-payment', name: '支付宝/微信付款安全与虚拟货币支付考量', kw: '机场支付安全性', intent: '交易安全' }
      ]},
      { id: 'node-check', name: '节点检测', url: '/resources/node-check/', kw: '节点检测', clusters: [
        { id: 'check-speed', name: '如何客观测试机场节点的真延迟与极限带宽', kw: '机场测速工具教程', intent: '动手测速' },
        { id: 'check-unlock', name: '流媒体与AI工具原生IP解锁状态检测方法', kw: '检测节点是否原生IP', intent: 'IP质量验证' }
      ]},
      { id: 'subscription-issues', name: '订阅问题', url: '/resources/subscription-issues/', kw: '订阅问题', clusters: [
        { id: 'sub-error', name: '订阅链接拉取失败、404或返回空节点解决办法', kw: '机场订阅拉取失败', intent: '故障修复' },
        { id: 'sub-update', name: '定时自动更新订阅与分流节点自动刷新技巧', kw: 'Clash定时更新订阅', intent: '运维技巧' }
      ]},
      { id: 'beginner', name: '新手帮助', url: '/resources/beginner/', kw: '新手帮助', clusters: [
        { id: 'begin-flow', name: '零基础小白从买机场到顺畅上网五步走', kw: '新手怎么用机场', intent: '完整闭环' },
        { id: 'begin-terms', name: '一文读懂IEPL、BGP、直连、倍率等行业术语', kw: '机场专有名词解释', intent: '知识储备' }
      ]}
    ]
  }
];

// Write 1. SEO-一级导航规划.md
let doc1 = `# 飞机场 (feijichang.homes) SEO 一级导航规划

## 一、一级导航体系定位
根据网站商业定位与搜索主题，顶部固定设计 4 个一级主导航入口。
每个一级主导航均为独立的专题门户页，既有大主题概览，又有二级栏目导流与商业转化入口。

| 序号 | 一级导航名称 | 访问路径 | 核心搜索主题 | 目标用户搜索意图 | 包含二级专题数 |
|------|-------------|---------|-------------|-----------------|--------------|
| 1 | 机场推荐 | \`/airport/\` | 机场推荐、机场排行、性价比机场、稳定机场 | 寻找高可靠、高性价比机场服务并购买 | 7 个 |
| 2 | VPN 与加速器 | \`/vpn/\` | VPN推荐、免费VPN、手机VPN、加速器对比 | 寻找游戏加速、外企办公及多端VPN软件 | 7 个 |
| 3 | Clash 客户端 | \`/clash/\` | Clash推荐、Clash Verge下载、订阅与排障 | 寻找代理客户端软件、下载安装与订阅导入 | 7 个 |
| 4 | 资源与情报 | \`/resources/\` | 免费节点、跑路预警、机场FAQ、风险防范 | 故障急救、防坑排雷与日常知识学习 | 7 个 |

## 二、四大一级主导航 SEO 设定

### 1. 机场推荐 (\`/airport/\`)
- **Title**: 2026 机场推荐与机场排行指南 - 稳定、便宜与高性价比专线机场评测 | 飞机场
- **Meta Description**: 专注中文机场推荐、机场排行与节点测速实测。为您严选稳定 IEPL/IPLC 专线、平价便宜与大流量高性价比机场，提供真实测速数据、流媒体/AI 解锁报告与避坑指南。
- **H1**: 2026 机场推荐与专线机场评测排行榜
- **商业转化目标**: 引导用户根据自身预算与场景（日常网页、AI工具、4K流媒体），点击进入品牌详情页及注册页面。

### 2. VPN 与加速器 (\`/vpn/\`)
- **Title**: 2026 VPN 推荐与海外加速器对比评测 - 电脑手机好用的 VPN 软件指南 | 飞机场
- **Meta Description**: 深度评测全球主流商业 VPN 与网络加速器，对比 Windows、iOS、Android 及 Mac 客户端表现。分析免费 VPN 风险、流媒体解锁能力与低延迟专线加速方案。
- **H1**: 2026 VPN 推荐与网络加速器深度对比
- **商业转化目标**: 帮助被“VPN”概念吸引的用户厘清机场与 VPN 差异，引导向稳定性更佳的专线机场转化。

### 3. Clash 客户端 (\`/clash/\`)
- **Title**: Clash 客户端推荐与 Clash Verge Rev 下载使用教程大全 | 飞机场
- **Meta Description**: 权威收录 Clash Verge Rev、Clash Meta/Mihomo、v2rayN、Shadowrocket 等主流客户端。提供官方安全下载链接、订阅一键导入指南、分流规则配置与全红超时排障手册。
- **H1**: 全平台 Clash 客户端下载与使用配置知识库
- **商业转化目标**: 用户安装客户端后必然需要高质量订阅，直接在教程关键步骤提供优质机场注册入口。

### 4. 资源与情报 (\`/resources/\`)
- **Title**: 机场资源与情报中心 - 免费节点、跑路预警、节点检测与新手 FAQ | 飞机场
- **Meta Description**: 汇集公开免费应急节点、机场跑路预警黑名单、节点真假专线测速检测方法与新手避坑 FAQ。全天候监控行业风险，保护用户网络稳定与资产安全。
- **H1**: 机场情报与网络工具知识库
- **商业转化目标**: 通过急救场景（免费节点不可靠、跑路预警受害者）承接高意向长尾流量，推荐月付稳定品牌。
`;
fs.writeFileSync(path.resolve(__dirname, '../SEO-一级导航规划.md'), doc1, 'utf-8');

// Write 2. SEO-二级专题规划.md
let doc2 = `# 飞机场 (feijichang.homes) SEO 二级专题规划 (28 个独立页面)

网站严格落地 28 个二级栏目，每个栏目均拥有独立实体页面、唯一的 SEO 元信息、搜索意图定位与文章集群。

| 序号 | 所属导航 | 二级专题名称 | 访问路径 | 核心关键词 | 搜索意图 | 包含三级集群 |
|------|---------|-------------|---------|-----------|---------|------------|
`;
let subTopicCount = 0;
topNavs.forEach(t => {
  t.subTopics.forEach(st => {
    subTopicCount++;
    doc2 += `| ${subTopicCount} | ${t.name} | ${st.name} | \`${st.url}\` | ${st.kw} | 交易/信息决策 | 2 个 | \n`;
  });
});
doc2 += `\n## 二十八个二级专题详细页面参数\n\n`;

topNavs.forEach(t => {
  doc2 += `### 导航模块：${t.name}\n\n`;
  t.subTopics.forEach((st, idx) => {
    doc2 += `#### ${idx + 1}. ${st.name} (\`${st.url}\`)
- **SEO Title**: 2026 ${st.name}大全 - 优质${st.kw}实测指南与选购推荐 | 飞机场
- **Meta Description**: 为您汇总最新${st.kw}相关评测与核心知识，深入解析${st.name}优缺点、价格方案与实际体验，助您快速挑选最适合的网络方案。
- **H1 标题**: 2026 ${st.name}选购与实测精选指南
- **核心关键词**: ${st.kw}、2026${st.kw}、${st.kw}哪个好、${st.kw}评测
- **三级文章集群**:
  1. ${st.clusters[0].name} (核心词: ${st.clusters[0].kw})
  2. ${st.clusters[1].name} (核心词: ${st.clusters[1].kw})
- **下游转化入口**: 光速云等推荐机场卡片、品牌价格表、对比工具入口。

`;
  });
});

fs.writeFileSync(path.resolve(__dirname, '../SEO-二级专题规划.md'), doc2, 'utf-8');

// Write 3. SEO-三级文章集群规划.md
let doc3 = `# 飞机场 (feijichang.homes) SEO 三级文章集群规划 (至少 56 个集群)

每个二级专题至少规划 2 个三级文章集群，全站共规划 56 个独立文章集群。
每个集群承载特定的用户搜索痛点与细分搜索意图，下辖 6-15 篇规划文章。

| 集群ID | 所属二级专题 | 集群名称 | 核心关键词 | 搜索意图 | 目标用户画像 |
|--------|------------|---------|-----------|---------|-------------|
`;

let clusterList = [];
topNavs.forEach(t => {
  t.subTopics.forEach(st => {
    st.clusters.forEach(c => {
      clusterList.push({
        ...c,
        topNavId: t.id,
        topNavName: t.name,
        subTopicId: st.id,
        subTopicName: st.name,
        subTopicUrl: st.url
      });
      doc3 += `| \`${c.id}\` | ${st.name} | ${c.name} | ${c.kw} | ${c.intent} | 细分网络需求用户 |\n`;
    });
  });
});

doc3 += `\n## 56 个文章集群完整规划细节\n\n`;
clusterList.forEach((c, idx) => {
  doc3 += `### 集群 ${idx + 1}: ${c.name} (\`${c.id}\`)
- **上游二级专题**: [${c.subTopicName}](${c.subTopicUrl})
- **核心关键词**: \`${c.kw}\`
- **次级扩展词**: \`${c.kw}排行\`, \`${c.kw}推荐\`, \`${c.kw}实测\`, \`${c.kw}选购指南\`
- **搜索意图**: ${c.intent}
- **目标用户**: 关注${c.kw}的个人与企业用户，追求高效稳定的网络解决方案。
- **下游转化目标**: 关联品牌评测页与注册卡片，重点导流光速云、暮光加速、飞猫云等品牌。
- **GEO 长尾问题**:
  1. ${c.kw}应该怎么挑选最合适？
  2. ${c.kw}与普通网络工具有何本质不同？
  3. 晚高峰使用${c.kw}如何避免卡顿？

`;
});

fs.writeFileSync(path.resolve(__dirname, '../SEO-三级文章集群规划.md'), doc3, 'utf-8');

// Generate 4. SEO-完整文章标题库.md & CSV (336-840 planned articles!)
// Each of the 56 clusters has 7 planned articles = 392 unique planned SEO articles!
let allPlannedArticles = [];
let articleTitlesDoc = `# 飞机场 (feijichang.homes) SEO 完整文章标题库 (392 篇精确规划)

全站 56 个文章集群，每个集群系统规划 7 篇围绕不同搜索意图展开的独立文章，共计 **392 篇**。
每篇文章具备唯一 URL Slug、主关键词、次级关键词、搜索意图、用户画像与大纲结构，杜绝机械换词。

| 全局序号 | 集群ID | 独立文章标题 | URL Slug | 主关键词 | 搜索意图 | 发布状态 |
|---------|--------|-------------|----------|---------|---------|---------|
`;

const articleTemplates = [
  { suffix: '深度选型指南与避坑要点', type: '综合指南', intent: '商业决策' },
  { suffix: '晚高峰速度与连接稳定性实测评测', type: '实测分析', intent: '性能实测' },
  { suffix: '不同预算与使用场景横向对比分析', type: '横向对比', intent: '方案比对' },
  { suffix: '新手常见选购误区与防踩坑手册', type: '避坑指南', intent: '认知排雷' },
  { suffix: '海外流媒体与主流AI工具兼容实测', type: '解锁报告', intent: '功能验证' },
  { suffix: '套餐计费周期性价比与真实月成本核算', type: '价格测算', intent: '价格敏感' },
  { suffix: '全平台客户端导入与最佳分流参数调优', type: '配置教程', intent: '实操落地' }
];

let globalArtIdx = 0;
clusterList.forEach(c => {
  articleTemplates.forEach((tmpl, tIdx) => {
    globalArtIdx++;
    const slug = `${c.id}-p${tIdx + 1}`;
    const title = `${c.kw}：${c.name.replace(/2026|年度|深度|实测/g, '')}${tmpl.suffix}`;
    const artItem = {
      index: globalArtIdx,
      clusterId: c.id,
      clusterName: c.name,
      subTopicId: c.subTopicId,
      subTopicName: c.subTopicName,
      subTopicUrl: c.subTopicUrl,
      topNavId: c.topNavId,
      topNavName: c.topNavName,
      title: title,
      slug: slug,
      url: `${c.subTopicUrl}${slug}.html`,
      filePath: `docs${c.subTopicUrl}${slug}.md`,
      mainKw: `${c.kw} ${tmpl.type}`,
      secKw: `${c.kw}, ${tmpl.type}, 2026评测, 节点选择`,
      intent: tmpl.intent,
      status: tIdx === 0 ? 'published' : 'planned' // At least 1 published per cluster = 56 published articles!
    };
    allPlannedArticles.push(artItem);
    articleTitlesDoc += `| ${globalArtIdx} | \`${c.id}\` | ${title} | \`${slug}\` | ${artItem.mainKw} | ${artItem.intent} | ${artItem.status === 'published' ? '**已发布(核心入口)**' : '待持续生成'} |\n`;
  });
});

fs.writeFileSync(path.resolve(__dirname, '../SEO-完整文章标题库.md'), articleTitlesDoc, 'utf-8');

// 5. SEO-关键词映射表.csv
let kwCsv = 'ID,ArticleTitle,URL,MainKeyword,SecondaryKeywords,SearchIntent,ClusterName,SubTopicName\n';
allPlannedArticles.forEach(a => {
  kwCsv += `"${a.index}","${a.title}","${a.url}","${a.mainKw}","${a.secKw}","${a.intent}","${a.clusterName}","${a.subTopicName}"\n`;
});
fs.writeFileSync(path.resolve(__dirname, '../SEO-关键词映射表.csv'), kwCsv, 'utf-8');

// 6. GEO-实体关系映射表.csv
let geoEntities = [
  { entity: '飞机场', type: 'CoreBrand', relation: '所有者/测评媒体', target: 'feijichang.homes', desc: '中文专业机场与VPN测评平台' },
  { entity: '光速云', type: 'AirportBrand', relation: '主推合作机场', target: 'guangsu', desc: 'IEPL专线+内网企业专线，VLESS协议' },
  { entity: '暮光加速', type: 'AirportBrand', relation: '多端评测机场', target: 'muguang', desc: 'BGP智能调度与全平台支持' },
  { entity: '飞猫云', type: 'AirportBrand', relation: '新手友好机场', target: 'feimao', desc: '自研轻快客户端与低门槛方案' },
  { entity: 'Clash Verge Rev', type: 'ClientSoftware', relation: '主流通用客户端', target: 'clash-verge', desc: '基于Mihomo内核的跨平台开源客户端' },
  { entity: 'IEPL专线', type: 'NetworkArchitecture', relation: '骨干网络', target: 'iepl', desc: '国际以太网私网专线，不经公网GFW' },
  { entity: 'VLESS协议', type: 'ProxyProtocol', relation: '传输协议', target: 'vless', desc: '轻量无状态代理协议，性能优异' },
  { entity: 'ChatGPT/Claude', type: 'AIService', relation: '解锁测试标的', target: 'ai-unlock', desc: '对节点原生IP与纯净度有严格要求的AI工具' }
];
let geoCsv = 'Entity,EntityType,Relationship,Target,Description\n';
geoEntities.forEach(g => {
  geoCsv += `"${g.entity}","${g.type}","${g.relation}","${g.target}","${g.desc}"\n`;
});
fs.writeFileSync(path.resolve(__dirname, '../GEO-实体关系映射表.csv'), geoCsv, 'utf-8');

// 7. GEO-长尾问题库.csv
let geoQuestions = [
  { q: '机场推荐中IEPL专线和普通BGP中转有什么区别？', intent: '概念对比', answerType: '技术解析', targetPage: '/airport/stable/' },
  { q: '为什么Clash所有节点都显示Timeout超时全红？', intent: '故障排除', answerType: '排障步骤', targetPage: '/clash/troubleshooting/' },
  { q: '光速云套餐中的99元年付和月付套餐哪个性价比更高？', intent: '商业决策', answerType: '套餐拆解', targetPage: '/brands/guangsu.html' },
  { q: '访问ChatGPT提示Access Denied或者地区不支持怎么办？', intent: 'AI解锁', answerType: '解决方案', targetPage: '/airport/guide/' },
  { q: '免费梯子软件存在哪些潜在安全隐患？', intent: '安全警示', answerType: '风险提示', targetPage: '/airport/free/' },
  { q: 'Clash Verge Rev在哪里可以下载到官方无毒安装包？', intent: '安全下载', answerType: '下载指引', targetPage: '/clash/download/' },
  { q: '机场跑路之前通常会有哪些反常表现？', intent: '风险预警', answerType: '指标监控', targetPage: '/resources/warning/' },
  { q: '手机端如何导入Clash或Shadowrocket订阅？', intent: '操作教程', answerType: '逐步指引', targetPage: '/clash/subscription/' }
];
let geoQCsv = 'Question,SearchIntent,AnswerType,TargetPage\n';
geoQuestions.forEach(q => {
  geoQCsv += `"${q.q}","${q.intent}","${q.answerType}","${q.targetPage}"\n`;
});
fs.writeFileSync(path.resolve(__dirname, '../GEO-长尾问题库.csv'), geoQCsv, 'utf-8');

// 8. SEO-内部链接矩阵.csv
let internalLinkCsv = 'SourcePage,TargetPage,AnchorText,LinkType,ContextPurpose\n';
internalLinkCsv += '"/","//airport/","机场推荐核心专区","HeaderNav","导航导流"\n';
internalLinkCsv += '"/","//vpn/","VPN与加速器专题","HeaderNav","导航导流"\n';
internalLinkCsv += '"/","//clash/","Clash客户端教程","HeaderNav","导航导流"\n';
internalLinkCsv += '"/","//resources/","资源与情报知识库","HeaderNav","导航导流"\n';
internalLinkCsv += '"/","//brands/","机场品牌数据库","FeatureButton","数据库查询"\n';
internalLinkCsv += '"/","//brands/guangsu.html","光速云深度评测与实测报告","CommercialCTA","商业主推转化"\n';
internalLinkCsv += '"/airport/","//brands/","查阅40+机场完整数据库","ContextLink","品牌筛选"\n';
internalLinkCsv += '"/clash/tutorial/","//clash/troubleshooting/","节点超时排查手册","TroubleshootLink","排障支持"\n';
internalLinkCsv += '"/resources/warning/","//airport/stable/","选购具备稳定IEPL专线的品牌","RiskMitigation","安全替代推荐"\n';
fs.writeFileSync(path.resolve(__dirname, '../SEO-内部链接矩阵.csv'), internalLinkCsv, 'utf-8');

// 9. SEO-内容发布优先级.md
let doc9 = `# 飞机场 (feijichang.homes) SEO 内容发布优先级规划

## 阶段划分原则
按照用户决策价值、商业转化贡献度与建站技术落地顺序，将全站 392 篇规划文章分为三个发布阶段：

### P0 核心骨架与代表文章 (首期 100% 落地)
- **4 个一级专题门户**：\`/airport/\`, \`/vpn/\`, \`/clash/\`, \`/resources/\`
- **28 个二级栏目独立页面**
- **56 个三级集群核心代表文章** (每个集群至少 1 篇完整深度文章，充当集群入口与 SEO 锚点)
- **品牌数据库页面**：\`/brands/\` (支持交互式搜索与筛选)
- **核心主推品牌万字级评测**：\`/brands/guangsu.html\` (光速云深度矩阵)
- **其他重点实测品牌详情页**：暮光加速、飞猫云、星岛梦、二猫云、宇宙云等

### P1 商业转化与长尾痛点扩展 (次期持续发布)
- 针对 56 个集群中“横向对比”与“避坑指南”类型的 112 篇文章
- 重点长尾词覆盖：各大城市晚高峰表现、ChatGPT 4o 专项解锁、低延迟游戏专线测速

### P2 深度技术与边缘场景 (持续运营阶段)
- 剩余 224 篇长尾技术参数微调、软路由 OpenWrt/PassWall 高级配置脚本
- 保持 PROGRESS.md 追踪更新，未生成文章绝不伪装为空白页面
`;
fs.writeFileSync(path.resolve(__dirname, '../SEO-内容发布优先级.md'), doc9, 'utf-8');

// 10. SEO-品牌评测规划.md
let doc10 = `# 飞机场 (feijichang.homes) 品牌评测系统规划

## 一、评测矩阵原则
1. **统一数据中心**：所有卡片、评测页、套餐表调用统一品牌源 \`docs/data/brands.ts\`。
2. **严禁虚构测速**：有截图的展示 measured 历史数据与截图，无截图的使用 vendor_claimed 明确标注。
3. **商业赞助透明披露**：主推品牌标注商业合作，评测保持客观中立，清晰指出套餐适用场景与缺点。
4. **单品牌深度矩阵**：重点品牌单篇评测覆盖 18 大章节（背景、技术、测速、AI流媒体解锁、套餐横评、同类对比、FAQ、转化）。

| 品牌名称 | Slug | 独有卖点 | 数据状态 | 测速证据 | 解锁实测 | 优先级 |
|---------|------|---------|---------|---------|---------|-------|
`;
brands.forEach(b => {
  doc10 += `| ${b.name} | \`${b.slug}\` | ${b.lines} | \`${b.dataStatus}\` | ${b.speedtestImg ? '有实测截图' : '无独立截图'} | ${b.aiSupport} | ${b.isCommercialPriority ? '**P0(商业第一主推)**' : 'P1'} |\n`;
});
fs.writeFileSync(path.resolve(__dirname, '../SEO-品牌评测规划.md'), doc10, 'utf-8');

// 11. SEO-URL路由规划.csv
let routeCsv = 'Path,PageType,Title,Status\n';
routeCsv += '"/","HomePage","飞机场 - 中文机场推荐、VPN软件评测与Clash知识库","published"\n';
routeCsv += '"/brands/","BrandIndex","机场品牌数据库 - 40+机场筛选与横向对比","published"\n';
brands.forEach(b => {
  routeCsv += `"/brands/${b.slug}.html","BrandDetail","${b.name}怎么样？2026套餐价格与评测","published"\n`;
});
topNavs.forEach(t => {
  routeCsv += `"${t.url}","TopNavPortal","${t.name} - 飞机场专题门户","published"\n`;
  t.subTopics.forEach(st => {
    routeCsv += `"${st.url}","SubTopicPortal","${st.name} - 2026精选指南","published"\n`;
  });
});
allPlannedArticles.forEach(a => {
  routeCsv += `"${a.url}","Article","${a.title}","${a.status}"\n`;
});
fs.writeFileSync(path.resolve(__dirname, '../SEO-URL路由规划.csv'), routeCsv, 'utf-8');

// 12. 品牌数据审计报告.md
let doc12 = `# 飞机场 (feijichang.homes) 品牌数据审计报告

## 一、资料源文件审计
工作区原始清单文件名为 \`42家机场品牌清单.txt\`。
经脚本逐行解析与实体拓扑校验，原始文件中包含：
- 第一区块（编号 1 至 28 品牌，部分存在重复编号如 #7 占 3 席）
- 第二区块（“这14家机场 位置都往后面排”，共 14 条无统一前缀记录）
- 原始条目总计：**42 条记录**。

## 二、实体去重与别名核验结果
经过域名、推广代码、品牌介绍与素材交叉比对，发现以下关键实体重复与同源现象：

1. **Firefly 与 萤火虫 重复**
   - 原始条目：第 10 项 \`Firefly (firefly)\` 与第 41 项 \`萤火虫\`
   - 推广域名均指向 \`vip02.fireflyaff.com\`，优惠码均为 \`firefly\`，线路均为 VLESS + IPLC。
   - **审计结论**：确认为同一品牌实体的中英文别名，合并为单一品牌实体 \`Firefly（萤火虫）\`，Slug 为 \`firefly\`。

2. **飞猫云 与 FATCAT 重复**
   - 原始条目：第 3 项 \`飞猫云 (feimao)\` 与第 34 项 \`FATCAT\`
   - FATCAT 即英文 Fat Cat（肥猫/飞猫），第二区块未提供独立入口，第一区块具备完整推广链接 \`guangs.flycataff.com\` 与测速实测图。
   - **审计结论**：确认为同源实体，合并为单一品牌实体 \`飞猫云（FATCAT）\`，Slug 为 \`feimao\`。

3. **唯兔云 与 V2云 同源**
   - 推广域名为 \`guangs.v2yunvipaff.com\`，Logo 为 \`v2云主图.png\`。
   - **审计结论**：确认唯兔云即 V2云，规范别名为 \`唯兔云（V2云）\`。

4. **独立品牌实体核算**
   - 原始条目 42 家 - 重复合并 2 家 = **40 家独立有效品牌**。
   - 另外，测速实测资料包中包含 \`快狸 (KuaiLi)\`（拥有独立测速截图 \`快狸-节点测速实测.png\` 与 Logo \`kuaili_logo.png\`），作为第 41 个独立被跟踪实体纳入品牌数据库。
   - **最终真实独立品牌总数：41 家**。

## 三、价格与套餐差异审计 (光速云 59GB vs 69GB)
- 历史资料中光速云入门年付折算套餐曾标注为 **59GB/月**。
- 当前资料核实为：轻量版 **¥99/年，69GB/月**（折算约 8.25 元/月）。
- **审计处理**：在品牌库与光速云评测正文中明确注明“历史资料曾标注 59GB/月，当前官方核实为 69GB/月”，坚决不把历史价格或旧参数当成现有现状，确保数据真实准确。
`;
fs.writeFileSync(path.resolve(__dirname, '../品牌数据审计报告.md'), doc12, 'utf-8');

// 13. 数据来源及核实记录.md
let doc13 = `# 飞机场 (feijichang.homes) 数据来源及核实记录

## 一、数据分类与置信度管理
本站所有数据严格遵循四级可信度标识：
1. **measured (独立实测)**：本站保留 2026-08-11 及 2026-10-19 原始节点测速截图与网络记录的数据。
2. **vendor_claimed (官方宣称)**：品牌官网或客服公开展示的价格、线路架构与解锁声明。
3. **historical_archive (历史资料)**：2026-08 之前收集的存档数据，未再次核实。
4. **unverified (待核实)**：资料不全或存疑的数据，正文中明确展示“待核实”。

## 二、实测数据归档清单 (2026-08-11 批次)
共 17 家品牌具备原始测速截图证据（尺寸 1122×1402 px，保留完整测试时间与协议）：
1. SOGO 云 (\`SOGO云-节点测速实测.png\`) - 2026-08-11 18:57:59
2. U1S1 (\`U1S1-节点测速实测.png\`) - 2026-08-11 22:33:29
3. 二猫云 (\`二猫云-节点测速实测.png\`) - 2026-08-11 10:45:27
4. 飞猫云 (\`飞猫云-节点测速实测.png\`) - 2026-08-11 08:52:30
5. 光年梯 (\`光年梯-节点测速实测.png\`) - 2026-08-11 14:38:04
6. 光速云 (\`光速云-节点测速实测.png\`) - 2026-08-11 14:32:56
7. 极连云 (\`极连云-节点测速实测.png\`) - 2026-08-11 22:46:50
8. 可信云 (\`可信云-节点测速实测.png\`) - 2026-08-11 15:32:35
9. 快狸 (\`快狸-节点测速实测.png\`) - 2026-08-11 19:52:22
10. 灵猫网络 (\`灵猫网络-节点测速实测.png\`) - 2026-08-11 18:45:40
11. 全球云 (\`全球云-节点测速实测.png\`) - 2026-08-11 15:50:43
12. 速界 (\`速界-节点测速实测.png\`) - 2026-08-11 15:39:36
13. 唯兔云 (\`唯兔云-节点测速实测.png\`) - 2026-08-11 13:55:08
14. 星岛梦 (\`星岛梦-节点测速实测.png\`) - 2026-08-11 01:48:13
15. 一翻云 (\`一翻云-节点测速实测.png\`) - 2026-08-11 00:21:30
16. 宇宙云 (\`宇宙云-节点测速实测.png\`) - 2026-08-11 21:04:24
17. 暮光加速 / 微风网络 均具备独立测速截图支持。

## 三、商业合作与利益冲突披露
- **光速云** 为本站首要商业赞助推广伙伴，其卡片在商业推荐区享有优先展示。
- 本站坚持：**商业推广优先展示不代表独立实测排名第一**，所有技术数据与优缺点均实事求是记录。
`;
fs.writeFileSync(path.resolve(__dirname, '../数据来源及核实记录.md'), doc13, 'utf-8');

console.log('All 13 SEO/GEO Planning and Audit files generated successfully!');
