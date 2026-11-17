import { defineConfig, type HeadConfig } from 'vitepress';

const crumbNames: Record<string, string> = {
  'airport': '机场推荐',
  'vpn': 'VPN与加速器',
  'clash': 'Clash客户端',
  'resources': '资源与情报',
  'brands': '品牌数据库',
  'cheap': '便宜机场',
  'cost-effective': '性价比机场',
  'free': '免费梯子',
  'guide': '科学上网指南',
  'rankings': '机场排行',
  'recommend': '机场推荐精选',
  'stable': '稳定机场',
  'clash-meta': 'Clash Meta 内核',
  'clash-verge': 'Clash Verge 客户端',
  'download': '客户端下载',
  'subscription': '订阅管理',
  'troubleshooting': '故障排查',
  'tutorial': '使用教程',
  'beginner': '新手帮助',
  'faq': '机场 FAQ',
  'free-nodes': '免费节点',
  'node-check': '节点检测',
  'risks': '机场风险情报',
  'subscription-issues': '订阅问题',
  'warning': '跑路预警',
  'accelerator': '网络加速器',
  'best': '好用的 VPN',
  'compare': '加速器对比',
  'mobile': '手机 VPN',
  'reviews': 'VPN 评测',
  'about': '关于我们',
  'editorial-policy': '评测准则',
  'contact': '联系我们'
};

export default defineConfig({
  title: '飞机场',
  titleTemplate: ':title | 飞机场 (feijichang.homes)',
  description: '中文机场推荐、机场排行、VPN软件评测、Clash客户端教程与品牌数据库媒体平台。提供真实测速报告、流媒体/AI解锁实测、专线机场选购与新手防坑指南。',
  lang: 'zh-CN',
  cleanUrls: true,
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', href: '/images/avatar.jpg' }],
    ['meta', { name: 'keywords', content: '机场推荐, 机场排行, 性价比机场, 稳定机场, 便宜机场, 免费梯子, 科学上网, VPN推荐, Clash推荐, Clash Verge, 节点测速, 跑路预警' }],
    ['meta', { name: 'author', content: '飞机场编辑部' }],
    ['meta', { property: 'og:site_name', content: '飞机场 (feijichang.homes)' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' }]
  ],

  transformHead({ pageData }) {
    const head: HeadConfig[] = [];
    const relPath = pageData.relativePath;

    if (relPath === '404.md') {
      head.push(['meta', { name: 'robots', content: 'noindex, nofollow' }]);
      return head;
    }

    const clean = relPath.replace(/\.md$/, '');
    const isDir = clean.endsWith('/index');
    let canonicalUrl = '';

    if (clean === 'index') {
      canonicalUrl = 'https://feijichang.homes/';
    } else if (isDir) {
      canonicalUrl = `https://feijichang.homes/${clean.replace(/\/index$/, '/')}`;
    } else {
      canonicalUrl = `https://feijichang.homes/${clean}`;
    }

    head.push(['link', { rel: 'canonical', href: canonicalUrl }]);

    // Inject JSON-LD Schema
    if (clean === 'index') {
      const websiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        'name': '飞机场 (feijichang.homes)',
        'url': 'https://feijichang.homes/',
        'description': pageData.description || '中文机场推荐、机场排行、VPN软件评测与客户端教程'
      };
      head.push([
        'script',
        { type: 'application/ld+json' },
        JSON.stringify(websiteSchema)
      ]);
    } else {
      const parts = clean.split('/').filter(p => p !== 'index');
      const list: Array<{ '@type': string; position: number; name: string; item: string }> = [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': '首页',
          'item': 'https://feijichang.homes/'
        }
      ];

      let acc = '';
      parts.forEach((p, idx) => {
        acc += '/' + p;
        const isLast = idx === parts.length - 1;
        const itemUrl = isLast ? canonicalUrl : `https://feijichang.homes${acc}/`;
        const name = isLast ? (pageData.title || crumbNames[p] || p) : (crumbNames[p] || p);
        list.push({
          '@type': 'ListItem',
          'position': idx + 2,
          'name': name,
          'item': itemUrl
        });
      });

      const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': list
      };

      head.push([
        'script',
        { type: 'application/ld+json' },
        JSON.stringify(breadcrumbSchema)
      ]);
    }

    return head;
  },

  sitemap: {
    hostname: 'https://feijichang.homes',
    transformItems(items) {
      return items.filter(item => !item.url.includes('draft') && item.url !== '404' && !item.url.endsWith('/404'));
    }
  },

  themeConfig: {
    siteTitle: '飞机场',
    logo: { src: '/images/avatar.jpg', alt: '飞机场' },
    
    // Top 4 Main Navigations + Brand DB
    nav: [
      {
        text: '✈️ 机场推荐',
        link: '/airport/',
        items: [
          { text: '机场推荐精选', link: '/airport/recommend/' },
          { text: '机场排行榜', link: '/airport/rankings/' },
          { text: '高性价比机场', link: '/airport/cost-effective/' },
          { text: '稳定专线机场', link: '/airport/stable/' },
          { text: '平价便宜机场', link: '/airport/cheap/' },
          { text: '免费梯子实测', link: '/airport/free/' },
          { text: '科学上网指南', link: '/airport/guide/' }
        ]
      },
      {
        text: '🛡️ VPN 与加速器',
        link: '/vpn/',
        items: [
          { text: 'VPN 推荐榜单', link: '/vpn/recommend/' },
          { text: '免费 VPN 评测', link: '/vpn/free/' },
          { text: '手机端好用 VPN', link: '/vpn/mobile/' },
          { text: 'VPN 软件实测', link: '/vpn/reviews/' },
          { text: '网络加速器', link: '/vpn/accelerator/' },
          { text: '加速器综合对比', link: '/vpn/compare/' },
          { text: '好用的 VPN 精选', link: '/vpn/best/' }
        ]
      },
      {
        text: '⚡ Clash 客户端',
        link: '/clash/',
        items: [
          { text: 'Clash 客户端推荐', link: '/clash/recommend/' },
          { text: 'Clash Verge 介绍', link: '/clash/clash-verge/' },
          { text: 'Clash Verge 官方下载', link: '/clash/download/' },
          { text: 'Clash Verge 订阅导入', link: '/clash/subscription/' },
          { text: 'Clash Meta 内核详解', link: '/clash/clash-meta/' },
          { text: 'Clash 完整使用教程', link: '/clash/tutorial/' },
          { text: 'Clash 节点超时故障排查', link: '/clash/troubleshooting/' }
        ]
      },
      {
        text: '📡 资源与情报',
        link: '/resources/',
        items: [
          { text: '每日免费节点', link: '/resources/free-nodes/' },
          { text: '跑路失联预警', link: '/resources/warning/' },
          { text: '机场选购与使用 FAQ', link: '/resources/faq/' },
          { text: '机场风险情报', link: '/resources/risks/' },
          { text: '节点测速与真伪检测', link: '/resources/node-check/' },
          { text: '订阅常见问题排障', link: '/resources/subscription-issues/' },
          { text: '新手小白入门手册', link: '/resources/beginner/' }
        ]
      },
      {
        text: '🏛️ 品牌数据库',
        link: '/brands/'
      }
    ],

    sidebar: {
      '/airport/': [
        {
          text: '✈️ 机场推荐专题',
          items: [
            { text: '专题总览', link: '/airport/' },
            { text: '1. 机场推荐', link: '/airport/recommend/' },
            { text: '2. 机场排行', link: '/airport/rankings/' },
            { text: '3. 性价比机场', link: '/airport/cost-effective/' },
            { text: '4. 稳定机场', link: '/airport/stable/' },
            { text: '5. 便宜机场', link: '/airport/cheap/' },
            { text: '6. 免费梯子', link: '/airport/free/' },
            { text: '7. 科学上网', link: '/airport/guide/' }
          ]
        }
      ],
      '/vpn/': [
        {
          text: '🛡️ VPN 与加速器专题',
          items: [
            { text: '专题总览', link: '/vpn/' },
            { text: '1. VPN 推荐', link: '/vpn/recommend/' },
            { text: '2. 免费 VPN', link: '/vpn/free/' },
            { text: '3. 手机 VPN', link: '/vpn/mobile/' },
            { text: '4. VPN 软件评测', link: '/vpn/reviews/' },
            { text: '5. VPN 加速器', link: '/vpn/accelerator/' },
            { text: '6. 加速器对比', link: '/vpn/compare/' },
            { text: '7. 好用的 VPN', link: '/vpn/best/' }
          ]
        }
      ],
      '/clash/': [
        {
          text: '⚡ Clash 客户端知识库',
          items: [
            { text: '知识库总览', link: '/clash/' },
            { text: '1. Clash 推荐', link: '/clash/recommend/' },
            { text: '2. Clash Verge', link: '/clash/clash-verge/' },
            { text: '3. Clash Verge 下载', link: '/clash/download/' },
            { text: '4. Clash Verge 订阅', link: '/clash/subscription/' },
            { text: '5. Clash Meta 内核', link: '/clash/clash-meta/' },
            { text: '6. Clash 使用教程', link: '/clash/tutorial/' },
            { text: '7. Clash 故障排查', link: '/clash/troubleshooting/' }
          ]
        }
      ],
      '/resources/': [
        {
          text: '📡 资源与情报中心',
          items: [
            { text: '中心总览', link: '/resources/' },
            { text: '1. 免费节点', link: '/resources/free-nodes/' },
            { text: '2. 跑路预警', link: '/resources/warning/' },
            { text: '3. 机场 FAQ', link: '/resources/faq/' },
            { text: '4. 机场风险情报', link: '/resources/risks/' },
            { text: '5. 节点检测', link: '/resources/node-check/' },
            { text: '6. 订阅问题', link: '/resources/subscription-issues/' },
            { text: '7. 新手帮助', link: '/resources/beginner/' }
          ]
        }
      ],
      '/brands/': [
        {
          text: '🏛️ 机场品牌数据库',
          items: [
            { text: '数据库首页与综合筛选', link: '/brands/' },
            { text: '光速云 (主推深度评测)', link: '/brands/guangsu.html' },
            { text: '暮光加速', link: '/brands/muguang.html' },
            { text: '飞猫云 (FATCAT)', link: '/brands/feimao.html' },
            { text: '微风网络', link: '/brands/weifeng.html' },
            { text: '星岛梦', link: '/brands/xingdaomeng.html' },
            { text: '唯兔云 (V2云)', link: '/brands/weitu.html' },
            { text: '二猫云', link: '/brands/ermao.html' },
            { text: 'Firefly (萤火虫)', link: '/brands/firefly.html' },
            { text: '宇宙云', link: '/brands/yuzhou.html' },
            { text: 'U1S1 (有一说一)', link: '/brands/u1s1.html' },
            { text: '极连云', link: '/brands/jilian.html' },
            { text: '光年梯', link: '/brands/guangnian.html' }
          ]
        }
      ]
    },

    outline: {
      level: [2, 3],
      label: '本页目录'
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    footer: {
      message: '免责声明：本站提供之内容仅供网络技术交流与跨境办公学习参考，请遵守当地法律法规。商业合作链接均已透明披露。 | <a href="/about">关于我们</a> | <a href="/editorial-policy">评测准则</a> | <a href="/contact">联系我们</a>',
      copyright: 'Copyright © 2026 飞机场 (feijichang.homes). All Rights Reserved.'
    }
  }
});
