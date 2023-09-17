<script setup lang="ts">
import MainSection from '@/components/home-sections/MainSection.vue';
import ProjectsSection from '@/components/home-sections/ProjectsSection.vue';
import SkillsSection from '@/components/home-sections/SkillsSection.vue';
import WhySection from '@/components/home-sections/WhySection.vue';
import WorkSection from '@/components/home-sections/WorkSection.vue';
</script>

<template>
  <div class="home">
    <MainSection id="home" />
    <ProjectsSection  id="projects" />
    <SkillsSection id="skills" />
    <WhySection id="why-me" />
    <WorkSection id="work" />
  </div>
</template>

<style lang="scss" scoped>
.home {
  margin-top: 130px;

  *:not(#why-me, #work) {
    padding: 0 120px;
  }
}
</style>
