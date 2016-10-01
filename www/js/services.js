angular.module('starter.services', [])

.factory('Shows', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var shows = [{
    id: 1,
    name: 'Audrey',
    location: 'Chez Audrey',
    description: 'best show',
    capacity: 100,
    price: 100,
    image: "http://www.woueb.net/wp-content/uploads/2010/12/salle-de-concert-360.jpg",
    date: '2016-09-28',
    url: "https://api-shows-tonight.herokuapp.com/shows/1.json"
  }, {
    id: 2,
    name: 'Beyonce',
    location: 'Chez Audrey',
    description: 'best show ever',
    capacity: 100,
    price: 1000,
    image: "http://www.woueb.net/wp-content/uploads/2010/12/salle-de-concert-360.jpg",
    date:'2016-09-28',
    url:"https://api-shows-tonight.herokuapp.com/shows/2.json"
  }, {
    id: 3,
    name: 'Showtime',
    location: 'Stade de France',
    description: 'show',
    capacity: 200,
    price: 200,
    image: "http://www.woueb.net/wp-content/uploads/2010/12/salle-de-concert-360.jpg",
    date: '2016-09-28',
    url:"https://api-shows-tonight.herokuapp.com/shows/5.json"
  },
  ];
  return {
    all: function() {
      return shows;
    },

    get: function(showId) {
      for (var i = 0; i < shows.length; i++) {
        if (shows[i].id === parseInt(showId)) {
          return shows[i];
        }
      }
      return null;
    }
  };
});
