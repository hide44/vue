// Vue.component('my-hello', {
// 	template: '<div>こんにちは、Component!</div>'
// });
var MyHello = {
	template: '<div>こんにちは、Component!</div>'
};

new Vue({
	el: '#app',
	components: {
		'my-hello': MyHello
	}
});