new Vue({
  el: '#app',
  data: {
  	articles: [
  	{
  	  title: '独習 C# 新版',
  	  description: 'aaaaa',
      author: 'bbbbb'
  	},
    {
      title: '独習 C# 新版',
      description: 'aaaaa',
      author: 'bbbbb'
    },
    {
      title: '独習 C# 新版',
      description: 'aaaaa',
      author: 'bbbbb'
    },
    {
      title: '独習 C# 新版',
      description: 'aaaaa',
      author: 'bbbbb'
    },
    {
      title: '独習 C# 新版',
      description: 'aaaaa',
      author: 'bbbbb'
    },
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