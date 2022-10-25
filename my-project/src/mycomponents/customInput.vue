<template>
    <div>
        <input
            v-bind:value="searchContext"
            v-on:input="$emit('input', $event.target.value)"
        >
    </div>
</template>
<script>
export default {
    props: ['searchContext'],
    data() {
       return {}
    }
}
</script>