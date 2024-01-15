<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue';
import { useMq } from "vue3-mq";
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import IconAudiLogo from '@/assets/icons/icon_audi_logo.svg';
import IconCadillacLogo from '@/assets/icons/icon_cadillac_logo.svg';
import IconVolkswagenLogo from '@/assets/icons/icon_volkswagen_logo.svg';
import IconBMWLogo from '@/assets/icons/icon_bmw_logo.svg';
import IconPorscheLogo from '@/assets/icons/icon_porsche_logo.svg';
import IconUSPSLogo from '@/assets/icons/icon_usps_logo.svg';
import projects from '@/utils/work-projects';

const mq = useMq();

const emit = defineEmits(['toggle-modal'])

const modules: any = import.meta.glob('../../assets/images/work/*.jpg', { eager: true });

const getImageUrl = (name: string) => {
    const path = `../../assets/images/work/${name}`;
    return modules[path].default;
}

const currentSlide = ref(0);

function slideTo(val: number) {
    currentSlide.value = val
}

const work = ref();
const showCarousel = ref(false);

onMounted(() => {
    work.value.style.minHeight = window.innerHeight + 'px';
})

// Only show carousel on mobile
watch(
    () => [mq.mdMinus],
    () => {
        if (mq.mdMinus && !showCarousel.value) {
            showCarousel.value = true;
        }
    },
)
</script>

<template>
    <section class="work" ref="work">
        <h2>Professional Experience</h2>
        <p>
            Below are just some of the many projects I was assigned to during my time at 24G. I learned a lot from these projects and enjoyed getting the chance to build something from scratch on some of these.
        </p>
        <div class="brands">
            <div class="brands-title">Cool Brands I Got to Work With</div>
            <ul>
                <li><IconAudiLogo /> Audi</li>
                <li><IconCadillacLogo /> Cadillac</li>
                <li><IconVolkswagenLogo /> Volkswagen</li>
                <li><IconBMWLogo /> BMW</li>
                <li><IconPorscheLogo /> Porsche</li>
                <li><IconUSPSLogo /> USPS</li>
                <li>General Motors</li>
                <li>Electrify America</li>
                <li>Ghallagher-Kaiser</li>
            </ul>
        </div>
        <p>
            Below, you’ll see the flagship product, LXP (Learning Experience Platform), showcased alongside earlier versions VXP & NXP, and projects I built from scratch. I would clone, reskin, and customize the base product to make LXP spinoffs. We made several spinoff LXPs for clients and customized each one to fit their needs and branding. I updated each of them to the latest base version regularly, and I even got to implement some major features into the base product!
        </p>
        <div class="slider" @click="currentSlide = 0">
            <input v-model="showCarousel" type="checkbox" name="slider" class="slider-checkbox" id="sliderSwitch">
            <label class="slider-label" for="sliderSwitch">
                <span class="slider-inner"></span>
                <span class="slider-circle"></span>
            </label>
        </div>
        <div v-if="showCarousel || mq.mdMinus" class="carousels">
            <Carousel id="gallery" :items-to-show="1" :autoplay="5000" :wrap-around="true" v-model="currentSlide">
                <Slide v-for="slide in projects.length" :key="slide">
                    <img :src="getImageUrl(projects[slide - 1].name)" class="main-carousel__item" />
                </Slide>
            </Carousel>
            <div class="project-title">{{ projects[currentSlide].title }}</div>
            <p>{{ projects[currentSlide].description }}</p>
            <Carousel
                id="thumbnails"
                :items-to-show="4"
                :wrap-around="true"
                v-model="currentSlide"
                ref="carousel"
            >
                <Slide v-for="slide in projects.length" :key="slide">
                    <img :src="getImageUrl(projects[slide - 1].name)" class="sub-carousel__item" @click="slideTo(slide - 1)" />
                </Slide>
            </Carousel>
        </div>
        <div v-else class="professional-projects">
            <div v-for="(project, idx) in projects" :key="`${project.name}-${idx}`" class="project-details">
                <div class="content">
                    <div class="project-title">{{ project.title }}</div>
                    <p>{{ project.description }}</p>
                    <button @click="emit('toggle-modal', `src/assets/images/work/${project.name}`)" type="button">View Image</button>
                </div>
                <img :src="getImageUrl(project.name)" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.work {
    padding-top: 120px;

    h2 {
        font-weight: 300;
        margin-bottom: 20px;
        padding: 0 25px;
    }

    p {
        width: 80%;
        margin: 0 auto;

        &:nth-child(4) {
            margin-bottom: 30px;

            @include bp-lg-laptop {
                margin-bottom: 0;
            }
        }

        @include bp-lg-laptop {
            width: 45%;
        }
    }

    svg {
        width: 2.4em;
        vertical-align: middle;
    }

    .brands {
        background-color: $lightest-neutral;
        color: $darkest-neutral;
        margin: 30px 0;
        padding: 30px 30px 20px;

        &-title {
            width: 100%;
            font-size: rem(30);
            margin: 0 auto;
            text-transform: uppercase;
            
            @include bp-custom-min(425) {
                font-size: rem(28);
            }
            
            @include bp-sm-phone-landscape {
                width: 80%;
                font-size: rem(25);
                width: auto;
                margin: unset;
            }
        }

        ul {
            display: flex;
            width: 100%;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            margin: 0 auto;
            
            @include bp-custom-min(810) {
                width: 730px;
            }
            
            @include bp-xl-desktop {
                width: 1000px;
            }

            li {
                width: 100%;
                font-size: rem(22.5);
                margin: 0 15px;
                
                @include bp-custom-min(350) {
                    font-size: rem(25);
                }

                @include bp-sm-phone-landscape {
                    width: auto;
                }

                &:first-child {
                    svg {
                        width: 3.5em;
                        margin-top: -3px;

                        @include bp-custom-min(350) {
                            width: 3.2em;
                        }
                    }
                }
            }
        }
    }

    .professional-projects {
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
        margin-top: 30px;

        .project-details {
            position: relative;
            width: 25%;
            max-height: 14vw;

            .content {
                position: absolute;
                font-size: rem(8);
                width: 100%;
                height: 100%;
                opacity: 0;
                background-image: radial-gradient(circle, #00000078 0%, #000 100%);
                transition: all 0.5s ease;
                padding: 15px 10px;
                
                @include bp-xl-desktop {
                    font-size: rem(9);
                }
                
                @include bp-custom-min(1360) {
                    padding: 25px;
                }
                
                @include bp-xxl-desktop-large {
                    font-size: rem(10);
                }

                &:hover {
                    opacity: 1;
                }

                .project-title {
                    font-size: em(20, 10);
                    line-height: 1;
                }

                p {
                    width: 100%;
                    font-size: em(16, 10);
                    margin: 5px auto;
                    line-height: 1.3;
                    
                    @include bp-custom-min(1050) {
                        margin: 10px auto;
                    }
                    
                    @include bp-custom-min(1360) {
                        width: 80%;
                        margin: 15px auto 20px;
                    }
                }

                button {
                    padding: 5px 15px;

                    @include bp-custom-min(1400) {
                        padding: 10px 20px;
                    }
                }
            }

            img {
                width: 100%;
                height: 100%;
            }
        }

    }

    .carousels {
        #gallery {
            width: 100%;
            
            @include bp-md-tablet {
                width: 80%;
                margin: 0 auto;
            }

            img {
                width: 100%;
                max-height: 55vw;

                @include bp-md-tablet {
                    max-height: 40vw;
                }
            }
        }
    
        .main-carousel__item,
        .sub-carousel__item {
            width: 100%;
        }
    
        .sub-carousel__item {
            max-height: 14vw;
            cursor: pointer;
        }

        .project-title {
            font-size: rem(40);
            margin: 15px 0 10px;
            font-weight: 300;
            line-height: 1.2;
        }
        
        p {
            width: 80%;
            margin-bottom: 15px;
        }
    }

    // Project View Toggle Switch Styling
    .slider {
        display: none;
        border: none;
        position: relative;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        width: 125px;
        margin: 30px auto 15px;

        @include bp-lg-laptop {
            display: block;
        }

        &-checkbox {
            display: none;
        }

        &-label {
            border: 2px solid $light-grey;
            border-radius: 20px;
            cursor: pointer;
            display: block;
            overflow: hidden;
        }

        &-inner {
            display: block;
            margin-left: -100%;
            transition: margin 0.3s ease-in 0s;
            width: 200%;

            &::before,
            &::after {
                box-sizing: border-box;
                display: block;
                float: left;
                font-family: sans-serif;
                font-size: 14px;
                font-weight: bold;
                height: 30px;
                line-height: 30px;
                padding: 0;
                width: 50%;
            }

            &::before {
                content: "CAROUSEL";
                background-image: linear-gradient(to right bottom, rgb(231, 100, 248), rgb(43, 3, 153));
                color: $lightest-neutral;
                padding-right: 1.50em;
            }

            &::after {
                content: "OVERVIEW";
                background-image: linear-gradient(to right bottom, #eee, #eee);
                color: $light-grey;
                padding-right: .75em;
                text-align: right;
            }
        }

        &-circle {
            background-color: $light-grey;
            border: 2px solid $light-grey;
            border-radius: 50%;
            bottom: 0;
            display: block;
            margin: 7px 5px 0;
            position: absolute;
            right: 91px;
            top: 0;
            transition: all 0.3s ease-in 0s; 
            width: 20px;
            height: 20px;
            animation: wobble 2s ease infinite;
        }
    }

    .slider-checkbox:checked + .slider-label {
        border-color: rgb(70, 5, 78);
    }
    
    .slider-checkbox:checked + .slider-label .slider-inner {
        margin-left: 0;
    }

    .slider-checkbox:checked + .slider-label .slider-circle {
        background-color: $light-neutral;
        border-color: $light-neutral;
        right: 3px;
    }
}
</style>