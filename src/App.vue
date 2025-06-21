<script setup lang="ts">
import Header from '@/layout/header.vue';
import Footer from './layout/footer.vue';
import MainPage from './page/mainPage.vue';
</script>

<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
  <!-- Header -->
  <header class="bg-gray-500 shadow-md h-16 flex items-center justify-center">
    <Header/>  
  </header> 

  <!-- Main -->
  <div class="flex flex-1 min-h-0 w-full">  
    <aside class="bg-red-200 w-64 flex items-center">左边左边</aside>
    <main class="flex-1 bg-green-200 flex justify-center ">
      <MainPage/> 
    </main>
    <aside class="bg-blue-200 w-64 flex items-center">右边</aside> 
  </div>

  <!-- Footer -->
  <footer class="bg-white shadow-md h-20 flex items-center justify-center">
    <Footer/>
  </footer>

</div>

</template>

<style scoped>

</style>
