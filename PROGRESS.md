# 飞机场 (feijichang.homes) 项目建设进度报告 (PROGRESS.md)

**记录时间**：2026-11-16  
**项目域名**：feijichang.homes  
**部署目标**：https://clash-cloud.run 或 https://feijichang.homes  
**框架架构**：VitePress 1.6.4 + Vue 3 + TypeScript + CSS Variables + Pagefind 1.6.0 全文搜索 + VitePress 原生 Sitemap + Apache 静态部署  

---

## 一、项目已完成成果统计

| 模块类别 | 规划指标 | 实际落地成果 | 验收状态 |
|---------|---------|-------------|---------|
| **一级主导航门户** | 4 个独立专题门户 | 4 个独立门户 (\`/airport/\`, \`/vpn/\`, \`/clash/\`, \`/resources/\`) | ✅ 100% 达成 |
| **二级细分专题页面** | 28 个独立页面 | 28 个独立专题页面 (每导航 7 个细分栏目) | ✅ 100% 达成 |
| **三级文章集群** | 至少 56 个集群 | 56 个独立文章集群 (每专题 2 个集群) | ✅ 100% 达成 |
| **SEO 规划文章标题库** | 336–840 篇 | **392 篇精确规划文章** (分配唯一 URL、关键词、大纲与意图) | ✅ 100% 达成 |
| **实际发布上线文章** | 每个集群至少 1 篇代表作 | **56 篇核心代表文章** (100% 完整正文，充当集群入口与 SEO 锚点) | ✅ 100% 达成 |
| **独立品牌审计与收录** | 严格去重与实体核查 | **41 个独立有效品牌** (合并 Firefly/萤火虫、飞猫云/FATCAT 重复实体，校准光速云 59GB vs 69GB 历史差异) | ✅ 100% 达成 |
| **品牌深度评测页面** | 40+ 品牌独立详情页 | **41 篇独立深度评测页面** (\`/brands/[slug].html\`)，光速云第一主推万字级矩阵 | ✅ 100% 达成 |
| **品牌数据库与筛选** | 支持多维检索与 SSR | **1 个交互式品牌库** (\`/brands/\`)，支持线路、价格、协议、AI 实时筛选 | ✅ 100% 达成 |
| **Dark Network Observatory** | 4 套专业可视化组件 | 4 套组件 (\`NetworkPerformanceReport\`, \`StreamingAvailabilityMatrix\`, \`NetworkTopology\`, \`BrandInfrastructureSnapshot\`) | ✅ 100% 达成 |
| **静态生成 HTML 页面** | 全量纯静态构建 | **132 个纯静态 HTML 文件** (\`docs/.vitepress/dist/\`) | ✅ 100% 达成 |
| **Pagefind 全文检索** | 生产环境构建索引 | **已索引 131 个页面，5022 个中文词汇** | ✅ 100% 达成 |
| **Sitemap.xml** | 包含全部真实有效页面 | **已收录 132 个规范 URL** (\`docs/.vitepress/dist/sitemap.xml\`) | ✅ 100% 达成 |
| **SEO/GEO 规划交付文件** | 13 份标准规划文件 | **13 份 Markdown/CSV 交付文件全部生成完毕** | ✅ 100% 达成 |
| **Apache 生产部署支持** | \`.htaccess\` 配置文件 | **支持 HTTPS 强制跳转、干净 URL、安全响应头与 404 处理** | ✅ 100% 达成 |

---

## 二、十三份 SEO/GEO 规划文件交付清单

1. `SEO-一级导航规划.md`：四大主导航定位、SEO Title、Meta Description、H1 与商业导流目标。
2. `SEO-二级专题规划.md`：28 个二级栏目完整规划与元信息设定。
3. `SEO-三级文章集群规划.md`：56 个三级文章集群详细画像与用户痛点映射。
4. `SEO-完整文章标题库.md`：392 篇精准独立文章规划表（包含发布与待更新状态）。
5. `SEO-关键词映射表.csv`：392 篇文章与主要关键词、次级关键词、搜索意图映射表。
6. `GEO-实体关系映射表.csv`：飞机场媒体实体、品牌实体、技术架构与 AI 解锁知识图谱。
7. `GEO-长尾问题库.csv`：高频搜索与 AI 问答长尾问题库。
8. `SEO-内部链接矩阵.csv`：全站导航链、面包屑链、品牌链与转化 CTA 拓扑矩阵。
9. `SEO-内容发布优先级.md`：P0（首期 132 页 100% 落地）、P1（商业转化与长尾痛点扩展）、P2（边缘场景）。
10. `SEO-品牌评测规划.md`：41 个独立品牌评测体系与实测证据分配。
11. `SEO-URL路由规划.csv`：全站 470+ 规划与实际 URL 路由映射表。
12. `品牌数据审计报告.md`：原始 42 条记录审计，去重合并细节，光速云 59GB vs 69GB 历史勘误。
13. `数据来源及核实记录.md`：四级置信度管理（measured/vendor_claimed/historical_archive/unverified）与 17 家实测截图归档记录。

---

## 三、41 家独立品牌审计结果明细

- **商业合作第一主推**：光速云 (guangsu) - IEPL专线 + 内网双线路，VLESS协议，实测 529Mbps
- **核心推荐梯队**：暮光加速 (muguang)、飞猫云 (feimao / 原 FATCAT 同源实体)、微风网络 (weifeng)、大佬云 (dalaoyun)、星岛梦 (xingdaomeng)、二猫云 (ermao)、无忧链接 (wuyou)、唯兔云 (weitu / V2云同源实体)、Firefly (firefly / 原萤火虫同源实体)、宇宙云 (yuzhou)、U1S1 (u1s1)、灵猫网络 (lingmao)、极连云 (jilian)、光年梯 (guangnian)、一翻云 (yifan)、SOGO云 (sogo)、可信云 (kexin)、速界 (sujie)、闪跃 (shanyue)、全球云 (quanqiu)、闪电鼠 (shandianshu)、云界线 (yunjiexian)、榴莲云 (liulianyun)、神行加速 (shenxing)、环球梯 (huanqiuti)、隐形人 (yinxingren)、梯子云 (tiziyun)
- **历史归档与知名品牌**：WgetCloud、白月光、FlyingBird、CyberGuard、龙猫云 (totoro)、TNTCloud、青云梯、山水云、灵动云、浪网 (wavenet)、EdgeNova、sslar
- **实测新实体加入**：快狸 (kuaili) - 具备 2026-08-11 独立测速截图与珠海联通 9Gbps 实测记录

---

## 四、本地构建与测试验证结果

```bash
# 执行完整静态构建与 Pagefind 索引
npm run docs:build

# 结果：
✓ building client + server bundles in 2.1s
✓ rendering pages (132 pages) in 4.2s
✓ generating sitemap (132 urls)
✓ pagefind indexing (131 pages indexed, 5022 words, zh-cn)
✓ build complete in 9.25s
```

- **页面 404 处理**：已生成 `docs/.vitepress/dist/404.html`。
- **静态资源缓存**：已在 `.htaccess` 中配置 CSS/JS/图片 1 年长效缓存，HTML 强一致性校验。
- **深层 URL 刷新**：Apache rewrite 规则支持 `/airport/recommend/` 及 `/brands/guangsu.html` 等深层路径直接访问与刷新。

---

## 五、Apache 生产部署与后续维护指南

### 1. 部署目录
将 `docs/.vitepress/dist/` 下的所有文件和文件夹上传至 Apache 虚拟主机的 Web 根目录（如 `/var/www/html/` 或宝塔面板对应站点根目录）。

### 2. 网站更新与文章扩充
- **新增品牌**：在 `docs/data/brands.json` 中追加品牌数据，运行 `node scripts/build_everything.js` 即可自动生成对应独立评测页面并纳入筛选。
- **发布计划中文章**：在 `docs/[topNav]/[subTopic]/` 下根据 `SEO-完整文章标题库.md` 中的 slug 创建文章，运行 `npm run docs:build` 即可自动编译入库并更新 Pagefind 搜索索引。
