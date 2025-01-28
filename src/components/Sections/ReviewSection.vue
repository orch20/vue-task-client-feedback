<template>
  <section v-if="!isLoading" class="review">
    <div class="review-content">
      <div class="review-header">
        <img src="@/img/google.svg" alt="Google logo" class="review-logo" />
        <h1 class="review-title">Відгуки наших клієнтів у Google</h1>
      </div>

      <div class="review__rating">
        <div class="review__rating-container">
          <span class="review__rating-value">{{ reviewsData.rating }}</span>
          <star-rating
            class="review__rating-stars"
            v-model:rating="reviewsData.rating"
            :increment="0.1"
            :read-only="true"
            :star-size="24"
            :padding="6"
            :allow-half="true"
            :show-rating="false"
            active-color="#FCC141"
            inactive-color="#fff"
            :rounded-corners="true"
            :round-start-rating="false"
          />
        </div>
        <span class="review__review-count">{{ reviewsData.count }} відгуки</span>
      </div>
      <div class="review-buttons">
        <ReviewButton />
        <NotifyButton />
      </div>
    </div>
  </section>
  <span v-else class="review-title loading">Loading...</span>
</template>

<script setup lang="ts">
import StarRating from 'vue-star-rating'
import ReviewButton from '@/components/Elements/Buttons/ReviewButton.vue'
import NotifyButton from '@/components/Elements/Buttons/NotifyButton.vue'
import { getReviews } from '@/services/reviewsApi'
import { onMounted, reactive, ref } from 'vue'

interface ReviewsData {
  rating: number
  count: number
}

const reviewsData = reactive<ReviewsData>({
  rating: 0,
  count: 0,
})

const isLoading = ref<boolean>(true)

onMounted(async () => {
  try {
    isLoading.value = true
    const { data } = await getReviews()
    reviewsData.rating = data[0].rating
    reviewsData.count = data[0].count
  } catch (error) {
    console.error(error)
  } finally {
    isLoading.value = false
  }
})
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

  @include min(577) {
    width: 100%;
    max-width: 912px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  @include min(1200) {
    max-width: 1286px;
  }
  @include min(1367) {
    max-width: 1458px;
  }
}

.review-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  @include min(577) {
    gap: 10px;
  }
  @include min(1200) {
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 50px;
  }
  @include min(1367) {
    gap: 60px;
  }
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
  @include min(1200) {
    font-size: 20px;
    line-height: 30px;
  }
}

.review__rating {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 6px;
  @include min(577) {
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }
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
  @include min(1200) {
    font-size: 36px;
    line-height: 44px;
  }
}

.review__rating-stars {
  margin-bottom: -5px;
}

.review__review-count {
  color: $secondary-text-color;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  white-space: nowrap;
}

.review-buttons {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  @include min(577) {
    width: fit-content;
    flex-direction: row;
    gap: 20px;
  }
}

.loading {
  animation: blink 0.5s step-start infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
