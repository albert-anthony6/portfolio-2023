<script lang="ts" setup>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import { RouterView } from 'vue-router'
</script>

<template>
  <AppHeader />
  <RouterView />
  <AppFooter />
</template>

<style lang="scss">
@import '@/assets/scss/_theme.scss';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow: hidden;
}
</style>
