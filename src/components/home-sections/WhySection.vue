<template>
    <section class="why">
      <h2>Why Work With Me?</h2>
      <div class="cards-container">
        <div class="card">
          <font-awesome-icon class="fa-icon" icon="fa-solid fa-hourglass-start" />
          <div class="card-title">Time Managment</div>
          <p>
            I am able to manage tickets from their severity. I am able to track how much time is spent on minor tickets vs critical tickets which allows me to meet deadlines and have development ready in time for quality assurance.
          </p>
        </div>
        <div class="card">
          <font-awesome-icon class="fa-icon" icon="fa-solid fa-search" />
          <div class="card-title">Attention to Detail</div>
          <p>
            I am careful to get design details down correctly or revise until it's right. My goal is to have the site looking exactly like what the client is expecting while also having users get a great UI experience to keep them coming back.
          </p>
        </div>
        <div class="card">
          <font-awesome-icon class="fa-icon" icon="fa-brands fa-leanpub" />
          <div class="card-title">Adaptable</div>
          <p>
            Always excited to learn about new things. One of the most valuable things that I can provide to your company is the ability to be molded to your stack and become comfortable with the software that the team is comfortable using.
          </p>
        </div>
      </div>
    </section>
  </template>
  
  <style scoped lang="scss">
  .why {
    position: relative;
    padding: 200px 0 150px 0;
    margin-top: 120px;
    min-height: calc(100vh - 120px);
    background: url('@/assets/images/why_me_bg.jpg') no-repeat fixed center/cover;
    clip-path: polygon(0 5%, 100% 0, 100% 95%, 0 100%);
    
    @include bp-sm-phone-landscape {
      padding: 250px 0 250px 0;
      clip-path: polygon(0 10%, 100% 0, 100% 88%, 0 100%);
    }
    
    @include bp-lg-laptop {
      padding: 275px 0 275px 0;
      clip-path: polygon(0 20%, 100% 0, 100% 78%, 0 100%);
    }
    
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: radial-gradient(circle, transparent 50%, #17001b 95%);
      z-index: -1;
    }
    
    h2 {
      font-weight: 300;
      margin-bottom: 25px;
    }
  
    .cards-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0 25px;
      
      @include bp-lg-laptop {
        flex-direction: row;
        align-items: stretch;
      }
  
      .card {
        max-width: 300px;
        padding: 40px 15px;
        background-color: $highlight;
        border-radius: 7px;
        box-shadow: 0 0 10px $darkest-neutral;
        transition: all 0.2s;
        margin-bottom: 15px;

        @include bp-lg-laptop {
          margin-bottom: 0;

          &:hover {
            transform: translateY(-20px);
            box-shadow: 0 0 20px $darkest-neutral;
          }
        }

        &:nth-child(2) {
          @include bp-lg-laptop {
            margin: 0 50px;
          }
        }

        &-title {
          font-size: rem(24);
          margin: 15px 0;
          text-transform: uppercase;
          line-height: 1.3;
          letter-spacing: letter-spacing(0.5, 24);
        }

        .fa-icon {
          font-size: rem(50);
        }
      }
    }
  }
  </style>
  