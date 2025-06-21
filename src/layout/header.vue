<script setup lang="ts"></script>
<template>
  <div class="header-container">
    <div class="blog-title text-white text-xl">xxx的博客</div>
    <div class="search-box">
      <input type="text" placeholder="搜索文章..." />
    </div>
  </div>
</template>

<script setup lang="ts">    
</script>

<style>
.header-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  position: relative;
}

.blog-title {
  font-size: 22px;
  font-weight: bold;
  margin-right: 300px;
}

.search-box {
  margin-left: 50px; /* 控制偏右距离 */
}

.search-box input {
  padding: 6px 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}
</style>