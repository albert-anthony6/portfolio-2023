<script lang="ts" setup>
const emit = defineEmits(['toggle-modal'])

interface Props {
    imgPath: string;
}

defineProps<Props>();
</script>

<template>
    <div class="modal" @click="emit('toggle-modal')">
        <div class="modal-content">
            <img :src="imgPath" @click.stop="" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.modal {
    position: fixed;
    width: 100vw;
    height: 100vh;
    height: 100svh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(8px);
    z-index: 999;

    &-content {
        width: 80%;
        height: 80vh;
        height: 80svh;
        margin: 100px auto 0;

        img {
            position: absolute;
            width: 80%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            max-height: 90%;
            border-radius: 8px;
        }
    }
}
</style>