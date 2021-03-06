Vue.component('my-hello', {
	props: {
		yourName: {
			type: String,
			required: true,
			validator: function(value) {
				return value.length <= 3;
			}
		}
	},
	template: '<div>こんにちは、{{ yourName }}</div>'
});

new Vue({
	el: '#app',
});