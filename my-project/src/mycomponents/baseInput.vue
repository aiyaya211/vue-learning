<template>
    <div>
        <label>
            <input v-bind:value="myvalue" v-on="inputListeners" />
        </label>
    </div>
</template>
<script>
export default {
   data() {
       return {
           myvalue: ''
       }
   },
   computed: {
    inputListeners: function () {
     console.log('inputListeners')
      let vm = this
      // `Object.assign` 将所有的对象合并为一个新对象
      return Object.assign({},
        // 我们从父级添加所有的监听器
        this.$listeners,
        // 然后我们添加自定义监听器，
        // 或覆写一些监听器的行为
        {
          // 这里确保组件配合 `v-model` 的工作
          input: function (event) {
            console.log(999)
            vm.$emit('input', event.target.value)
          }
        }
      )
    }
   }
}
</script>