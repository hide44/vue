new Vue({
    el: '#app',
    data: {
        message: ''
    },
    methods: {
        onchange: function() {
            console.log('入力値は「' + this.message + '」です。');
        }
    }
});