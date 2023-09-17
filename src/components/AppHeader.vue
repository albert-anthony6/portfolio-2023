<script lang="ts" setup></script>

<template>
    <div class="app-header">
        <font-awesome-icon class="fa-icon" icon="fa-solid fa-code" />
        <ul>
            <li>Home</li>
            <li>Projects</li>
            <li>About</li>
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
    padding: 25px 50px;
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
