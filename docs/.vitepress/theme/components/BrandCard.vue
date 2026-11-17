<script setup lang="ts">
import { computed } from 'vue';
import { brands } from '../../../data/brands';
import type { BrandItem } from '../../../data/brands';

const props = defineProps<{
  brand?: BrandItem;
  slug?: string;
}>();

const currentBrand = computed<BrandItem | undefined>(() => {
  if (props.brand) return props.brand;
  if (props.slug) return brands.find(b => b.slug === props.slug);
  return undefined;
});
</script>

<template>
  <div v-if="currentBrand" class="brand-card" :class="{ 'featured-card': currentBrand.isCommercialPriority }">
    <div v-if="currentBrand.isCommercialPriority" class="featured-badge">🔥 商业首推伙伴</div>
    
    <div class="card-header">
      <div class="logo-box">
        <img v-if="currentBrand.logo" :src="currentBrand.logo" :alt="currentBrand.name + ' Logo'" class="brand-logo" />
        <div v-else class="text-logo" :style="{ backgroundColor: currentBrand.brandColor }">
          {{ currentBrand.name.slice(0, 2) }}
        </div>
      </div>
      <div class="title-box">
        <div class="brand-title">
          <a :href="'/brands/' + currentBrand.slug + '.html'" class="brand-name-link">
            {{ currentBrand.name }}
          </a>
          <span v-if="currentBrand.enName" class="brand-en">({{ currentBrand.enName }})</span>
        </div>
        <div class="badge-row">
          <span class="fjc-badge fjc-badge-blue">{{ currentBrand.lines }}</span>
          <span v-if="currentBrand.dataStatus === 'measured'" class="fjc-badge fjc-badge-green">有实测截图</span>
          <span v-else class="fjc-badge fjc-badge-amber">官方宣称</span>
        </div>
      </div>
    </div>

    <div class="card-body">
      <div class="price-row">
        <span class="price-val">{{ currentBrand.minPriceLabel }}</span>
        <span v-if="currentBrand.coupon" class="coupon-tag">券码: {{ currentBrand.coupon }}</span>
      </div>

      <div class="feature-chips">
        <span v-for="(p, idx) in currentBrand.protocols" :key="idx" class="chip">
          {{ p }}
        </span>
        <span class="chip">AI: {{ currentBrand.aiSupport }}</span>
        <span class="chip">流媒体: {{ currentBrand.streamingSupport }}</span>
      </div>

      <p class="brand-desc">
        {{ currentBrand.overview.slice(0, 85) }}...
      </p>
    </div>

    <div class="card-footer">
      <a :href="'/brands/' + currentBrand.slug + '.html'" class="detail-link">
        查看深度评测 ➔
      </a>
      <a 
        v-if="currentBrand.affUrl"
        :href="currentBrand.affUrl" 
        target="_blank" 
        rel="nofollow sponsored noopener"
        class="aff-btn"
      >
        官网注册
      </a>
    </div>
  </div>
</template>

<style scoped>
.brand-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.2s ease;
  position: relative;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.brand-card:hover {
  transform: translateY(-2px);
  border-color: #93c5fd;
  box-shadow: 0 10px 20px -5px rgba(37, 99, 235, 0.1);
}

.featured-card {
  border-color: #2563eb;
  background: #f8faff;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.12);
}

.featured-badge {
  position: absolute;
  top: -10px;
  right: 14px;
  background: linear-gradient(90deg, #2563eb, #1d4ed8);
  color: #ffffff;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 9999px;
  box-shadow: 0 2px 4px rgba(37, 99, 235, 0.3);
}

.card-header {
  display: flex;
  gap: 0.85rem;
  align-items: center;
  margin-bottom: 0.85rem;
}

.logo-box {
  width: 48px;
  height: 48px;
  border-radius: 8px;
  overflow: hidden;
  background: #f1f5f9;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.brand-logo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.text-logo {
  width: 100%;
  height: 100%;
  color: #ffffff;
  font-weight: 700;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.title-box {
  flex: 1;
}

.brand-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: #0f172a;
}

.brand-name-link {
  color: #0f172a !important;
  text-decoration: none !important;
}

.brand-name-link:hover {
  color: #2563eb !important;
}

.brand-en {
  font-size: 0.8rem;
  color: #64748b;
  margin-left: 0.25rem;
  font-weight: 400;
}

.badge-row {
  display: flex;
  gap: 0.35rem;
  margin-top: 0.25rem;
  flex-wrap: wrap;
}

.price-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.6rem 0;
}

.price-val {
  font-size: 1.1rem;
  font-weight: 700;
  color: #2563eb;
}

.coupon-tag {
  font-size: 0.72rem;
  background: #fef2f2;
  color: #dc2626;
  border: 1px dashed #fca5a5;
  padding: 1px 6px;
  border-radius: 4px;
  font-family: var(--vp-font-family-mono);
}

.feature-chips {
  display: flex;
  gap: 0.35rem;
  flex-wrap: wrap;
  margin-bottom: 0.65rem;
}

.chip {
  font-size: 0.72rem;
  background: #f1f5f9;
  color: #475569;
  padding: 1px 6px;
  border-radius: 4px;
}

.brand-desc {
  font-size: 0.82rem;
  color: #475569;
  line-height: 1.45;
  margin: 0.35rem 0 0.85rem;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #f1f5f9;
  padding-top: 0.75rem;
  margin-top: 0.5rem;
}

.detail-link {
  font-size: 0.82rem;
  font-weight: 600;
  color: #2563eb !important;
  text-decoration: none !important;
}

.detail-link:hover {
  text-decoration: underline !important;
}

.aff-btn {
  font-size: 0.82rem;
  font-weight: 600;
  background: #0f172a;
  color: #ffffff !important;
  padding: 0.35rem 0.85rem;
  border-radius: 6px;
  text-decoration: none !important;
  transition: background 0.15s ease;
}

.aff-btn:hover {
  background: #2563eb;
}
</style>
