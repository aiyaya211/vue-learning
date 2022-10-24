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