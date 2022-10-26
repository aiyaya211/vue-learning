<template>
    <div>
        <div>过渡效果</div>
        <button @click="show = !show">
            点击展开
        </button>
        <transition name="fade">
            <p v-if="show">hello aiyaya</p>
        </transition>
    </div>
</template>
<script>
export default {
    data() {
        return {
            show: false,
        }
    }
}
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>