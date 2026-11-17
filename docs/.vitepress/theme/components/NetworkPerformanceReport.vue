<script setup lang="ts">
import { computed } from 'vue';

interface SpeedNode {
  node: string;
  latency: string;
  download: string;
}

const props = withDefaults(defineProps<{
  brand: string;
  testDate?: string;
  testTime?: string;
  client?: string;
  dataStatus?: string;
  nodes?: SpeedNode[];
  summaryLatency?: string;
  summarySpeed?: string;
  summaryLoss?: string;
}>(), {
  brand: '光速云',
  testDate: '2026-10-19',
  testTime: '晚高峰 20:30 CST',
  client: 'Clash Verge Rev (Mihomo 内核)',
  dataStatus: 'measured',
  nodes: () => [
    { node: '香港 01 IEPL 专线', latency: '22ms', download: '529 Mbps' },
    { node: '台湾 01 BGP 优化', latency: '41ms', download: '114 Mbps' },
    { node: '新加坡 01 专线接入', latency: '46ms', download: '387 Mbps' },
    { node: '日本 东京 01 优化', latency: '57ms', download: '135 Mbps' },
    { node: '美国 洛杉矶 01 直连', latency: '143ms', download: '18 Mbps' }
  ],
  summaryLatency: '61ms',
  summarySpeed: '529 Mbps',
  summaryLoss: '0%'
});

function getSpeedPercent(speedStr: string): number {
  const match = speedStr.match(/(\d+(?:\.\d+)?)/);
  if (!match) return 50;
  const num = parseFloat(match[1]);
  if (speedStr.includes('Gbps')) return 100;
  if (speedStr.includes('MB/s')) return Math.min(100, Math.round((num / 100) * 100));
  return Math.min(100, Math.max(15, Math.round((num / 600) * 100)));
}
</script>

<template>
  <div class="dno-container">
    <div class="dno-header">
      <div class="dno-title">
        <span class="dno-indicator dno-indicator-live"></span>
        <span>🌐 {{ brand }} 节点测速实测报告</span>
      </div>
      <div class="dno-meta">
        <span>{{ testDate }} {{ testTime }}</span>
        <span class="status-badge">{{ dataStatus === 'measured' ? '实测验证' : '官方宣称' }}</span>
      </div>
    </div>

    <div class="test-env">
      <span>测试环境：{{ client }}</span>
      <span>后端测速：Speedtest 5Gbps 独立集群</span>
    </div>

    <div class="nodes-list">
      <div v-for="(n, idx) in nodes" :key="idx" class="node-row">
        <div class="node-meta">
          <span class="node-name">🟢 {{ n.node }}</span>
          <div class="node-stats">
            <span class="stat-latency">延迟: <b class="mono-val">{{ n.latency }}</b></span>
            <span class="stat-speed">下载: <b class="mono-val">{{ n.download }}</b></span>
          </div>
        </div>
        <div class="speed-bar-track">
          <div class="speed-bar-fill" :style="{ width: getSpeedPercent(n.download) + '%' }"></div>
        </div>
      </div>
    </div>

    <div class="dno-footer">
      <div class="summary-stats">
        <span>平均延迟: <b class="mono-val">{{ summaryLatency }}</b></span>
        <span>最高峰值: <b class="mono-val">{{ summarySpeed }}</b></span>
        <span>测试丢包: <b class="mono-val">{{ summaryLoss }}</b></span>
      </div>
      <div class="dno-watermark">[feijichang.homes]</div>
    </div>
  </div>
</template>

<style scoped>
.test-env {
  display: flex;
  justify-content: space-between;
  font-size: 0.78rem;
  color: #94a3b8;
  background: #0f172a;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  font-family: var(--vp-font-family-mono);
}

.status-badge {
  background: rgba(16, 185, 129, 0.2);
  color: #10b981;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.72rem;
  margin-left: 0.5rem;
}

.nodes-list {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.node-row {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.node-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
}

.node-name {
  color: #f1f5f9;
  font-weight: 500;
}

.node-stats {
  display: flex;
  gap: 1.25rem;
  font-size: 0.82rem;
  color: #cbd5e1;
}

.stat-speed {
  color: #38bdf8;
}

.speed-bar-track {
  width: 100%;
  height: 6px;
  background: #1e293b;
  border-radius: 3px;
  overflow: hidden;
}

.speed-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #2563eb, #38bdf8);
  border-radius: 3px;
  box-shadow: 0 0 8px rgba(56, 189, 248, 0.4);
}

.dno-footer {
  margin-top: 1.25rem;
  padding-top: 0.75rem;
  border-top: 1px solid #1e293b;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.summary-stats {
  display: flex;
  gap: 1.5rem;
  font-size: 0.82rem;
  color: #94a3b8;
}

.summary-stats b {
  color: #f8fafc;
}

@media (max-width: 640px) {
  .test-env {
    flex-direction: column;
    gap: 0.25rem;
  }
  .summary-stats {
    flex-wrap: wrap;
    gap: 0.75rem;
  }
}
</style>
