<script setup lang="ts">
const props = withDefaults(defineProps<{
  brand: string;
  lineType?: string;
  ingressRegion?: string;
  egressRegion?: string;
  protocol?: string;
  isRealPhysical?: boolean;
}>(), {
  brand: '光速云',
  lineType: 'IEPL 内网专线直连',
  ingressRegion: '上海 / 广州 BGP 入口 (多线智能调度)',
  egressRegion: '香港 / 东京 / 新加坡 / 洛杉矶 原生落地',
  protocol: 'VLESS / Shadowsocks',
  isRealPhysical: true
});
</script>

<template>
  <div class="dno-container">
    <div class="dno-header">
      <div class="dno-title">
        <span class="dno-indicator dno-indicator-live"></span>
        <span>🗺️ {{ brand }} 网络传输拓扑与链路观测图 (Network Path Observatory)</span>
      </div>
      <div class="dno-meta">
        <span>架构属性: {{ lineType }}</span>
      </div>
    </div>

    <div class="topo-diagram">
      <!-- Step 1 -->
      <div class="topo-node">
        <div class="topo-icon">💻</div>
        <div class="topo-node-title">用户终端设备</div>
        <div class="topo-node-desc">Windows / Mac / iOS / Android</div>
        <div class="topo-pill">{{ protocol }} 加密</div>
      </div>

      <div class="topo-connector">
        <div class="topo-line"></div>
        <div class="topo-arrow">▶</div>
        <div class="topo-label">加密隧道</div>
      </div>

      <!-- Step 2 -->
      <div class="topo-node">
        <div class="topo-icon">🏢</div>
        <div class="topo-node-title">国内接入入口</div>
        <div class="topo-node-desc">{{ ingressRegion }}</div>
        <div class="topo-pill">隐藏真实源IP</div>
      </div>

      <div class="topo-connector topo-connector-dedicated">
        <div class="topo-line-dedicated"></div>
        <div class="topo-arrow-dedicated">▶</div>
        <div class="topo-label-dedicated">IEPL / IPLC 专线跨境直连 (不经公网 GFW)</div>
      </div>

      <!-- Step 3 -->
      <div class="topo-node">
        <div class="topo-icon">🌐</div>
        <div class="topo-node-title">海外落地节点</div>
        <div class="topo-node-desc">{{ egressRegion }}</div>
        <div class="topo-pill">原生住宅/机房 IP</div>
      </div>

      <div class="topo-connector">
        <div class="topo-line"></div>
        <div class="topo-arrow">▶</div>
        <div class="topo-label">高速分流</div>
      </div>

      <!-- Step 4 -->
      <div class="topo-node">
        <div class="topo-icon">🚀</div>
        <div class="topo-node-title">目标服务</div>
        <div class="topo-node-desc">ChatGPT / Netflix / YouTube</div>
        <div class="topo-pill">4K 流畅与原生解锁</div>
      </div>
    </div>

    <div class="dno-footer">
      <span class="topo-notes">
        链路说明：国内入口到境外落地采用 {{ lineType }}，有效规避公网拥堵与 QoS 识别。{{ isRealPhysical ? '（基于品牌官方公布的网络工程架构整理）' : '（本图仅作技术概念示意）' }}
      </span>
      <span class="dno-watermark">[feijichang.homes]</span>
    </div>
  </div>
</template>

<style scoped>
.topo-diagram {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0.5rem;
  overflow-x: auto;
  gap: 0.5rem;
}

.topo-node {
  background: #0f172a;
  border: 1px solid #1e293b;
  border-radius: 8px;
  padding: 0.85rem 0.75rem;
  min-width: 130px;
  max-width: 150px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
  flex-shrink: 0;
}

.topo-icon {
  font-size: 1.5rem;
}

.topo-node-title {
  font-size: 0.85rem;
  font-weight: 600;
  color: #f1f5f9;
}

.topo-node-desc {
  font-size: 0.72rem;
  color: #94a3b8;
  line-height: 1.25;
}

.topo-pill {
  font-size: 0.68rem;
  background: #1e293b;
  color: #38bdf8;
  padding: 2px 6px;
  border-radius: 4px;
  margin-top: 0.25rem;
}

.topo-connector {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  flex: 1;
  min-width: 60px;
}

.topo-line {
  width: 100%;
  height: 2px;
  background: #334155;
}

.topo-arrow {
  color: #64748b;
  font-size: 0.75rem;
  margin-top: -8px;
}

.topo-label {
  font-size: 0.68rem;
  color: #64748b;
  margin-top: 0.25rem;
  white-space: nowrap;
}

.topo-connector-dedicated {
  min-width: 140px;
}

.topo-line-dedicated {
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #2563eb, #38bdf8);
  box-shadow: 0 0 10px rgba(56, 189, 248, 0.5);
  border-radius: 2px;
}

.topo-arrow-dedicated {
  color: #38bdf8;
  font-size: 0.85rem;
  margin-top: -10px;
}

.topo-label-dedicated {
  font-size: 0.68rem;
  color: #38bdf8;
  margin-top: 0.35rem;
  font-weight: 600;
  white-space: nowrap;
}

.topo-notes {
  font-size: 0.75rem;
  color: #64748b;
}

.dno-footer {
  margin-top: 1rem;
  padding-top: 0.75rem;
  border-top: 1px solid #1e293b;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media (max-width: 768px) {
  .topo-diagram {
    flex-direction: column;
    align-items: stretch;
  }
  .topo-node {
    max-width: 100%;
  }
  .topo-connector, .topo-connector-dedicated {
    min-width: auto;
    margin: 0.5rem 0;
  }
  .topo-line, .topo-line-dedicated {
    width: 2px;
    height: 25px;
  }
  .topo-arrow, .topo-arrow-dedicated {
    margin-top: 0;
    transform: rotate(90deg);
  }
}
</style>
