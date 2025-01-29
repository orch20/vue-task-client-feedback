<template>
  <button @click="openModal" class="notify-button">{{ $t('button.notify') }}</button>
  <Teleport to="body">
    <Transition name="modal-fade">
      <ModalComponent :isOpen="isModalOpened" @modal-close="closeModal" name="first-modal" />
    </Transition>
  </Teleport>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import ModalComponent from '@/components/Modals/ModalComponent.vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

locale.value = 'en'
console.log('locale', locale.value)

const isModalOpened = ref(false)

const openModal = () => {
  isModalOpened.value = true
}
const closeModal = () => {
  isModalOpened.value = false
}
</script>

<style lang="scss" scoped>
@import '@/assets/main.scss';

.notify-button {
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

  @include min(577) {
    min-width: 109px;
  }
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: 0.25s ease all;
}
</style>
