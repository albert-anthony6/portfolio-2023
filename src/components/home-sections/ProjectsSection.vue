<script setup lang="ts">
import { ref, onMounted } from 'vue';
import IconReactLogo from '@/assets/icons/icon_react_logo.svg';

const projects = ref();

onMounted(() => {
    projects.value.style.minHeight = window.innerHeight + 'px';
})
</script>

<template>
    <section class="projects" ref="projects">
        <h2>Portfolio Showcase</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, incidunt? testRepellat, incidunt? test</p>
        <div class="showcase">
            <div class="card vueflicks-card">
                <div class="card__side card__side--front">
                    <video loop autoPlay muted playsInline>
                        <source src="@/assets/videos/vueflicks_video.mp4" type="video/mp4">
                    </video>
                </div>
                <div class="card__side card__side--back">
                    <img class="vue-logo" src="@/assets/images/vue_logo.png" alt="Vue Logo.">
                    <h2>Vueflicks</h2>
                    <p>This movie app made with Vue3+Vite is meant to show that I can work with data coming from an API. The focus was on working with data rather than on the design. It utilizes netlify functions to hide the API key without having my own personal database!</p>
                    <h3>Tools Used</h3>
                    <ul class="list">
                        <li class="tag">Vue3</li>
                        <li class="tag">HTML5</li>
                        <li class="tag">SCSS</li>
                        <li class="tag">Typescript</li>
                        <li class="tag">Vue Router</li>
                        <li class="tag">Pinia</li>
                        <li class="tag">TMDB API</li>
                    </ul>
                    <div class="view-work">
                        <a href="https://github.com/albert-anthony6/Vue-Movie-2023" target="_blank" class="view-code">
                            <font-awesome-icon class="fa-icon" icon="fa-solid fa-code" />
                            View Code
                        </a>
                        <a href="https://vueflicks.netlify.app/" target="_blank" class="view-project">
                            <img class="vue-logo__small" src="@/assets/images/vue_logo.png" alt="Vue Logo.">
                            View Project
                        </a>
                    </div>
                </div>
            </div>
            <div class="card zoo-card">
                <div class="card__side card__side--front">
                    <video loop autoPlay muted playsInline>
                        <source src="@/assets/videos/zoo_video.mp4" type="video/mp4">
                    </video>
                </div>
                <div class="card__side card__side--back">
                    <IconReactLogo class="react-logo" />
                    <h2>React Adventures</h2>
                    <p>This zoo project made with React.js+Vite is a clone of the Memphis Zoo website, and is meant to show my UI building skills. It focuses on matching the design rather than functionality of the buttons/inputs. I always liked the look of this site so I decided to recreate it without any official design comp!</p>
                    <h3>Tools Used</h3>
                    <ul class="list">
                        <li class="tag">React v18</li>
                        <li class="tag">HTML5</li>
                        <li class="tag">SCSS</li>
                        <li class="tag">Typescript</li>
                    </ul>
                    <div class="view-work">
                        <a href="https://github.com/albert-anthony6/react-animals" target="blank" class="view-code">
                            <font-awesome-icon class="fa-icon" icon="fa-solid fa-code" />
                            View Code
                        </a>
                        <a href="https://react-adventures.netlify.app/" target="_blank" class="view-project">
                            <IconReactLogo class="react-logo__small" />
                            View Project
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.projects {
    padding-top: 120px;

    h2 {
        font-weight: 300;
    }
    
    p {
        max-width: 500px;
        margin: 0 auto;
        font-weight: 300;
    }

    .showcase {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        margin: 50px auto;
        
        @include bp-lg-laptop {
            align-items: stretch;
            flex-direction: row;
        }

        .card {
            position: relative;
            width: 270px;
            height: 446px;
            perspective: 5000px;
            transition: margin 0.3s ease;
            
            @include bp-xs-phone {
                width: 300px;
                height: 476px;
            }

            @include bp-sm-phone-landscape {
                width: 400px;
                height: 576px;
            }

            &:first-child {
                margin-bottom: 30px;

                &:hover {
                    margin-bottom: 280px;

                    @include bp-xs-phone {
                        margin-bottom: 215px;
                    }

                    @include bp-sm-phone-landscape {
                        margin-bottom: 80px;
                    }
                }
                
                @include bp-sm-phone-landscape {
                    margin-bottom: 50px;
                }
                 
                @include bp-lg-laptop {
                    margin: 0 30px 0 0;

                    &:hover {
                        margin-bottom: 0;
                    }
                }

                .card__side--front {
                    background-image: url("/src/assets/images/vueflicks_background.png");
                }

                .card__side--back {
                    background-image: linear-gradient(to right bottom, rgb(45, 185, 120), rgb(9, 94, 42));
                }
            }

            &:last-child {
                &:hover {
                    margin-bottom: 120px;

                    @include bp-xs-phone {
                        margin-bottom: 100px;
                    }
                    
                    @include bp-sm-phone-landscape {
                        margin-bottom: 0;
                    }
                }
                
                @include bp-lg-laptop {
                    margin: 0 0 0 30px;
                }

                .card__side--front {
                    background-image: url("/src/assets/images/zoo_background.png");
                    background-position: 60% 50%;
                }

                .card__side--back {
                    background-image: linear-gradient(to right bottom, rgb(35, 111, 121), rgb(12, 83, 116));
                }
            }
            
            &__side {
                position: absolute;
                width: 100%;
                top: 0;
                left: 0;
                transition: all .8s ease;
                backface-visibility: hidden;
                border-radius: 8px;

                &--front {
                    background-color: #c2c2c2;
                    height: 100%;
                    background-size: cover;
                    background-position: top;
                    background-repeat: no-repeat;

                    video {
                        width: 100%;
                        height: 100%;
                    }

                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: contain;
                        border-radius: 8px;
                    }
                }
                
                &--back {
                    padding: 15px 0;
                    background-color: #c2c2c2;
                    transform: rotateY(180deg);

                    p {
                        padding: 0 15px;
                    }

                    h2 {
                        line-height: 1.1;
                    }

                    h3 {
                        margin-top: 10px;
                    }

                    .vue-logo,
                    .react-logo {
                        width: 35%;
                    }

                    .vue-logo,
                    .vue-logo__small {
                        animation: smoothBounce 2s infinite linear;
                        filter: drop-shadow(0 0.5rem 0.5rem hsl(101, 96%, 20%));
                    }

                    .react-logo,
                    .react-logo__small {
                        animation: rotate360 15s infinite linear;
                        filter: drop-shadow(0 0 0.75rem #04ffff);
                    }

                    .list {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-wrap: wrap;

                        .tag {
                            font-size: rem(14);
                            padding: 5px 15px;
                            border: 1px solid $lightest-neutral;
                            border-radius: 50px;
                            margin: 10px 5px 0;
                            transition: all 0.2s ease;
    
                            &:hover {
                                background-color: $lightest-neutral;
                                color: $darkest-neutral;
                            }
                        }
                    }

                    .view-work {
                        display: flex;
                        width: fit-content;
                        align-items: center;
                        justify-content: center;
                        flex-direction: column;
                        margin: 10px auto 0;
                        
                        .view-code,
                        .view-project {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            margin: 5px 0;
                            transition: transform 0.3s ease;

                            &:hover {
                                transform: translateY(-2px) scale(1.1);
                            }
                            
                            .fa-icon {
                                width: 30px;
                                margin-right: 8px;
                                margin-left: -2px;
                                animation: 2s ease-in-out 0s infinite alternate sway;
                            }
                            
                            p {
                                margin: unset;
                            }
                        }
    
                        .vue-logo__small,
                        .react-logo__small {
                            width: 25px;
                            margin-right: 10px;
                        }
    
                        .vue-logo__small {
                            animation: smoothBounceSmall 2s infinite linear;
                        }
                    }
                }
            }

            &:hover .card__side--front {
                transform: rotateY(180deg);
            }
            
            &:hover .card__side--back {
                transform: rotateY(0);
            }
        }
    }
}
</style>