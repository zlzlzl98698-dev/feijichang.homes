<template>
  <div class="disclosure-box">
    <div class="disclosure-header">
      <span class="disclosure-icon">⚖️</span>
      <span class="disclosure-title">商业合作与透明度声明 (Affiliate & Editorial Disclosure)</span>
    </div>
    <div class="disclosure-content">
      本站（飞机场 feijichang.homes）部分链接含有推广追踪参数（<code>rel="nofollow sponsored noopener"</code>）。当您通过本站链接注册或选购服务时，本站可能会获得服务商的联盟佣金，此收入用于维持本站服务器及长期的独立网络节点测速成本。<br/>
      <b>我们的原则：</b>商业推广优先级展示不等于独立实测排名第一。所有测速截图均标明真实测试时间与环境，优缺点与避坑风险均实事求是记录。请理性消费，首选月付测试。
    </div>
  </div>
</template>

<style scoped>
.disclosure-box {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-left: 4px solid #2563eb;
  border-radius: 8px;
  padding: 0.85rem 1.25rem;
  margin: 1.5rem 0;
  font-size: 0.82rem;
  color: #475569;
  line-height: 1.5;
}

.disclosure-header {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.35rem;
}

.disclosure-icon {
  font-size: 1rem;
}

.disclosure-content code {
  background: #e2e8f0;
  color: #334155;
  padding: 1px 4px;
  border-radius: 3px;
  font-size: 0.75rem;
}
</style>
