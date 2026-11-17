<script setup lang="ts">
import { ref, computed } from 'vue';
import { brands } from '../../../data/brands';
import type { BrandItem } from '../../../data/brands';
import BrandCard from './BrandCard.vue';

const searchQuery = ref('');
const selectedLine = ref('all');
const selectedPrice = ref('all');
const selectedProtocol = ref('all');
const selectedAI = ref('all');
const sortBy = ref('priority');

const filteredBrands = computed(() => {
  return brands.filter(b => {
    // Search query
    if (searchQuery.value) {
      const q = searchQuery.value.toLowerCase().trim();
      const matchName = b.name.toLowerCase().includes(q);
      const matchEn = b.enName.toLowerCase().includes(q);
      const matchAlias = b.aliases.some(a => a.toLowerCase().includes(q));
      const matchFeat = b.features.some(f => f.toLowerCase().includes(q));
      if (!matchName && !matchEn && !matchAlias && !matchFeat) return false;
    }

    // Line
    if (selectedLine.value !== 'all') {
      if (!b.lines.toLowerCase().includes(selectedLine.value.toLowerCase())) return false;
    }

    // Price
    if (selectedPrice.value === 'low') {
      if (b.minPriceMonthly > 15) return false;
    } else if (selectedPrice.value === 'mid') {
      if (b.minPriceMonthly <= 15 || b.minPriceMonthly > 30) return false;
    } else if (selectedPrice.value === 'high') {
      if (b.minPriceMonthly <= 30) return false;
    }

    // Protocol
    if (selectedProtocol.value !== 'all') {
      if (!b.protocols.some(p => p.toLowerCase() === selectedProtocol.value.toLowerCase())) return false;
    }

    // AI
    if (selectedAI.value === 'supported') {
      if (b.aiSupport !== '支持') return false;
    }

    return true;
  }).sort((a, b) => {
    if (sortBy.value === 'priority') {
      if (a.isCommercialPriority && !b.isCommercialPriority) return -1;
      if (!a.isCommercialPriority && b.isCommercialPriority) return 1;
      return a.name.localeCompare(b.name, 'zh-CN');
    } else if (sortBy.value === 'price-asc') {
      return a.minPriceMonthly - b.minPriceMonthly;
    } else if (sortBy.value === 'price-desc') {
      return b.minPriceMonthly - a.minPriceMonthly;
    }
    return 0;
  });
});
</script>

<template>
  <div class="brand-filter-system">
    <div class="search-bar-box">
      <input 
        v-model="searchQuery" 
        type="text" 
        placeholder="🔍 搜索机场品牌名称、协议、线路或英文名 (如: 光速云, IEPL, VLESS)..." 
        class="search-input"
      />
    </div>

    <div class="filter-controls">
      <div class="control-group">
        <label>线路架构：</label>
        <select v-model="selectedLine" class="filter-select">
          <option value="all">全部线路</option>
          <option value="IEPL">IEPL 专线</option>
          <option value="IPLC">IPLC 专线</option>
          <option value="BGP">BGP 优化</option>
        </select>
      </div>

      <div class="control-group">
        <label>价格区间：</label>
        <select v-model="selectedPrice" class="filter-select">
          <option value="all">全部预算</option>
          <option value="low">平价入门 (≤ ¥15/月)</option>
          <option value="mid">高性价比 (¥15 - ¥30/月)</option>
          <option value="high">高端旗舰 (> ¥30/月)</option>
        </select>
      </div>

      <div class="control-group">
        <label>支持协议：</label>
        <select v-model="selectedProtocol" class="filter-select">
          <option value="all">全部协议</option>
          <option value="VLESS">VLESS</option>
          <option value="Shadowsocks">Shadowsocks</option>
          <option value="Trojan">Trojan</option>
        </select>
      </div>

      <div class="control-group">
        <label>AI 解锁：</label>
        <select v-model="selectedAI" class="filter-select">
          <option value="all">不限</option>
          <option value="supported">仅实测支持 ChatGPT/Claude</option>
        </select>
      </div>

      <div class="control-group">
        <label>结果排序：</label>
        <select v-model="sortBy" class="filter-select">
          <option value="priority">推荐度与综合权重</option>
          <option value="price-asc">价格由低到高</option>
          <option value="price-desc">价格由高到低</option>
        </select>
      </div>
    </div>

    <div class="filter-stats">
      <span>已筛选匹配 <b>{{ filteredBrands.length }}</b> 个独立机场品牌</span>
      <span v-if="searchQuery || selectedLine !== 'all' || selectedPrice !== 'all' || selectedProtocol !== 'all' || selectedAI !== 'all'" class="reset-btn" @click="searchQuery = ''; selectedLine = 'all'; selectedPrice = 'all'; selectedProtocol = 'all'; selectedAI = 'all';">
        重置筛选条件 ↺
      </span>
    </div>

    <!-- Static list rendered for SSR and hydration -->
    <div v-if="filteredBrands.length > 0" class="brand-grid">
      <BrandCard 
        v-for="b in filteredBrands" 
        :key="b.slug" 
        :brand="b" 
      />
    </div>

    <div v-else class="empty-state">
      <div class="empty-icon">📂</div>
      <div class="empty-text">未找到符合当前条件的机场品牌</div>
      <button class="empty-reset-btn" @click="searchQuery = ''; selectedLine = 'all'; selectedPrice = 'all'; selectedProtocol = 'all'; selectedAI = 'all';">
        查看全部 40+ 机场品牌
      </button>
    </div>
  </div>
</template>

<style scoped>
.brand-filter-system {
  margin: 1.5rem 0 3rem;
}

.search-bar-box {
  margin-bottom: 1rem;
}

.search-input {
  width: 100%;
  padding: 0.85rem 1.25rem;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  font-size: 0.95rem;
  background: #ffffff;
  color: #0f172a;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.search-input:focus {
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
}

.filter-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  background: #f8fafc;
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
}

.control-group {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.85rem;
  color: #475569;
}

.filter-select {
  padding: 0.35rem 0.65rem;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  background: #ffffff;
  color: #0f172a;
  font-size: 0.82rem;
  outline: none;
}

.filter-select:focus {
  border-color: #2563eb;
}

.filter-stats {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0 0.5rem;
  font-size: 0.85rem;
  color: #64748b;
}

.filter-stats b {
  color: #2563eb;
}

.reset-btn {
  color: #2563eb;
  cursor: pointer;
  font-weight: 500;
}

.reset-btn:hover {
  text-decoration: underline;
}

.empty-state {
  text-align: center;
  padding: 4rem 1rem;
  background: #f8fafc;
  border: 1px dashed #cbd5e1;
  border-radius: 12px;
  margin: 2rem 0;
}

.empty-icon {
  font-size: 2.5rem;
  margin-bottom: 0.75rem;
}

.empty-text {
  font-size: 1rem;
  color: #64748b;
  margin-bottom: 1rem;
}

.empty-reset-btn {
  background: #2563eb;
  color: #ffffff;
  border: none;
  padding: 0.5rem 1.25rem;
  border-radius: 6px;
  font-size: 0.88rem;
  cursor: pointer;
  font-weight: 600;
}
</style>
