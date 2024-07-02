<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';

interface Props {
  sectionHeight: string;
}

const props = defineProps<Props>();

const skills = ref();

onMounted(() => {
  // Setting initial section min-height
  skills.value.style.minHeight = props.sectionHeight;
});

// Update section min-height is this prop changes
watch(
  () => [props.sectionHeight],
  (val) => {
    skills.value.style.minHeight = val;
  }
);
</script>

<template>
  <section class="skills" ref="skills">
    <h2>Skills & Tools</h2>
    <p>
      Below are my current skills that include programming languages and technologies that I've used
      for years.
    </p>
    <h3 class="mobile-category">Skills</h3>
    <div class="skills-container">
      <div class="desktop-category">
        <h3 class="desktop-category">Skills</h3>
      </div>
      <ul class="list">
        <li class="tag">Semantic HTML5</li>
        <li class="tag">Responsive CSS3</li>
        <li class="tag">JavaScript</li>
        <li class="tag">Typescript</li>
        <li class="tag">Sass</li>
        <li class="tag">git</li>
        <li class="tag">Vue</li>
        <li class="tag">React</li>
        <li class="tag">State Management</li>
        <li class="tag">JSX</li>
        <li class="tag">.NET</li>
        <li class="tag">C#</li>
        <li class="tag">Debugging</li>
        <li class="tag">Form Validation</li>
        <li class="tag">API Handling</li>
      </ul>
    </div>
    <h3 class="mobile-category">Tools</h3>
    <div class="tools-container">
      <div class="desktop-category">
        <h3 class="desktop-category">Tools</h3>
      </div>
      <ul class="list">
        <li class="tag">Github</li>
        <li class="tag">Bitbucket</li>
        <li class="tag">VSCode</li>
        <li class="tag">Slack</li>
        <li class="tag">Jira</li>
        <li class="tag">Notion</li>
        <li class="tag">Figma</li>
        <li class="tag">Adobe XD</li>
        <li class="tag">Whimsical</li>
        <li class="tag">Communication</li>
        <li class="tag">Google</li>
        <li class="tag">Stack Overflow</li>
        <li class="tag">Documentation</li>
        <li class="tag">Monday</li>
        <li class="tag">Toggle</li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.skills {
  padding-top: 120px;

  h2 {
    font-weight: 300;
  }

  .desktop-category {
    display: none;
    width: 50px;
    text-align: center !important;

    @include bp-custom-min(650) {
      display: block;
    }

    h3 {
      display: flex;
      padding: 15px;
      font-size: rem(30);
      font-weight: 500;
      width: 100%;
      background-image: linear-gradient(to right bottom, rgb(209, 40, 231), rgb(63, 3, 78));
      text-transform: uppercase;
      line-height: 1;
      word-break: break-all;
      -ms-word-break: break-all;
    }
  }

  .mobile-category {
    font-weight: 300;
    text-transform: uppercase;
    font-size: rem(32);
    margin-top: 15px;

    @include bp-custom-min(650) {
      display: none;
    }
  }

  p {
    max-width: 500px;
    margin: 0 auto;
    font-weight: 300;
  }

  .tag {
    font-size: rem(14);
    padding: 5px 15px;
    border: 1px solid $lightest-neutral;
    border-radius: 50px;
    margin: 20px 5px 0;
    transition: all 0.2s ease;

    &:hover {
      background-color: $lightest-neutral;
      color: $darkest-neutral;
    }
  }

  .skills-container,
  .tools-container {
    display: flex;
    width: 100%;
    align-items: center;

    @include bp-custom-min(650) {
      margin-top: 25px;
      width: 500px;
    }

    @include bp-custom-min(850) {
      width: 620px;
    }

    .list {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      padding-bottom: 15px;

      @include bp-custom-min(650) {
        margin-left: 15px;
        justify-content: flex-start;
      }
    }
  }

  .tools-container {
    flex-direction: row-reverse;
    margin-left: auto;

    .list {
      flex-direction: row-reverse;

      @include bp-custom-min(650) {
        margin: 0 15px 0 0;
      }
    }
  }
}
</style>
