<template>
    <div>
        <p>我是插槽哦</p>
        <slot v-bind:user="user"></slot>
    </div>
</template>
<script>
export default {
    data() {
        return {
            user: {
                name: 'aiyaya',
                mood: 'happy'
            }
        }
    }
}
</script>