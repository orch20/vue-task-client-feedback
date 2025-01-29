<template>
  <header>
    <nav>
      <LanguageSwitcher />
    </nav>
  </header>
  <main>
    <ReviewSection />
  </main>
</template>

<script setup lang="ts">
import ReviewSection from '@/components/Sections/ReviewSection.vue'
import LanguageSwitcher from './components/Elements/LanguageSwitcher.vue'
</script>

<style lang="scss" scoped>
header {
  position: relative;
}
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
