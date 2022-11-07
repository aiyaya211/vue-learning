<template>
    <div>
        <p>我是子组件</p>
        <input
            type="checkbox"
            v-bind:checked="checked"
            v-on:change="$emit('change', $event.target.checked)"
        >
        <ul>
            <li v-for="value in obj" :key="value">{{ value }}</li>
        </ul>
        <button @click="addValue">属性添加</button>
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
        return {
            obj: {
                name: 'aiyaya',
                age: 18
            }
        }
    },
    methods: {
        addValue() {
            this.$set(this.obj, 'mood', 'happy');
        }
    }
}
</script>