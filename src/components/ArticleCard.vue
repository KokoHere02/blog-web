<script setup lang="ts">
defineProps<{
  title: string
  category: string
  commentCount: number
  date: string
  views: number
  description: string
  tags?: string[] // 新增：标签数组，可选参数
}>()

defineEmits(['readMore'])
</script>

<template>
  <!-- 修改：增加max-w-4xl以允许更大宽度 -->
  <div class="bg-white rounded-xl shadow-md p-6 flex flex-col space-y-4 w-full max-w-4xl min-h-[220px]">
    <!-- 文章标题 -->
    <h2 class="text-2xl font-bold text-gray-800 hover:text-blue-600 cursor-pointer"> <!-- 修改：text-xl改为text-2xl增大标题 -->
      {{ title }}
    </h2>

    <!-- 信息栏：分类 评论数 日期 浏览数 -->
    <div class="flex items-center text-gray-500 text-sm space-x-4">
      <span class="flex items-center">
        <i class="i-mdi-folder-outline mr-1"></i> {{ category }}
      </span>
      <!-- <span class="flex items-center">
        <i class="i-mdi-comment-outline mr-1"></i> {{ commentCount }} 条评论
      </span> -->
      <span>{{ date }}</span>
      <span>{{ views }} views</span>
    </div>

    <!-- 简要描述 -->
    <p class="text-gray-600 text-base"> <!-- 修改：text-sm改为text-base增大描述文字 -->
      {{ description }}
    </p>

    <!-- 新增：标签区域 -->
    <div v-if="tags && tags.length" class="flex flex-wrap gap-2 mt-2">
      <span v-for="(tag, index) in tags" :key="index" class="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
        {{ tag }}
      </span>
    </div>

    <!-- 阅读按钮 -->
    <div class="text-right mt-2">
      <button
        class="bg-teal-500 hover:bg-teal-600 text-white px-5 py-2 rounded-md text-sm"
        @click="$emit('readMore')"
      >
        阅读全文
      </button>
    </div>
  </div>
</template>

<style></style>