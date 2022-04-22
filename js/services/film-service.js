define(function() {
    var externals = {}; // external api
    externals.getFilm = function() {
        return fetch('https://rickandmortyapi.com/api/character')
                    .then(function (response) {
                        return response.json();
                    })    
    };
    return externals;
})
 