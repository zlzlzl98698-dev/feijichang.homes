<script setup lang="ts">
interface CrumbItem {
  name: string;
  link?: string;
}

defineProps<{
  items: CrumbItem[];
}>();
</script>

<template>
  <nav class="breadcrumb-nav" aria-label="Breadcrumb">
    <ol class="breadcrumb-list">
      <li class="breadcrumb-item">
        <a href="/" class="crumb-link">首页</a>
        <span class="crumb-separator">/</span>
      </li>
      <li v-for="(item, idx) in items" :key="idx" class="breadcrumb-item">
        <a v-if="item.link && idx < items.length - 1" :href="item.link" class="crumb-link">
          {{ item.name }}
        </a>
        <span v-else class="crumb-current" aria-current="page">{{ item.name }}</span>
        <span v-if="idx < items.length - 1" class="crumb-separator">/</span>
      </li>
    </ol>
  </nav>
</template>

<style scoped>
.breadcrumb-nav {
  margin: 0.5rem 0 1.25rem;
  font-size: 0.82rem;
}

.breadcrumb-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  color: #64748b;
}

.breadcrumb-item {
  display: flex;
  align-items: center;
}

.crumb-link {
  color: #64748b !important;
  text-decoration: none !important;
}

.crumb-link:hover {
  color: #2563eb !important;
  text-decoration: underline !important;
}

.crumb-current {
  color: #0f172a;
  font-weight: 500;
}

.crumb-separator {
  margin: 0 0.5rem;
  color: #cbd5e1;
}
</style>
