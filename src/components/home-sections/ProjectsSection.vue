<script setup lang="ts">
import { ref, onMounted } from 'vue';

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
            <div class="card">
                <div class="card__side card__side--front">
                    <img src="@/assets/images/work/gm_powertrain_dashboard.jpg" alt="">
                </div>
                <div class="card__side card__side--back">
                    Test2
                </div>
            </div>
            <div class="card">
                <div class="card__side card__side--front">
                    <img src="@/assets/images/work/gm_powertrain_dashboard.jpg" alt="">
                </div>
                <div class="card__side card__side--back">
                    Test2
                </div>
            </div>
            <div class="card">
                <div class="card__side card__side--front">
                    <img src="@/assets/images/work/gm_powertrain_dashboard.jpg" alt="">
                </div>
                <div class="card__side card__side--back">
                    Test2
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
        justify-content: space-between;
        margin: 50px auto;
        
        @include bp-lg-laptop {
            align-items: stretch;
            flex-direction: row;
        }

        .card {
            perspective: 5000px;
            position: relative;
            width: 80%;
            min-height: 40vw;
            
            &:not(:last-child) {
                margin-bottom: 15px; 
            }
            
            @include bp-md-tablet {
                width: 50%;
            }
            
            @include bp-lg-laptop {
                width: 32%;
                min-height: 30vw;
                max-width: 400px;
                margin-bottom: 0;
            }
            
            &__side {
                position: absolute;
                width: 100%;
                min-height: inherit;
                transition: all .8s ease;
                top: 0;
                left: 0;
                backface-visibility: hidden;
                border-radius: 8px;

                &--front {
                    background-color: #c2c2c2;
                    height: 100%;

                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        border-radius: 8px;
                    }
                }
                
                &--back {
                    background-image: linear-gradient(to right bottom, rgb(245, 192, 252), rgb(63, 3, 78));
                    transform: rotateY(180deg);
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