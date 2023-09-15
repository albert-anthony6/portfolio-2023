<script></script>

<template>
    <section class="projects">
        <h2>Portfolio Showcase</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, incidunt? testRepellat, incidunt? test</p>
        <div class="showcase">
            <div class="card">
                <div class="card__side card__side--front">
                    Test
                </div>
                <div class="card__side card__side--back">
                    Test2
                </div>
            </div>
            <div class="card">
                <div class="card__side card__side--front">
                    Test
                </div>
                <div class="card__side card__side--back">
                    Test2
                </div>
            </div>
            <div class="card">
                <div class="card__side card__side--front">
                    Test
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
    h2 {
        font-weight: 300;
    }
    
    p {
        max-width: 500px;
        margin: 0 auto;
        font-weight: 300;
    }

    .showcase {
        width: 80%;
        display: flex;
        align-items: stretch;
        justify-content: space-between;
        margin: 50px auto 0;

        .card {
            perspective: 5000px;
            position: relative;
            width: 30%;
            min-height: 500px;
            max-width: 400px;
            
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
                    background-image: linear-gradient(to right bottom, blue, green);
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