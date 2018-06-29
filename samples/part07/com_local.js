var MyHello = {
    template: '<div>こんにちは、コンポーネント！</div>'
  };

new Vue({
    el: '#app',
    components: {
        'my-hello': MyHello
    }
});
