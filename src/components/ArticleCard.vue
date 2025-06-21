<script setup lang="ts">
defineProps<{
  title: string
  category: string
  commentCount: number
  date: string
  views: number
  description: string
}>()

defineEmits(['readMore'])
</script>

<template>
    <div class="bg-white rounded-xl shadow-md p-4 flex flex-col space-y-3 w-full max-w-3xl">
      <!-- 文章标题 -->
      <h2 class="text-xl font-bold text-gray-800 hover:text-blue-600 cursor-pointer">
        {{ title }}
      </h2>
  
      <!-- 信息栏：分类 评论数 日期 浏览数 -->
      <div class="flex items-center text-gray-500 text-sm space-x-4">
        <span class="flex items-center">
          <i class="i-mdi-folder-outline mr-1"></i> {{ category }}
        </span>
        <span class="flex items-center">
          <i class="i-mdi-comment-outline mr-1"></i> {{ commentCount }} 条评论
        </span>
        <span>{{ date }}</span>
        <span>{{ views }} views</span>
      </div>
  
      <!-- 简要描述 -->
      <p class="text-gray-600 text-sm">
        {{ description }}
      </p>
  
      <!-- 阅读按钮 -->
      <div class="text-right">
        <button
          class="bg-teal-500 hover:bg-teal-600 text-white px-4 py-1 rounded-md text-sm"
          @click="$emit('readMore')"
        >
          阅读全文
        </button>
      </div>
    </div>
  </template>

  

<style></style>