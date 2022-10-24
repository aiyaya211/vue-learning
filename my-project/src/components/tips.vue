<template>
    <div>
        <p>v-model双向绑定</p>
        <input v-model="mycontent" placeholder="please write">
        <!-- v-model 语法糖 -->
        <input :value="mycontent" @input="mycontent = $event.target.value"/>
        <p>content is {{ mycontent }}</p>
        <self-component :checked="true" />
    </div>
</template>
<script>
import selfComponent from '../mycomponents/selfComponent.vue'

export default {
    components: {
        selfComponent
    },
    data() {
        return {
            mycontent: '',
        }
    }
}
</script>