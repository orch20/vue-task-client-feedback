<template>
  <div v-if="isOpen" class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container" ref="target">
        <h2 class="modal-title">{{ $t('modal.title') }}</h2>
        <star-rating
          v-model:rating="rating"
          :increment="0.1"
          :star-size="24"
          :padding="6"
          :allow-half="true"
          :show-rating="false"
          active-color="#FCC141"
          :rounded-corners="true"
          :round-start-rating="false"
        />
        <span class="modal-rating-value">{{ rating }}</span>
        <button @click.stop="emit('modal-close')" class="modal-button">
          {{ $t('button.send') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { onClickOutside } from '@vueuse/core'
import StarRating from 'vue-star-rating'

const rating = ref(0)

defineProps({
  isOpen: Boolean,
})
const emit = defineEmits(['modal-close'])

const target = ref<HTMLElement | null>(null)
onClickOutside(target, () => emit('modal-close'))

function keydownListener(event: KeyboardEvent) {
  if (event.key === 'Escape') emit('modal-close')
}

onMounted(() => {
  document.addEventListener('keydown', keydownListener)
})

onUnmounted(() => {
  document.removeEventListener('keydown', keydownListener)
})
</script>

<style lang="scss" scoped>
@import '@/assets/main.scss';

.modal-mask {
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin: 150px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
}

.modal-title {
  color: $main-text-color;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  text-align: center;
  margin-bottom: 20px;
}

.modal-rating-value {
  color: $main-text-color;
  font-family: Greenwich;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  margin-bottom: 20px;
}

.modal-button {
  width: 100%;
  display: flex;
  height: 44px;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  border: none;
  background: $main-button-gradient;
  color: #fff;
  cursor: pointer;

  font-family: 'Formular', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  text-decoration: none;

  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  &:hover {
    opacity: 0.6;
  }
}
</style>
