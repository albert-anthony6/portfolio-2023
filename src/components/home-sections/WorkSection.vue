<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { Carousel, Pagination, Slide, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css'
import IconAudiLogo from '@/assets/icons/icon_audi_logo.svg';
import IconCadillacLogo from '@/assets/icons/icon_cadillac_logo.svg';
import IconVolkswagenLogo from '@/assets/icons/icon_volkswagen_logo.svg';
import IconBMWLogo from '@/assets/icons/icon_bmw_logo.svg';
import IconPorscheLogo from '@/assets/icons/icon_porsche_logo.svg';
import IconUSPSLogo from '@/assets/icons/icon_usps_logo.svg';
import projects from '@/utils/work-projects';

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

onMounted(() => {
    work.value.style.minHeight = window.innerHeight + 'px';
})
</script>

<template>
    <div class="work" ref="work">
        <h2>Professional Experience</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident similique veritatis modi reiciendis est laudantium corrupti ut necessitatibus tempora praesentium esse, natus nisi atque, blanditiis impedit quam exercitationem commodi. Natus.
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident similique veritatis modi reiciendis est laudantium corrupti ut necessitatibus tempora praesentium esse, natus nisi atque, blanditiis impedit quam exercitationem commodi. Natus.
        </p>
        <div class="professional-projects">
            <div v-for="(project, idx) in projects" :key="`${project.name}-${idx}`" class="project-details">
                <div class="content">
                    <div class="project-title">{{ project.title }}</div>
                    <p>{{ project.description }}</p>
                    <button @click="emit('toggle-modal', `src/assets/images/work/${project.name}`)" type="button">View Image</button>
                </div>
                <img :src="getImageUrl(project.name)" />
            </div>
        </div>
        <div class="carousels">
            <Carousel id="gallery" :items-to-show="1" :autoplay="5000" :wrap-around="true" v-model="currentSlide">
                <Slide v-for="slide in projects.length" :key="slide">
                    <!-- <div class="carousel__item">{{ slide }}</div> -->
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
                    <!-- <div class="carousel__item" @click="slideTo(slide - 1)">{{ slide }}</div> -->
                    <img :src="getImageUrl(projects[slide - 1].name)" class="sub-carousel__item" @click="slideTo(slide - 1)" />
                </Slide>
            </Carousel>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.work {
    margin-top: 50px;

    h2 {
        font-weight: 300;
        margin-bottom: 20px;
    }

    p {
        width: 45%;
        margin: 0 auto;
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
            font-size: rem(25);
            text-transform: uppercase;
        }

        ul {
            display: flex;
            width: 60%;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            margin: 0 auto;

            li {
                font-size: rem(25);
                margin-left: 30px;

                &:first-child {
                    margin-left: 0;

                    svg {
                        width: 3.2em;
                        margin-top: -3px;
                    }
                }
            }
        }
    }

    .professional-projects {
        display: none;
/*         
        @include bp-lg-laptop {
            display: flex;
            flex-wrap: wrap;
            align-items: stretch;
            margin-top: 30px;
        } */

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
        /* @include bp-lg-laptop {
            display: none;
        } */
        margin-top: 30px;

        #gallery {
            width: 60%;
            margin: 0 auto;
        }
    
        .main-carousel__item,
        .sub-carousel__item {
            width: 100%;
            max-height: 30vw;
        }
    
        .sub-carousel__item {
            max-height: 14vw;
            cursor: pointer;
        }

        .project-title {
            font-size: rem(40);
            margin-top: 15px;
            font-weight: 300;
        }
        
        p {
            width: 80%;
            margin-bottom: 15px;
        }
    }

}
</style>