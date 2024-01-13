<script setup lang="ts">
import { ref } from 'vue';
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

const carousel = ref()

const slides = [
    'orc.jpg',
    'orc_head.jpg',
    'crimson_ronin.jpg',
    'crimson_ronin_v2.jpg',
    'mid_poly_model.jpg',
    'fish_model.jpg',
    '4legs.jpg',
    'skeleton.jpg',
    'unity.jpg',
    'male.jpg',
];

const breakpoints = {
    // 0px and up
    0: {
        itemsToShow: 3,
        snapAlign: 'center',
    },
    // 850px and up
    850: {
        itemsToShow: 3.95,
        snapAlign: 'center',
    },
};

const modules: any = import.meta.glob('/src/assets/images/*.jpg', { eager: true });

const getImageUrl = (name: string) => {
    const path = `/src/assets/images/${name}`;
    return modules[path].default;
}

function handleTransition(slide: number) {
    if (slide  === carousel.value.data.currentSlide.value) return;
    carousel.value?.slideTo(slide );
}
</script>

<template>
    <footer class="footer">
        <div class="footer-links">
            <h3>Let's Connect!</h3>
            <div class="icons">
                <a href="mailto:valdesalbert21@gmail.com" class="social-icon">
                    <font-awesome-icon class="fa-icon" icon="fa-solid fa-envelope" />
                </a>
                <a href="https://github.com/albert-anthony6" class="social-icon" target="_blank">
                    <font-awesome-icon class="fa-icon" icon="fa-brands fa-github" />
                </a>
                <a href="https://www.linkedin.com/in/avaldes21/" class="social-icon" target="_blank">
                    <font-awesome-icon class="fa-icon" icon="fa-brands fa-linkedin-in" />
                </a>
            </div>
        </div>
        <div class="more-about-me">
            <h2>Thank You for Visiting My Portfolio!</h2>
            <div class="footer-carousel">
                <p>I hope that I have displayed enough information about myself that interests you enough to reach out. It'd be great to see if I'd be a good fit at your work environment!</p>
                <p>In case you'd like to know a little more about me, I really enjoy spending my time learning, especially when it comes to game development and 3D art. I study web developement every day while at work, and I spend a lot of my free time on hobbies like 3D sculpting, animating, and game development. I primarily use Blender to create my game assets before importing them over to the Unity game engine where I program in C#.</p>
                <p>Web & Game development have been my main interests for a while now. If you're interested, I'd be glad to share more and learn more about each other. Thank you!</p>
                <Carousel :itemsToShow="3.95" :breakpoints="breakpoints" :wrapAround="true" :transition="500" ref="carousel">
                    <Slide v-for="(slide, idx) in slides" :key="`${idx}-${slide}`" @click="handleTransition(idx)">
                        <img class="carousel__item" :src="getImageUrl(slide)" />
                    </Slide>
                </Carousel>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.footer {
    background-color: #3A3A3A;
    padding-bottom: 30px;

    &-links {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 15px 30px;
        background-color: rgb(36, 36, 36);

        h3 {
            font-size: rem(24);
        }

        .icons {
            margin-left: 10px;

            svg {
                margin: 0 5px;
                vertical-align: middle;
                transition: all 0.2s ease;

                &:hover {
                    color: $hover-pink;
                }
            }
        }
    }

    .more-about-me {
        padding: 30px 0;
        
        h2 {
            font-size: rem(30);
            font-weight: 300;
            margin-bottom: 50px;
            padding: 0 30px;
        }

        .footer-carousel {
            p {
                width: 80%;
                margin: 0 auto;

                &:not(:first-of-type) {
                    margin-top: 25px;
                }

                &:last-of-type {
                    margin-bottom: 25px;
                }
            }
        }
    }

    .carousel__slide {
        padding: 5px;
        opacity: 0.9;
        transform: rotateY(-20deg) scale(0.9);
        cursor: pointer;

        img {
            width: 100%;
            max-height: 600px;
            height: 90%;
            object-fit: contain;
        }

        &--sliding {
            transition: 0.5s;
        }

        &--prev {
            opacity: 1;
            transform: rotateY(-10deg) scale(0.95);
        }

        &--next {
            opacity: 1;
            transform: rotateY(10deg) scale(0.95);
        }

        &--active {
            opacity: 1;
            transform: rotateY(0) scale(1.1);
        }
    }

    .carousel__viewport {
        perspective: 2000px;
    }

    .carousel__track {
        transform-style: preserve-3d;
    }

    .carousel__slide--active ~ .carousel__slide {
        transform: rotateY(20deg) scale(0.9);
    }
}
</style>