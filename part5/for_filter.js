new Vue({
  el: '#app',
  data: {
  	books: [
  	{
  	  isbn: '978-4-7981-5382-7',
  	  title: '独習 C# 新版',
  	  price: 3600
  	},
  	{
  	  isbn: '978-4-7981-5382-7',
  	  title: '独習 C# 新版',
  	  price: 3000
  	},
  	{
  	  isbn: '978-4-7981-5382-7',
  	  title: '独習 C# 新版',
  	  price: 2600
  	},
  	{
  	  isbn: '978-4-7981-5382-7',
  	  title: '独習 C# 新版',
  	  price: 2000
  	},
  	{
  	  isbn: '978-4-7981-5382-7',
  	  title: '独習 C# 新版',
  	  price: 1600
  	},
  	{
  	  isbn: '978-4-7981-5382-7',
  	  title: '独習 C# 新版',
  	  price: 1000
  	}
  	]
  },
  computed: {
    cheapBooks: function() {
      return this.books.filter(function(b) {
        return b.price < 2500;
      })
    }
  }
});