<script setup lang="ts">
import MainSection from '@/components/home-sections/MainSection.vue';
import ProjectsSection from '@/components/home-sections/ProjectsSection.vue';
</script>

<template>
  <div class="home">
    <MainSection />
    <ProjectsSection />
  </div>
</template>

<style lang="scss" scoped>
.home {
  margin-top: 130px;
}
</style>
