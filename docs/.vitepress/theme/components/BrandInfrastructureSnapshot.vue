<script setup lang="ts">
const props = withDefaults(defineProps<{
  name: string;
  enName?: string;
  operationalSince?: string;
  lines?: string;
  protocols?: string[];
  clients?: string[];
  regions?: string[];
  coupon?: string;
  minPriceLabel?: string;
  affUrl?: string;
  dataStatus?: string;
  verifiedDate?: string;
}>(), {
  name: '光速云',
  enName: 'LightSpeed',
  operationalSince: '2020 年',
  lines: 'IEPL 专线 + 企业级内网专线',
  protocols: () => ['VLESS', 'Shadowsocks'],
  clients: () => ['自研客户端', 'Clash Verge Rev', 'Shadowrocket', 'v2rayN'],
  regions: () => ['香港×20', '台湾×5', '日本×10', '新加坡×10', '美国×10', '欧洲等多国'],
  coupon: 'AMM',
  minPriceLabel: '折算约 ¥8.25/月 (年付 ¥99 / 69GB 每月)',
  affUrl: 'https://sahude.gsyvipaff.com/#/?code=keqgvT5Y',
  dataStatus: 'measured',
  verifiedDate: '2026-10-19'
});
</script>

<template>
  <div class="dno-container">
    <div class="dno-header">
      <div class="dno-title">
        <span class="dno-indicator dno-indicator-live"></span>
        <span>⚡ {{ name }} ({{ enName || name }}) 基础设施与服务全景概览 (Infrastructure Snapshot)</span>
      </div>
      <div class="dno-meta">
        <span>核验日期: {{ verifiedDate }}</span>
      </div>
    </div>

    <div class="infra-grid">
      <div class="infra-item">
        <span class="infra-label">📅 运营年限</span>
        <span class="infra-value">{{ operationalSince }}</span>
      </div>

      <div class="infra-item">
        <span class="infra-label">🛣️ 线路架构</span>
        <span class="infra-value highlight-cyan">{{ lines }}</span>
      </div>

      <div class="infra-item">
        <span class="infra-label">🔒 传输协议</span>
        <span class="infra-value">{{ protocols.join(', ') }}</span>
      </div>

      <div class="infra-item">
        <span class="infra-label">📱 客户端支持</span>
        <span class="infra-value">{{ clients.join('、') }}</span>
      </div>

      <div class="infra-item">
        <span class="infra-label">🌍 节点覆盖</span>
        <span class="infra-value">{{ regions.join('、') }}</span>
      </div>

      <div class="infra-item">
        <span class="infra-label">💰 入门价格方案</span>
        <span class="infra-value highlight-amber">{{ minPriceLabel }}</span>
      </div>

      <div class="infra-item">
        <span class="infra-label">🎟️ 专属优惠码</span>
        <div v-if="coupon" class="coupon-wrapper">
          <span class="coupon-box mono-val">{{ coupon }}</span>
          <span class="coupon-hint">结账立享专属折扣</span>
        </div>
        <span v-else class="no-coupon">官方直付暂无折扣码</span>
      </div>

      <div class="infra-item">
        <span class="infra-label">🔍 数据置信度</span>
        <span class="infra-value">{{ dataStatus === 'measured' ? '实测截图验证' : '品牌官方公布' }}</span>
      </div>
    </div>

    <div class="infra-action-bar">
      <div class="action-left">
        <span class="disclosure-badge">⚠️ 商业合作透明声明：本站含推广合作关系，评测数据保持客观独立。</span>
      </div>
      <div class="action-right">
        <a 
          v-if="affUrl"
          :href="affUrl" 
          target="_blank" 
          rel="nofollow sponsored noopener"
          class="cta-button"
        >
          <span>直达 {{ name }} 官方注册页面</span>
          <span>➔</span>
        </a>
      </div>
    </div>

    <div class="dno-watermark">[feijichang.homes]</div>
  </div>
</template>

<style scoped>
.infra-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.85rem;
  margin-bottom: 1.25rem;
}

.infra-item {
  background: #0f172a;
  border: 1px solid #1e293b;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.infra-label {
  font-size: 0.75rem;
  color: #94a3b8;
}

.infra-value {
  font-size: 0.88rem;
  color: #f1f5f9;
  font-weight: 500;
}

.highlight-cyan {
  color: #38bdf8;
  font-weight: 600;
}

.highlight-amber {
  color: #fbbf24;
  font-weight: 600;
}

.coupon-wrapper {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.coupon-box {
  background: rgba(244, 63, 94, 0.15);
  color: #fb7185;
  border: 1px solid rgba(244, 63, 94, 0.4);
  padding: 2px 8px;
  border-radius: 4px;
  font-weight: 700;
  letter-spacing: 0.5px;
  display: inline-block;
  box-shadow: 0 0 10px rgba(244, 63, 94, 0.2);
}

.coupon-hint {
  font-size: 0.72rem;
  color: #10b981;
}

.no-coupon {
  color: #64748b;
  font-size: 0.82rem;
}

.infra-action-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #1e293b;
  padding-top: 1rem;
  gap: 1rem;
}

.disclosure-badge {
  font-size: 0.75rem;
  color: #64748b;
}

@media (max-width: 640px) {
  .infra-grid {
    grid-template-columns: 1fr;
  }
  .infra-action-bar {
    flex-direction: column;
    align-items: stretch;
  }
  .cta-button {
    width: 100%;
  }
}
</style>
