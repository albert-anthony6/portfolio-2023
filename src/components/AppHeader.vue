<script lang="ts" setup></script>

<template>
    <div class="app-header">
        <div class="header-content">
            <font-awesome-icon class="fa-icon" icon="fa-solid fa-code" />
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#why-me">About</a></li>
                <li>Let's Connect</li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.app-header {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    background-color: rgba($darkest-neutral, 0.5);
    z-index: 998;
    backdrop-filter: blur(30px);
    
    @include bp-xxl-desktop-large {
        padding: 25px 40px;
    }

    .header-content,
    ul {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .header-content {
        width: 90%;
        max-width: 1400px;
        padding: 25px 0;
        margin: 0 auto;

        @include bp-custom-min(1360) {
            width: 80%;
        }

        @include bp-xxl-desktop-large {
            width: 100%;
            padding: unset;
        }

        ul {
            li {
                margin: 0 15px;
    
                &:last-child {
                    margin-right: 0;
                }
            }
        }
    
        .fa-icon {
            animation: sway 2s;
            animation: 2s ease-in-out 0s infinite alternate sway;
        }
    }

}
</style>
