<template>
    <div>
        <p>我是子组件</p>
        <input
            type="checkbox"
            v-bind:checked="checked"
            v-on:change="$emit('change', $event.target.checked)"
        >
    </div>
</template>
<script>
export default {
    // 相当于把model原来语法糖value和event修改
    model: {
        prop: 'checked',
        event: 'change'
    },
    props: {
        checked: Boolean
    },
    data() {
        return {}
    }
}
</script>