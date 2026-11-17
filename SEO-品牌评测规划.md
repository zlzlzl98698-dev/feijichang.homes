# 飞机场 (feijichang.homes) 品牌评测系统规划

## 一、评测矩阵原则
1. **统一数据中心**：所有卡片、评测页、套餐表调用统一品牌源 `docs/data/brands.ts`。
2. **严禁虚构测速**：有截图的展示 measured 历史数据与截图，无截图的使用 vendor_claimed 明确标注。
3. **商业赞助透明披露**：主推品牌标注商业合作，评测保持客观中立，清晰指出套餐适用场景与缺点。
4. **单品牌深度矩阵**：重点品牌单篇评测覆盖 18 大章节（背景、技术、测速、AI流媒体解锁、套餐横评、同类对比、FAQ、转化）。

| 品牌名称 | Slug | 独有卖点 | 数据状态 | 测速证据 | 解锁实测 | 优先级 |
|---------|------|---------|---------|---------|---------|-------|
| 光速云 | `guangsu` | IEPL 专线 + 企业级内网专线 | `measured` | 有实测截图 | 视节点而定 | **P0(商业第一主推)** |
| 暮光加速 | `muguang` | BGP 智能中转 | `measured` | 有实测截图 | 支持 | P1 |
| 飞猫云 | `feimao` | BGP中转/优质落地 | `measured` | 有实测截图 | 支持 | P1 |
| 微风网络 | `weifeng` | IEPL 专线 | `measured` | 有实测截图 | 支持 | P1 |
| 大佬云 | `dalaoyun` | IEPL 专线 | `vendor_claimed` | 无独立截图 | 待测试 | P1 |
| 星岛梦 | `xingdaomeng` | IEPL 专线 | `measured` | 有实测截图 | 支持 | P1 |
| 二猫云 | `ermao` | IEPL 专线 | `measured` | 有实测截图 | 支持 | P1 |
| 无忧链接 | `wuyou` | 直连与优化中转 | `measured` | 无独立截图 | 支持 | P1 |
| 唯兔云 | `weitu` | IPLC 专线 | `measured` | 有实测截图 | 支持 | P1 |
| Firefly | `firefly` | IPLC 专线 | `measured` | 无独立截图 | 支持 | P1 |
| 宇宙云 | `yuzhou` | BGP中转/优质落地 | `measured` | 有实测截图 | 待测试 | P1 |
| U1S1 | `u1s1` | IPLC 专线 | `measured` | 有实测截图 | 支持 | P1 |
| 灵猫网络 | `lingmao` | BGP中转/优质落地 | `measured` | 有实测截图 | 支持 | P1 |
| 极连云 | `jilian` | IEPL 专线 | `measured` | 有实测截图 | 待测试 | P1 |
| 光年梯 | `guangnian` | IEPL 专线 | `measured` | 有实测截图 | 待测试 | P1 |
| 一翻云 | `yifan` | IEPL 专线 | `measured` | 有实测截图 | 支持 | P1 |
| SOGO 云 | `sogo` | IEPL 专线 | `measured` | 有实测截图 | 支持 | P1 |
| 可信云 | `kexin` | IEPL 专线 | `measured` | 有实测截图 | 待测试 | P1 |
| 速界 | `sujie` | IEPL 专线 | `measured` | 有实测截图 | 待测试 | P1 |
| 闪跃 | `shanyue` | IPLC 专线 | `measured` | 无独立截图 | 支持 | P1 |
| 全球云 | `quanqiu` | IEPL / IPLC 专线 | `measured` | 有实测截图 | 支持 | P1 |
| 闪电鼠 | `shandianshu` | IEPL 专线 | `vendor_claimed` | 无独立截图 | 待测试 | P1 |
| 云界线 | `yunjiexian` | IEPL 专线 | `vendor_claimed` | 无独立截图 | 待测试 | P1 |
| 榴莲云 | `liulianyun` | IEPL 专线 | `vendor_claimed` | 无独立截图 | 待测试 | P1 |
| 神行加速 | `shenxing` | IEPL 专线 | `vendor_claimed` | 无独立截图 | 待测试 | P1 |
| 环球梯 | `huanqiuti` | IEPL 专线 | `vendor_claimed` | 无独立截图 | 待测试 | P1 |
| 隐形人 | `yinxingren` | IPLC 专线 | `vendor_claimed` | 无独立截图 | 支持 | P1 |
| 梯子云 | `tiziyun` | IEPL 专线 | `vendor_claimed` | 无独立截图 | 待测试 | P1 |
| WgetCloud | `wgetcloud` | BGP中转/优质落地 | `measured` | 无独立截图 | 待测试 | P1 |
| 白月光 | `baiyueguang` | BGP中转/优质落地 | `measured` | 无独立截图 | 待测试 | P1 |
| FlyingBird | `flyingbird` | IPLC 专线 | `historical_archive` | 无独立截图 | 待测试 | P1 |
| CyberGuard | `cyberguard` | BGP中转/优质落地 | `measured` | 无独立截图 | 待测试 | P1 |
| 龙猫云 | `totoro` | IPLC 专线 | `historical_archive` | 无独立截图 | 待测试 | P1 |
| TNTCloud | `tntcloud` | IPLC 专线 | `historical_archive` | 无独立截图 | 待测试 | P1 |
| 青云梯 | `qingyunti` | IPLC 专线 | `historical_archive` | 无独立截图 | 待测试 | P1 |
| 山水云 | `shanshuiyun` | BGP中转/优质落地 | `measured` | 无独立截图 | 待测试 | P1 |
| 灵动云 | `lingdongyun` | IEPL 专线 | `vendor_claimed` | 无独立截图 | 待测试 | P1 |
| 浪网 | `wavenet` | IEPL 专线 | `vendor_claimed` | 无独立截图 | 待测试 | P1 |
| EdgeNova | `edgenova` | IPLC 专线 | `vendor_claimed` | 无独立截图 | 待测试 | P1 |
| sslar | `sslar` | IEPL 专线 | `historical_archive` | 无独立截图 | 待测试 | P1 |
| 快狸 | `kuaili` | IEPL专线 + VLESS | `measured` | 有实测截图 | 支持 | P1 |
