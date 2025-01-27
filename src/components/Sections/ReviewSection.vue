<template>
  <section class="review">
    <div class="review-content">
      <div class="review-header">
        <img src="@/img/google.svg" alt="Google logo" class="review-logo" />
        <h1 class="review-title">Відгуки наших клієнтів у Google</h1>
      </div>
      <div class="review__rating">
        <div class="review__rating-container">
          <span class="review__rating-value">4.9</span>
          <star-rating
            :rating="4.5"
            :read-only="true"
            :star-size="10"
            :max-rating="5"
            :show-rating="false"
            :round-start-rating="false"
            :border-width="2"
            border-color="#FCC141"
            active-color="#FCC141"
            inactive-color="#fff"
            :gap="6"
          />
        </div>
        <span class="review__review-count">123 відгуки</span>
      </div>
    </div>
    <div class="review-buttons"></div>
  </section>
</template>

<script setup lang="ts">
import StarRating from 'vue-star-rating'
</script>

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

.review__rating {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 6px;
}

.review__rating-container {
  display: flex;
  align-items: center;
  gap: 20px;
}

.review__rating-value {
  color: $main-text-color;
  font-family: Greenwich;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
}

.review__review-count {
  color: $secondary-text-color;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
}
</style>
