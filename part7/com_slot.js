Vue.component('my-hello', {
	props: ['yourName'],
	template: '<div>' +
		'<header><slot name="header">A</slot></header>' +
		'<div><slot>B</slot></div>' +
		'<footer><slot name="footer">C</slot></footer>' +
		'</div>'
});

new Vue({
	el: '#app',
});