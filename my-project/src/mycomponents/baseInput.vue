<template>
    <div>
        <label>
            <input v-bind:value="myvalue" v-on="inputListeners" v-focus />
        </label>
    </div>
</template>
<script>
export default {
  // inject 
   inject: ['test'],
   data() {
       return {
           myvalue: ''
       }
   },
   // 自定义指令
   // 类似于内置的v-show v-if v-model
   directives: {
    focus: {
      // 指令的定义
      inserted: function (el) {
        el.focus()
      }
    }
   },
   computed: {
    inputListeners: function () {
     console.log('inputListeners')
      let arr = [1, 6, 8, 56];
      console.log(arr)
      console.log(arr[Symbol.iterator]())
      let it = arr[Symbol.iterator]();
      console.log(it.next())
      console.log(it.next())
      console.log(it.next())
      console.log(it.next())
      console.log(it.next())
      let mySet = new Set([1, 7, 8, 9]);
      console.log(mySet)
      let vm = this;
      // `Object.assign` 将所有的对象合并为一个新对象
      return Object.assign({},
        // 我们从父级添加所有的监听器
        this.$listeners,
        // 然后我们添加自定义监听器，
        // 或覆写一些监听器的行为
        {
          // 这里确保组件配合 `v-model` 的工作
          input: function (event) {
            vm.test();
            vm.$emit('input', event.target.value)
          }
        }
      )
    }
   }
}
</script>