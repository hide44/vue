new Vue({
  el: '#app',
  data: {
    list: ['melon', 'orange', 'peach']
  },
  methods: {
    onclick: function() {
      // list[1] = 'strawberry';
      Vue.set(this.list, 1, 'strawberry');
    }
  }
});