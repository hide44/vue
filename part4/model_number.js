new Vue({
  el: '#app',
  data: {
    time: ''
  },
  methods: {
  	onchange: function() {
  		console.log(this.time.toFixed(1));
  	}
  }
});