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
        <update-child :title="mycontent" v-on:update:title="mycontent = $event"/>
        <update-child :title.sync="mycontent" />
    </div>
</template>
<script>
import selfComponent from '../mycomponents/selfComponent.vue';
import customInput from '../mycomponents/customInput';
import baseInput from '../mycomponents/baseInput';
import UpdateChild from '../mycomponents/updateChild.vue';

export default {
    components: {
        selfComponent,
        customInput,
        baseInput,
        UpdateChild
        
    },
    data() {
        return {
            mycontent: '',
            myword: '',
        }
    },
    methods: {
        onFocus() {
            console.log('onFocus')
        }
    }
}
</script>