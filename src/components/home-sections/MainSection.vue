<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router'
import IconPageCircle from '@/assets/icons/icon_page_circle.svg';

const typewriterText = ref();

onMounted(() => {
  const textToType = 'I\'m a developer with over four years of experience working on the Frontend side of web applications. I began my journey in 2019 and have since really enjoyed my commitment to code daily. I strive to refine my skills with each project that I complete! My mindset is always to test new features, communicate with team members, and pay attention to detail. With that being said, I\'d love to share more detail about myself with you!';
  let currentIndex = 0;

  function typeCharacter() {
    typewriterText.value.innerHTML += textToType[currentIndex];
    currentIndex += 1;

    if (currentIndex < textToType.length) {
      setTimeout(typeCharacter, 30);
    }
  }

  typeCharacter();
})
</script>

<template>
  <main class="intro">
    <div class="welcome-container">
      <div class="welcome">
        <h2><span class="text-cursive">Hello</span>, I'm</h2>
        <h1>Albert Valdes</h1>
        <h2>Frontend Web Developer</h2>
        <p>Welcome to my Portfolio</p>
      </div>
      <div class="first-words">
        <div class="browser-actions">
          <div class="red action" />
          <div class="yellow action" />
          <div class="green action" />
        </div>
        <div class="icons">
          <a href="https://google.com" target="_blank">
            <font-awesome-icon class="fa-icon social-icon" icon="fa-solid fa-envelope" />
          </a>
          <a href="https://google.com" target="_blank">
            <font-awesome-icon class="fa-icon social-icon" icon="fa-brands fa-github" />
          </a>
          <a href="https://google.com" target="_blank">
            <font-awesome-icon class="fa-icon social-icon" icon="fa-brands fa-linkedin-in" />
          </a>
        </div>
        <div class="typewriter"><span ref="typewriterText" /><span>|</span></div>
        <div class="foot-note">
          <RouterLink to="#about" class="learn-more">
            Learn More 
            <font-awesome-icon class="fa-icon" icon="fa-solid fa-arrow-right" />
          </RouterLink>
        </div>
      </div>
    </div>
    <RouterLink to="#projects" class="projects-link">
      <h2 class="text-cursive">
        <font-awesome-icon class="fa-icon" icon="fa-solid fa-arrow-down-long" />
        Projects & Skills
        <font-awesome-icon class="fa-icon" icon="fa-solid fa-arrow-down-long" />
      </h2>
    </RouterLink>
    <IconPageCircle class="page-circle" />
  </main>
</template>

<style lang="scss" scoped>
.intro {
    height: 80vh;
  
  .welcome-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 80%;
    margin: 0 auto;

    .welcome {
      padding: 0 40px;
      text-align: left;

      h2 {
        font-weight: 500;

        &:last-of-type {
          font-weight: 300;
        }
      }

      p {
        width: fit-content;
        padding: 5px 7px;
        margin-top: 10px;
        background: 
          linear-gradient(rgb(139, 1, 202),rgb(133, 3, 111)) no-repeat, $darkest-neutral;
        background-position: center; 
        animation: 1s ease-in-out 0s 1 forwards background-slide;
      }

      .text-cursive {
        color: $highlight;
      }
    }

    .first-words {
      position: relative;
      width: 45%;
      background-color: #EDF0F1;
      border-radius: 3px;

      .typewriter {
        min-height: 205px;
        text-align: left;
        padding: 15px;

        span {
          color: black;
          
          &:last-of-type {
            animation: blink 0.7s infinite alternate linear;
          }
        }
      }

      .foot-note {
        width: 100%;
        text-align: right;
        margin-top: -10px;
        margin-bottom: 15px;

        .learn-more {
          color: $highlight;
          margin: 0 20px;
          border-bottom: 2px solid transparent;
          transition: border-bottom 0.2s ease;

          &:hover {
            border-bottom: 2px solid $highlight;
          }
  
          svg {
            font-size: rem(18);
            margin-bottom: -1px;
          }
        }
      }

      .browser-actions {
        position: absolute;
        display: flex;
        top: 10px;
        left: 5px;

        .action {
          width: 15px;
          height: 15px;
          margin: 0 5px;
          border-radius: 50%;
        }

        .red {
          background-color: red;
        }

        .yellow {
          background-color: yellow;
        }

        .green {
          background-color: green;
        }
      }

      .icons {
        padding: 15px 15px 0;
        border-bottom: 2px solid $lightest-neutral;
        background-color: #596F7D;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;

        .social-icon {
          padding: 10px 12px;
          margin: 0 10px 10px;
          border-radius: 50%;
          background-color: $highlight;
          cursor: pointer;
        }
      }
    }
  }

  .page-circle {
    position: absolute;
    width: 100%;
    bottom: -40vw;
    left: 0;
    animation: 5s ease-in-out 0s infinite alternate expand;
  }

  .projects-link {
    display: inline-block;
    margin-top: 100px;

    svg {
      animation: 1s ease-in-out 0s infinite alternate bounce;

      &:last-child {
        animation-direction: alternate-reverse;
      }
    }
  }
}
</style>
