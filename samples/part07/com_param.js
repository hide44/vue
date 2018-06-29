Vue.component('my-hello', {
    props: [ 'yourName' ],

    // プロパティ値の型を制限
    // props: {
    //     yourName: {
    //         type: String,
    //         required: true
    //     }
    // },

    // 自作の検証ルール
    // props: {
    //     yourName: {
    //       type: String,
    //       required: true,
    //       validator: function(value) {
    //         return value.length <= 5;
    //         }
    //     }
    // },

    template: '<div>こんにちは、{{ yourName }}さん！</div>'
});

new Vue({
    el: '#app'
});
  