<template>
  <section class="review">
    <div class="review-content">
      <div class="review-header">
        <img src="@/img/google.svg" alt="Google logo" class="review-logo" />
        <h1 class="review-title">Відгуки наших клієнтів у Google</h1>
      </div>
    </div>
    <div class="review-buttons"></div>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import '@/assets/main.scss';

.review {
  width: 328px;
  display: flex;
  padding: 30px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.05);
}

.review-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
}

.review-header {
  display: flex;
  align-items: center;
  gap: 20px;
}

.review-title {
  color: $main-text-color;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
}
</style>
