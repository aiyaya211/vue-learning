# vue-learning
vue知识点回顾
1. v-model 双向绑定 

    `v-model`其实是语法糖实现的
    ```html
        <input v-model="mycontent" >
        <!-- v-model 语法糖 -->
        <input :value="mycontent" @input="mycontent = $event.target.value"/>
        <p>content is {{ mycontent }}</p>
    ```
    自定义组件实现`v-model`其实也是用的这个原理
    
    子组件：
    ```html
    // checked属性绑定 change事件监听
    <input
            type="checkbox"
            v-bind:checked="checked"
            v-on:change="$emit('change', $event.target.checked)"
        >
    ```
    ```javascript
    model: {
        prop: 'checked',
        event: 'change'
    },
    props: {
        checked: Boolean
    },
    ```
    父组件：
    ```html
    <self-component :checked="true" />
    ```

2. 当监听类似`<input>`时，原生事件绑定到组件可能使用`native`修饰符不生效

    子组件

    ```html
    <label>
         <input :value="myvalue" @input="$emit('input', $event.target.value)"/>
    </label>
    ```
    父组件
    ```html
    <base-input v-on:focus.native="onFocus"/>
    ```
    因为子组件最外层包裹的不是`input`， 所以无法做到在子组件绑定`input`的原生事件`focus`,
    为了解决这个问题，Vue 提供了一个 `$listeners property`，它是一个对象，里面包含了作用在这个组件上的所有监听器
    
    在子组件中，修改`input`事件，使得原生的`input`事件方法能绑定到最外层的根标签上
    ```javascript
    inputListeners: function () {
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
            vm.$emit('input', event.target.value)
          }
        }
      )
    }
    ```
    子组件
    ```html
     <label>
         <input :value="myvalue" @input="inputListeners"/>
    </label>
    ```

3. `.sync`也是一种语法糖

      子组件
      ```html
        <div>
            <p>我是子组件</p>
            <p>我是父组件给我的title: {{ title }}</p>
            <button @click="changeTitle">在子组件改变title</button>
        </div>
      ```

      ```javascript
        changeTitle() {
            console.log('9999')
            this.$emit('update:title', '我是子组件传过来的')
        }
      ```
      父组件
      ```html
        <update-child :title="mycontent" v-on:update:title="mycontent = $event"/>
        // 语法糖
        <update-child :title.sync="mycontent" />
      ```
        子组件还是通过`emit`发送一个事件给父组件实现子组件改变父组件数据
      

4. `vue`响应式原理浅析
    
    模拟`vue`，用`definedproperty`尝试一下数据的响应式原理
    ```html
      <html>
      <head>测试demo</head>
      <body>
        <div id="app"></div>
      </body>
      <script type="text/javascript">
      
      // defineProperty的应用
      // 模拟vue中的data
      let data = {
        msg: ''
      };
      // 模拟vue实例
      let vm = {};
      // 对vm的msg进行数据劫持
      Object.defineProperty(vm, 'msg', {
        // 获取数据
        get: () => {
          return data.msg;
        },

        // 设置修改数据
        set: (newVal) => {
          // 	若修改后的数据和原数据一致
          if (newVal === data.msg) {
            return;
          }
          // 数据修改
          data.msg = newVal;
          // 页面渲染
          document.querySelector('#app').textContent = data.msg;
        }
      });
      vm.msg = 999;			
      </script>
    </html>
    ```
    




