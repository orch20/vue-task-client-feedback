<template>
  <button @click="openModal" class="notify-button">Написати</button>
  <ModalComponent
    :isOpen="isModalOpened"
    @modal-close="closeModal"
    @submit="submitHandler"
    name="first-modal"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import ModalComponent from '@/components/Modals/ModalComponent.vue'

const isModalOpened = ref(false)

const openModal = () => {
  isModalOpened.value = true
}
const closeModal = () => {
  isModalOpened.value = false
}

const submitHandler = () => {
  //here you do whatever
  console.log('submit')
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
}
</style>
