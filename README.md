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


