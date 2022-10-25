<template>
    <div>
        <p>我是子组件</p>
        <p>我是父组件给我的title: {{ title }}</p>
        <button @click="changeTitle">在子组件改变title</button>
    </div>
</template>
<script>
export default {
    props: ['title'],
    methods: {
        changeTitle() {
            console.log('9999')
            this.$emit('update:title', '我是子组件传过来的')
        }
    }
}
</script>