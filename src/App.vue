<template>
  <main class="main">
    <ReviewSection />
  </main>
</template>

<script setup lang="ts">
import ReviewSection from '@/components/Sections/ReviewSection.vue'
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
