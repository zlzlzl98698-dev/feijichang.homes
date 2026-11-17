<script setup lang="ts">
interface PlanItem {
  name: string;
  billing: string;
  price: string;
  traffic: string;
  cycle?: string;
  monthlyEquivalent?: string;
  note?: string;
  isPopular?: boolean;
}

const props = withDefaults(defineProps<{
  brand: string;
  coupon?: string;
  affUrl?: string;
  plans?: PlanItem[];
}>(), {
  brand: '光速云',
  coupon: 'AMM',
  affUrl: 'https://sahude.gsyvipaff.com/#/?code=keqgvT5Y',
  plans: () => [
    { name: '致敬斯诺克147永久套餐', billing: '一次性付费', price: '¥147', traffic: '247GB 永不过期', note: '一次性付费/不限时/备用首选' },
    { name: '轻量版 (当前资料)', billing: '年付', price: '¥99/年', traffic: '69GB/月', monthlyEquivalent: '折算约 ¥8.25/月', isPopular: true, note: '注：历史资料曾标注59GB/月，当前官方核实为69GB/月' },
    { name: '极速版', billing: '月付', price: '¥25/月', traffic: '168GB/月', note: '全球 IPLC 专线接入/单节点最高 2.5Gbps' },
    { name: '流光版', billing: '月付', price: '¥34/月', traffic: '268GB/月', note: '大流量高带宽/多端同时在线' },
    { name: '量子版', billing: '月付', price: '¥68/月', traffic: '568GB/月', note: '重度科研与 4K 高清流媒体' },
    { name: '定制版', billing: '月付', price: '¥680/月', traffic: '500GB/月', note: '企业级独立原生 IP / 专属定制 IPLC 专线' }
  ]
});
</script>

<template>
  <div class="plan-selector-container">
    <div class="table-responsive">
      <table class="plans-table">
        <thead>
          <tr>
            <th>套餐方案</th>
            <th>计费周期</th>
            <th>套餐价格</th>
            <th>流量配额</th>
            <th>特性与架构说明</th>
            <th>购买入口</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(p, idx) in plans" :key="idx" :class="{ 'row-popular': p.isPopular }">
            <td class="plan-name-cell">
              <b>{{ p.name }}</b>
              <span v-if="p.isPopular" class="popular-tag">🔥 热销推荐</span>
            </td>
            <td><span class="billing-badge">{{ p.billing }}</span></td>
            <td>
              <span class="plan-price">{{ p.price }}</span>
              <div v-if="p.monthlyEquivalent" class="monthly-eq">{{ p.monthlyEquivalent }}</div>
            </td>
            <td class="traffic-cell">{{ p.traffic }}</td>
            <td class="note-cell">{{ p.note || '全节点接入' }}</td>
            <td>
              <a 
                v-if="affUrl" 
                :href="affUrl" 
                target="_blank" 
                rel="nofollow sponsored noopener" 
                class="plan-buy-btn"
              >
                选购套餐
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="pricing-notice">
      <span v-if="coupon" class="coupon-tip">
        🎟️ 结账输入优惠码 <code class="coupon-code">{{ coupon }}</code> 可享新用户专属折扣
      </span>
      <span class="refund-tip">
        ⚠️ 购买提醒：部分年付折算价格并非真实单月付价格；特惠商品多不支持无理由退款，建议先购月付验证晚高峰体验。
      </span>
    </div>
  </div>
</template>

<style scoped>
.plan-selector-container {
  margin: 1.5rem 0;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  overflow: hidden;
  background: #ffffff;
}

.table-responsive {
  overflow-x: auto;
}

.plans-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.88rem;
  margin: 0;
}

.plans-table th {
  background: #f8fafc;
  color: #475569;
  font-weight: 600;
  padding: 0.75rem 1rem;
  text-align: left;
  border-bottom: 1px solid #e2e8f0;
}

.plans-table td {
  padding: 0.85rem 1rem;
  border-bottom: 1px solid #f1f5f9;
  color: #1e293b;
}

.row-popular {
  background: #f0f7ff;
}

.plan-name-cell {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.popular-tag {
  font-size: 0.7rem;
  background: #ef4444;
  color: #ffffff;
  padding: 1px 6px;
  border-radius: 4px;
  font-weight: 600;
}

.billing-badge {
  font-size: 0.75rem;
  background: #f1f5f9;
  color: #475569;
  padding: 2px 8px;
  border-radius: 4px;
}

.plan-price {
  font-weight: 700;
  color: #2563eb;
  font-size: 1.05rem;
}

.monthly-eq {
  font-size: 0.75rem;
  color: #16a34a;
  font-weight: 500;
}

.traffic-cell {
  font-weight: 500;
}

.note-cell {
  font-size: 0.82rem;
  color: #64748b;
  max-width: 280px;
}

.plan-buy-btn {
  background: #2563eb;
  color: #ffffff !important;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.35rem 0.85rem;
  border-radius: 6px;
  text-decoration: none !important;
  white-space: nowrap;
}

.plan-buy-btn:hover {
  background: #1d4ed8;
}

.pricing-notice {
  padding: 0.85rem 1rem;
  background: #f8fafc;
  border-top: 1px solid #e2e8f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  font-size: 0.78rem;
  color: #64748b;
}

.coupon-code {
  color: #dc2626;
  font-weight: 700;
  background: #fee2e2;
  padding: 2px 6px;
  border-radius: 4px;
}
</style>
