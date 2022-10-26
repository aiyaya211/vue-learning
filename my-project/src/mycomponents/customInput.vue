<template>
    <div>
        <input
            v-bind:value="searchContext"
            v-on:input="$emit('input', $event.target.value)"
        >
        <div ref="myPage">{{ content }}</div>
        <button @click="get">修改数据</button>
    </div>
</template>
<script>
export default {
    props: ['searchContext'],
    data() {
       return {
           content: 'aiyaya'
       }
    },
    created() {
        console.log('开始执行created钩子函数');
        // 获取data数据
        console.log('获取created属性:' + this.content);
        // 获取页面元素
        console.log('获取created页面元素：' + this.$refs['myPage']);
        this.$nextTick(() => {
            console.log('creted 中的nexttick')
        })

    },
    mounted() {
        console.log('开始执行mounted钩子函数');
        // 获取data数据
        console.log('获取mounted属性:' + this.content);
        // 获取页面元素
        console.log('获取mounted页面元素：' + this.$refs['myPage']);
        this.$nextTick(() => {
            console.log('mounted 中的nexttick')
        }) 
    },
    methods: {
        // 更新数据
        get() {
            this.content = "aiyaya 数据改变了";
            console.log(this.$refs['myPage'].innerText);
            this.$nextTick(() => {
                console.log('nexttick回调：' + this.$refs['myPage'].innerText);
            })

        }
    }
}
</script>