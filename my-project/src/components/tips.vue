<template>
    <div>
        <p>v-model双向绑定</p>
        <input v-model="mycontent" placeholder="please write">
        <!-- v-model 语法糖 -->
        <input :value="mycontent" @input="mycontent = $event.target.value"/>
        <p>content is {{ mycontent }}</p>
        <self-component :checked="true" />
        <p>{{ myword }}</p>
        <custom-input v-model="myword" />
        <base-input v-on:focus="onFocus"/>
        <!-- sync属性修饰符语法糖 -->
        <update-child :title="mycontent" v-on:update:title="mycontent = $event"/>
        <update-child :title.sync="mycontent" />
        <!-- 插槽 -->
        <slot-component>
            <span>插槽起作用了</span>
            <template  v-slot:default="slotProps">
                <span >{{ slotProps.user.mood }}</span>
            </template>
        </slot-component>
        <!-- 动态组件 -->
        <div>
            <button @click="changeComponent('A')">组件A</button>
            <button @click="changeComponent('B')">组件B</button>
            <button @click="changeComponent('C')">组件C</button>
        </div>
        <keep-alive>
            <component :is="currentComponent"></component>
        </keep-alive>
        <!-- 异步组件 -->
        <async-component></async-component>
        <!-- 过渡效果组件 -->
        <transition-component></transition-component>
        <!-- jsx组件 -->
        <my-com :level="3">
            我是一个jsx组件
        </my-com>
        <!-- 虚拟滚动列表 -->
        <virtual-list></virtual-list>
        <!-- attrs传值 -->
        <child-dom
            :foo="foo"
            :coo="foo"
            v-on:upRocket="reciveRocket"
        ></child-dom>
        
    </div>
</template>
<script>
import selfComponent from '../mycomponents/selfComponent.vue';
import customInput from '../mycomponents/customInput';
import baseInput from '../mycomponents/baseInput';
import UpdateChild from '../mycomponents/updateChild.vue';
import SlotComponent from '../mycomponents/slotComponent.vue';
import AComponent from '../mycomponents/activeComponents/aComponent';
import BComponent from '../mycomponents/activeComponents/bComponent';
import CComponent from '../mycomponents/activeComponents/cComponent';
import TransitionComponent from '../mycomponents/transitionComponent.vue';
import myCom from '../mycomponents/myCom';
import VirtualList from '../mycomponents/virtualList.vue';
import ChildDom from '../mycomponents/childDom.vue';


export default {
    components: {
        selfComponent,
        customInput,
        baseInput,
        UpdateChild,
        SlotComponent,
        AComponent,
        BComponent,
        CComponent,
        TransitionComponent,
        myCom,
        VirtualList,
        ChildDom
    },
    data() {
        return {
            mycontent: '',
            myword: '',
            currentComponent: 'AComponent', // 当前组件
            foo:"Hello, world",
            coo:"Hello,aiyaya"
        }
    },
    provide: function() {
        return {
            test: this.test
        }
    },
    methods: {
        onFocus() {
            console.log('onFocus')
        },
        changeComponent(type) {
            switch(type) {
                case 'C':
                    this.currentComponent = CComponent
                    break;
                case 'B':
                    this.currentComponent = BComponent
                    break;
                default:
                    this.currentComponent = AComponent
                } 
        },
        test() {
            console.log('父组件provide事件');
        },
        reciveRocket(){
            console.log("reciveRocket success")
        }
    }
}
</script>