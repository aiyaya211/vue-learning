export default {
    name: "list",
    render(createElement) {
        console.log(createElement);
        console.log('createElement')
        return createElement (
            'h' + this.level,
            this.$slots.default   
        )
    },
    props: {
        level: {
            type: Number,
            required: true
        }
    }
}