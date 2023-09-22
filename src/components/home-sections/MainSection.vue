<script setup lang="ts">
import { ref, onMounted } from 'vue';

const typewriterText = ref();
const intro = ref();

onMounted(() => {
  intro.value.style.minHeight = window.innerHeight + 'px';
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
  <main class="intro" ref="intro">
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
          <a href="https://google.com" class="social-icon" target="_blank">
            <font-awesome-icon class="fa-icon" icon="fa-solid fa-envelope" />
          </a>
          <a href="https://google.com" class="social-icon" target="_blank">
            <font-awesome-icon class="fa-icon" icon="fa-brands fa-github" />
          </a>
          <a href="https://google.com" class="social-icon" target="_blank">
            <font-awesome-icon class="fa-icon" icon="fa-brands fa-linkedin-in" />
          </a>
        </div>
        <div class="typewriter"><span ref="typewriterText" /><span>|</span></div>
        <div class="foot-note">
          <a href="#about" class="learn-more">
            Learn More 
            <font-awesome-icon class="fa-icon" icon="fa-solid fa-arrow-right" />
          </a>
        </div>
      </div>
    </div>
    <div class="animation-container">
      <a href="#projects" class="projects-link">
        <h2 class="text-cursive">
          <font-awesome-icon class="fa-icon" icon="fa-solid fa-arrow-down-long" />
          Projects & Skills
          <font-awesome-icon class="fa-icon" icon="fa-solid fa-arrow-down-long" />
        </h2>
      </a>
      <div class="page-circle" />
    </div>
  </main>
</template>

<style lang="scss" scoped>
.intro {
  padding-top: 210px;
  margin: 0 auto;

  .welcome-container {
    display: flex;
    max-width: 90%;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    
  @include bp-lg-laptop {
    flex-direction: row;
    justify-content: space-between;
  }
  
  @include bp-custom-min(1360) {
    max-width: 80%;
  }
  
  @include bp-xxl-desktop-large {
    max-width: 1400px;
  }

    .welcome {
      font-size: rem(8.6);
      
      @include bp-lg-laptop {
        text-align: left;
        padding-right: 40px;
      }

      @include bp-custom-min(1560) {
        font-size: rem(10);
      }

      h1 {
        line-height: 1;
        font-size: em(72, 10);
      }
      
      h2 {
        font-weight: 500;
        font-size: em(52, 10);
        margin-bottom: 0;

        &:last-of-type {
          font-weight: 300;
        }
      }

      p {
        width: fit-content;
        font-size: em(16, 10);
        padding: 5px 7px;
        margin: 10px auto 40px;
        background: 
          linear-gradient(rgb(139, 1, 202),rgb(133, 3, 111)) no-repeat, $darkest-neutral;
        background-position: center; 
        animation: 1s ease-in-out 0s 1 forwards background-slide;

        @include bp-lg-laptop {
          margin: 10px 0 0 0;
        }
      }

      .text-cursive {
        color: $highlight;
      }
    }

    .first-words {
      font-size: rem(14);
      position: relative;
      background-color: #EDF0F1;
      border-radius: 3px;
      width: 80%;

      @include bp-sm-phone-landscape {
        font-size: rem(16);
      }
    
      @include bp-lg-laptop {
        width: 45%;
        min-width: 400px;
        max-width: 600px;
      }

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
          width: 12px;
          height: 12px;
          margin: 0 3px;
          border-radius: 50%;
          
          @include bp-sm-phone-landscape {
            width: 15px;
            height: 15px;
            margin: 0 5px;
          }
        }

        .red {
          background-color: red;
          animation: 1s ease-in-out 0s 1 forwards test;
        }

        .yellow {
          background-color: yellow;
          animation: 2s ease-in-out 0s 1 forwards test;
        }

        .green {
          background-color: green;
          animation: 3s ease-in-out 0s 1 forwards test;
        }
      }

      .icons {
        padding: 30px 15px 0;
        border-bottom: 2px solid $lightest-neutral;
        background-color: #596F7D;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;

        @include bp-custom-min(390) {
          padding: 15px 15px 0;
        }

        .social-icon {
          display: inline-block;
          width: 35px;
          height: 35px;
          margin: 0 10px 10px;
          border-radius: 50%;
          background-image: linear-gradient(to right bottom, rgb(231, 100, 248), rgb(43, 3, 153));
          cursor: pointer;
          animation: 1s ease-in-out 0s 1 forwards test;
          
          @include bp-sm-phone-landscape {
            width: 50px;
            height: 50px;
          }

          &::after {
            content: '';
            width: 100%;
            height: 100%;
            display: block;
            background-image: linear-gradient(to right bottom, rgb(231, 100, 248), rgb(43, 3, 153));
            border-radius: 50%;
            transition: all .2s ease;
          }
          
          &:hover::after {
            transform: scale(2);
            opacity: 0;
          }

          svg {
            position: absolute;
            width: 20px;
            height: 20px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 9;
            
            @include bp-sm-phone-landscape {
              width: 30px;
              height: 30px;
            }
          }
        }

        @keyframes test {
          from {
            opacity: 0;
            transform: translateY(10px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      }
    }
  }

  .animation-container {
    position: relative;
    width: 100%;
    margin-top: 50px;

    @include bp-lg-laptop {
      margin-top: 100px;
    }

    .projects-link {
      display: inline-block;

      h2 {
        font-size: rem(35);
  
        @include bp-sm-phone-landscape {
          font-size: rem(52);
        }
      }

      svg {
        font-size: rem(25);
        animation: 1s ease-in-out 0s infinite alternate bounce;

        @include bp-sm-phone-landscape {
          font-size: rem(30);
        }
  
        &:last-child {
          animation-direction: alternate-reverse;
        }
      }
    }
  
    .page-circle {
      position: absolute;
      width: 100%;
      height: 50vw;
      top: 0;
      left: 0;
      background: linear-gradient(0deg, transparent 50%, rgba(17,7,20,0.7) 100%);
      border-radius: 50%;
      animation: 5s ease-in-out 0s infinite alternate expand;
      z-index: -1;
    }
  }
}
</style>
