//ref是引用，和input标签里面的ref字段是相对应的
new Vue({
    el: '#vue-app-one',
    data: {
        output: 'Your favourite food'
    },
    methods: {
        readRefs: function(){
            console.log(this.$refs);
            this.output = this.$refs.input.value;
        }
    }
});
