<script lang="ts" setup>
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
</script>

<template>
    <div class="work">
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
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
        margin-top: 30px;

        .project-details {
            position: relative;
            width: 25%;
            max-height: 270px;
            max-height: 14vw;

            .content {
                position: absolute;
                width: 100%;
                height: 100%;
                opacity: 0;
                background-image: radial-gradient(circle, #00000078 0%, #000 100%);
                transition: all 0.5s ease;
                padding: 25px;

                &:hover {
                    opacity: 1;
                }

                .project-title {
                    font-size: rem(20);
                }

                p {
                    width: 80%;
                    margin: 15px auto 20px;
                }
            }

            img {
                width: 100%;
                height: 100%;
            }
        }

    }
}
</style>