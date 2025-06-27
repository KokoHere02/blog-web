<script setup lang="ts">
import ArticleCard from '@/components/ArticleCard.vue';
const handleReadMore = () => {
  console.log('阅读全文');
};

</script>

<template>
<div class="main-center">
  
<div class="leftMain">
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

<div class="rightMain">
    <ArticleCard
  title="多功能文件分享程序Zdir 4.5.1小版本更新，买一赠一活动即将结束"
  category="分享发现"
  :commentCount="0"
  date="2025-6-17"
  :views="682"
  description="Zdir是一款使用Golang+Vue3开发的多功能私有存储程序，"
  @readMore="handleReadMore"
  :tags="['分享发现','zdir','vue3','golang']"
/>
</div>


</div>
</template>

<style lang="css">
.main-center {
  display: flex;
  /* 修改：将column改为row实现横向排列 */
  flex-direction: row;
  /* 修改：移除固定高度限制 */
  min-height: 100vh;
  /* 修改：使用max-width替代固定width，增加响应式 */
  max-width: 1200px;
  margin: 0 auto; /* 水平居中 */
  width: 100%;
  gap: 20px; /* 左右区域间距 */
  padding: 20px;
}

.leftMain {
  flex: 3; /* 左侧占据3/4宽度 */
}

.rightMain {
  flex: 1; /* 右侧占据1/4宽度 */
}
</style>