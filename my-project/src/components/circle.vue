<template>
    <div>生命周期组件</div>
</template>
<script>

export default {
    beforeCreate: function () {
        console.group('------beforeCreate创建前状态------');
        console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
        console.log("%c%s", "color:red", "data   : " + this.$data); //undefined 
        console.log("%c%s", "color:red", "message: " + this.message)
    },
    created: function () {
        console.group('------created创建完毕状态------');
        console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
        console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化 
        console.dir(this.$data)
        console.log("%c%s", "color:red", "message: " + this.message); //已被初始化
    },
    beforeMount: function () {
        console.group('------beforeMount挂载前状态------');
        console.log("%c%s", "color:red", "el     : " + (this.$el)); //undefined
        console.dir(this.$el)
        console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化  
        console.log("%c%s", "color:red", "message: " + this.message); //已被初始化  
    },
    mounted: function () {
        console.group('------mounted 挂载结束状态------');
        console.log("%c%s", "color:red", "el     : " + this.$el); //已被初始化
        console.dir(this.$el)
        console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化
        console.dir(this.$data)
        console.log("%c%s", "color:red", "message: " + this.message); //已被初始化 
    },
    beforeUpdate: function () {
        console.group('beforeUpdate 更新前状态===============》');
        console.log("%c%s", "color:red", "el     : " + this.$el);
        console.dir(this.$el)
        console.log("%c%s", "color:red", "data   : " + this.$data);
        console.dir(this.$data)
        console.log("%c%s", "color:red", "message: " + this.message);
    },
    updated: function () {
        console.group('updated 更新完成状态===============》');
        console.log("%c%s", "color:red", "el     : " + this.$el);
        console.dir(this.$el)
        console.log("%c%s", "color:red", "data   : " + this.$data);
        console.dir(this.$data)
        console.log("%c%s", "color:red", "message: " + this.message);
    },
    beforeDestroy: function () {
        console.group('beforeDestroy 销毁前状态===============》');
        console.log("%c%s", "color:red", "el     : " + this.$el);
         console.dir(this.$el)
        console.log("%c%s", "color:red", "data   : " + this.$data);
        console.dir(this.$data)
        console.log("%c%s", "color:red", "message: " + this.message);
    },
    destroyed: function () {
        console.group('destroyed 销毁完成状态===============》');
        console.log("%c%s", "color:red", "el     : " + this.$el);
         console.dir(this.$el)
        console.log("%c%s", "color:red", "data   : " + this.$data);
        console.dir(this.$data)
        console.log("%c%s", "color:red", "message: " + this.message)
    },
    data() {
        return {
            message: 'hello aiyaya'
        }
    }
}
</script>