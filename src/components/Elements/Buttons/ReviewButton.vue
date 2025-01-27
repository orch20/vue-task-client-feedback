<template>
  <a
    href="https://www.google.com.ua/?hl=uk"
    target="_blank"
    rel="noopener noreferrer nofollow"
    class="review-button"
  >
    Переглянути
  </a>
</template>

<script lang="ts"></script>

<style lang="scss" scoped>
@import '@/assets/main.scss';

.review-button {
  width: 100%;
  display: flex;
  height: 44px;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  border: 1px solid #aacedb;
  background: $secondary-button-gradient;
  color: $main-text-color;

  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  text-decoration: none;

  transition:
    background 0.3s ease,
    color 0.3s ease;

  &:hover {
    background: $main-button-gradient;
    color: #fff;
    border-color: #fff;
    opacity: 0.6;
  }
}
</style>
