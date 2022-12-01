<template>
    <div>
        <p>我是一级子组件</p>
        <div>
            <p>foo:{{foo}}</p>
            <p>attrs:{{$attrs}}</p>
        </div>
        <child-dom-child v-bind="$attrs" v-on="$listeners"></child-dom-child>
    </div>
</template>
<script>
import childDomChild from './child/childDomChild.vue'

export default {
  components: { childDomChild },
    name:'child-dom',
    props:["foo"]
}
</script>