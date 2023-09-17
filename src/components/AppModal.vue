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
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(8px);
    z-index: 999;

    &-content {
        width: 80%;
        height: 80vh;
        margin: 100px auto 0;

        img {
            width: 100%;
            height: 100%;
            border-radius: 8px;
        }
    }
}
</style>