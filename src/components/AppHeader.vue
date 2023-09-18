<script lang="ts" setup></script>

<template>
    <div class="app-header">
        <font-awesome-icon class="fa-icon" icon="fa-solid fa-code" />
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#why-me">About</a></li>
            <li>Let's Connect</li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.app-header,
ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.app-header {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    background-color: rgba($darkest-neutral, 0.5);
    padding: 25px 40px;
    z-index: 998;
    backdrop-filter: blur(30px);

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
</style>
