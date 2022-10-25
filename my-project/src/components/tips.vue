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
    </div>
</template>
<script>
import selfComponent from '../mycomponents/selfComponent.vue';
import customInput from '../mycomponents/customInput';

export default {
    components: {
        selfComponent,
        customInput,
        
    },
    data() {
        return {
            mycontent: '',
            myword: '',
        }
    }
}
</script>