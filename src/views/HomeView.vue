<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import AppModal from '@/components/AppModal.vue';
import MainSection from '@/components/home-sections/MainSection.vue';
import ProjectsSection from '@/components/home-sections/ProjectsSection.vue';
import SkillsSection from '@/components/home-sections/SkillsSection.vue';
import WhySection from '@/components/home-sections/WhySection.vue';
import WorkSection from '@/components/home-sections/WorkSection.vue';

const isModalOpen = ref(false);
const modalImg = ref('');

function toggleModal(payload: string) {
  if (!isModalOpen.value) {
    modalImg.value = payload;
  }
  isModalOpen.value = !isModalOpen.value;
}

const sectionHeight = ref('0');

function adjustHeight() {
  // Ensure each section fill the height of the page on all devices with a max height of 1100
  if (window.innerHeight >= 1100) {
    sectionHeight.value = '1100px';
  } else {
    sectionHeight.value = `${window.innerHeight}px`;
  }
};

onMounted(() => {
  window.addEventListener("resize", adjustHeight);
});

onBeforeUnmount(() => {
  window.addEventListener("resize", adjustHeight);
});

adjustHeight();
</script>

<template>
  <div class="home">
    <MainSection id="home" :sectionHeight="sectionHeight" />
    <ProjectsSection  id="projects" :sectionHeight="sectionHeight" />
    <SkillsSection id="skills" :sectionHeight="sectionHeight" />
    <WhySection id="why-me" :sectionHeight="sectionHeight" />
    <WorkSection @toggle-modal="toggleModal($event)" id="work" :sectionHeight="sectionHeight" />
    <AppModal v-if="isModalOpen" :imgPath="modalImg" @toggle-modal="toggleModal" />
  </div>
</template>

<style lang="scss" scoped>
.home {
  #projects,
  #skills {
    width: 90%;
    max-width: 1400px;
    margin: 0 auto;
    
    @include bp-custom-min(1360) {
      width: 80%;
    }
  }

  #skills {
    width: 80%;

    @include bp-lg-laptop {
      width: 90%;
    }
  }
}
</style>
