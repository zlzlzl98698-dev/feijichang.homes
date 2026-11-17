<script setup lang="ts">
interface UnlockStatus {
  chatgpt?: string;
  claude?: string;
  gemini?: string;
  netflix?: string;
  disney?: string;
  youtube?: string;
  hbo?: string;
  tiktok?: string;
  spotify?: string;
}

const props = withDefaults(defineProps<{
  brand: string;
  nodeName?: string;
  matrix?: UnlockStatus;
  testDate?: string;
}>(), {
  brand: '光速云',
  nodeName: '香港 01 IEPL 专线',
  testDate: '2026-10-19 CST',
  matrix: () => ({
    chatgpt: 'partial',
    claude: 'supported',
    gemini: 'partial',
    netflix: 'supported',
    disney: 'supported',
    youtube: 'supported',
    hbo: 'supported',
    tiktok: 'supported',
    spotify: 'supported'
  })
});

function getBadge(status?: string) {
  if (status === 'supported') {
    return { icon: '🟢', text: '实测支持', desc: '原生IP/无需降级', class: 'status-ok' };
  } else if (status === 'partial') {
    return { icon: '🟡', text: '视节点而定', desc: '部分需手动切点', class: 'status-warn' };
  } else if (status === 'vendor_claimed') {
    return { icon: '🔵', text: '官方宣称', desc: '品牌宣称支持', class: 'status-vendor' };
  } else if (status === 'not_supported') {
    return { icon: '🔴', text: '暂不支持', desc: '触发地区拦截', class: 'status-fail' };
  }
  return { icon: '⚪', text: '暂未独立测试', desc: '待独立复测', class: 'status-none' };
}
</script>

<template>
  <div class="dno-container">
    <div class="dno-header">
      <div class="dno-title">
        <span class="dno-indicator dno-indicator-live"></span>
        <span>🎬 {{ brand }} 流媒体 & AI 解锁可用性矩阵 (Service Availability Matrix)</span>
      </div>
      <div class="dno-meta">
        <span>测试时间: {{ testDate }}</span>
      </div>
    </div>

    <div class="matrix-section-title">🤖 人工智能服务 (AI Services)</div>
    <div class="matrix-grid">
      <div class="matrix-card">
        <div class="service-name">ChatGPT (OpenAI)</div>
        <div class="status-indicator" :class="getBadge(matrix?.chatgpt).class">
          {{ getBadge(matrix?.chatgpt).icon }} {{ getBadge(matrix?.chatgpt).text }}
        </div>
        <div class="service-desc">{{ getBadge(matrix?.chatgpt).desc }}</div>
      </div>

      <div class="matrix-card">
        <div class="service-name">Claude (Anthropic)</div>
        <div class="status-indicator" :class="getBadge(matrix?.claude).class">
          {{ getBadge(matrix?.claude).icon }} {{ getBadge(matrix?.claude).text }}
        </div>
        <div class="service-desc">{{ getBadge(matrix?.claude).desc }}</div>
      </div>

      <div class="matrix-card">
        <div class="service-name">Gemini (Google)</div>
        <div class="status-indicator" :class="getBadge(matrix?.gemini).class">
          {{ getBadge(matrix?.gemini).icon }} {{ getBadge(matrix?.gemini).text }}
        </div>
        <div class="service-desc">{{ getBadge(matrix?.gemini).desc }}</div>
      </div>
    </div>

    <div class="matrix-section-title" style="margin-top: 1rem;">📺 国际流媒体与影音 (Streaming & Media)</div>
    <div class="matrix-grid">
      <div class="matrix-card">
        <div class="service-name">Netflix (网飞)</div>
        <div class="status-indicator" :class="getBadge(matrix?.netflix).class">
          {{ getBadge(matrix?.netflix).icon }} {{ getBadge(matrix?.netflix).text }}
        </div>
        <div class="service-desc">{{ getBadge(matrix?.netflix).desc }}</div>
      </div>

      <div class="matrix-card">
        <div class="service-name">Disney+</div>
        <div class="status-indicator" :class="getBadge(matrix?.disney).class">
          {{ getBadge(matrix?.disney).icon }} {{ getBadge(matrix?.disney).text }}
        </div>
        <div class="service-desc">{{ getBadge(matrix?.disney).desc }}</div>
      </div>

      <div class="matrix-card">
        <div class="service-name">YouTube Premium</div>
        <div class="status-indicator" :class="getBadge(matrix?.youtube).class">
          {{ getBadge(matrix?.youtube).icon }} {{ getBadge(matrix?.youtube).text }}
        </div>
        <div class="service-desc">{{ getBadge(matrix?.youtube).desc }}</div>
      </div>

      <div class="matrix-card">
        <div class="service-name">HBO Max</div>
        <div class="status-indicator" :class="getBadge(matrix?.hbo).class">
          {{ getBadge(matrix?.hbo).icon }} {{ getBadge(matrix?.hbo).text }}
        </div>
        <div class="service-desc">{{ getBadge(matrix?.hbo).desc }}</div>
      </div>

      <div class="matrix-card">
        <div class="service-name">TikTok (海外版)</div>
        <div class="status-indicator" :class="getBadge(matrix?.tiktok).class">
          {{ getBadge(matrix?.tiktok).icon }} {{ getBadge(matrix?.tiktok).text }}
        </div>
        <div class="service-desc">{{ getBadge(matrix?.tiktok).desc }}</div>
      </div>

      <div class="matrix-card">
        <div class="service-name">Spotify</div>
        <div class="status-indicator" :class="getBadge(matrix?.spotify).class">
          {{ getBadge(matrix?.spotify).icon }} {{ getBadge(matrix?.spotify).text }}
        </div>
        <div class="service-desc">{{ getBadge(matrix?.spotify).desc }}</div>
      </div>
    </div>

    <div class="dno-footer">
      <span class="test-note">测试节点：{{ nodeName }} | 工具校验：RegionRestrictionCheck 独立集群实测</span>
      <span class="dno-watermark">[feijichang.homes]</span>
    </div>
  </div>
</template>

<style scoped>
.matrix-section-title {
  font-size: 0.85rem;
  font-weight: 600;
  color: #94a3b8;
  margin-bottom: 0.6rem;
}

.matrix-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
}

.matrix-card {
  background: #0f172a;
  border: 1px solid #1e293b;
  border-radius: 8px;
  padding: 0.75rem;
}

.service-name {
  font-size: 0.85rem;
  font-weight: 600;
  color: #f1f5f9;
  margin-bottom: 0.35rem;
}

.status-indicator {
  font-size: 0.78rem;
  font-weight: 600;
  margin-bottom: 0.2rem;
}

.status-ok { color: #10b981; }
.status-warn { color: #f59e0b; }
.status-vendor { color: #38bdf8; }
.status-fail { color: #ef4444; }
.status-none { color: #64748b; }

.service-desc {
  font-size: 0.72rem;
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

.test-note {
  font-size: 0.75rem;
  color: #64748b;
  font-family: var(--vp-font-family-mono);
}

@media (max-width: 768px) {
  .matrix-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .matrix-grid {
    grid-template-columns: 1fr;
  }
}
</style>
