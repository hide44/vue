new Vue({
  el: '#app',
  data: {
    myName: 'ゲスト'
  },
  methods: {
  	onchange: function() {
  		console.log('入力値は「' + this.message + '」です。');
  	}
  }
});