<template>
  <div class="switcher-container">
    <button @click="setLanguage('uk')" class="switcher-button">
      <img src="https://flagcdn.com/20x15/ua.png" alt="English" />
    </button>
    <button @click="setLanguage('en')" class="switcher-button">
      <img src="https://flagcdn.com/20x15/us.png" alt="English" />
    </button>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { watchEffect } from 'vue'

const { locale } = useI18n()

const setLanguage = (newLang) => {
  locale.value = newLang
  localStorage.setItem('lang', newLang)
}

watchEffect(() => {
  const storedLang = localStorage.getItem('lang')
  if (storedLang) {
    locale.value = storedLang
  }
})
</script>

<style lang="scss" scoped>
.switcher-container {
  position: absolute;
  top: 10px;
  right: 10px;
}
.switcher-button {
  cursor: pointer;
  border: none;
  background: none;
}
</style>
