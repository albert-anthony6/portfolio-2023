<script lang="ts" setup>
import AppHeader from '@/components/AppHeader.vue';
import { RouterView } from 'vue-router'
</script>

<template>
  <AppHeader />
  <RouterView class="page" />
</template>

<style lang="scss">
@import '@/assets/scss/theme.scss';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.page {
  padding: 80px 120px;
}
</style>
