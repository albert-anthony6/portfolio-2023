<script lang="ts" setup>
import AppHeader from '@/components/AppHeader.vue';
import { RouterView } from 'vue-router'
</script>

<template>
  <AppHeader />
  <RouterView class="page" />
</template>

<style lang="scss">
@import '@/assets/scss/_theme.scss';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.page {
  /* padding-top: 80px; */
}
</style>
