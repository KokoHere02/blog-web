<script setup lang="ts">
import ArticleCard from '@/components/ArticleCard.vue';
const handleReadMore = () => {
  console.log('阅读全文');
};

</script>

<template>
<div class="main-center">
  
  <ArticleCard
  title="多功能文件分享程序Zdir 4.5.1小版本更新，买一赠一活动即将结束"
  category="分享发现"
  :commentCount="0"
  date="2025-6-17"
  :views="682"
  description="Zdir是一款使用Golang+Vue3开发的多功能私有存储程序，集成了文件索引..."
  @readMore="handleReadMore"
/>

</div>
</template>

<style lang="css">
/* .main-center {
  display: flex;
  height: auto;
  align-items: center;
  
} */
.main-center {
  display: flex;
  align-items: center;      /* 垂直居中 */
  height: 100vh;            /* 限制父容器高度 */
  flex-direction: column;
  gap: 20px;               /* 每个 ArticleCard 之间有 20px 的间距 */
  padding: 20px;  
}
</style>