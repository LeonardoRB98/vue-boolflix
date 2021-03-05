// https://api.themoviedb.org/3/search/tv
var app = new Vue ({
  el: '#wrapper',
  data: {
  films: [],
  tvSeries: [],
  searchedFilm: '',
  },
  methods: {
    searchFilms: function() {
      self = this;
      axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
        api_key: 'a8fa660c5c4ea61b09b818ec21b9b84d',
        query: self.searchedFilm,
        language: "it-IT"
        }
      }).then(function(result) {
         self.films = result.data.results
      }),
      axios.get('https://api.themoviedb.org/3/search/tv', {
        params: {
        api_key: 'a8fa660c5c4ea61b09b818ec21b9b84d',
        query: self.searchedFilm,
        language: "it-IT"
        }
      }).then(function(result) {
         self.films.push(...result.data.results);
         console.log(self.films);
      })
    },
  },
  mounted: function() {

  },
  udtated: function() {
    this.searchFilms();
    

  },



}) // parentesi chiusura vue
