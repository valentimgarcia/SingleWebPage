define(function () {
    var internals = {
        elements: {},
        handlers: {}
    };
    var externals = {};

    internals.createButton = function () {
        return '<button type="button" class="btn btn-light translate-middle" style="">Display Character</button>';
    }

    internals.createFilmCard = function (film) { 
        console.log(film.results);
        var elements = "";
        for (var i = 0; i < 20; i++) {
            elements += '<div>' +
            '<p><strong>Name:</strong>' +
            film.results[i].name +
            '</p>' +
            '<p><strong>Status:</strong>' +
            film.results[i].status +
            '</p>' +
            '<p><strong>Species:</strong>' +
            film.results[i].species +
            '</p>' +
            '<p><img src="' + film.results[i].image + '"/img>' +
            '</p>' +
            '</div>'
        }
        return elements;
    }

    internals.renderButton = function () {
        internals.elements.button = $(internals.createButton())
        internals.elements.button.click(internals.handlers.espargo)
        //internals.elements.button.click(function(){ window.location.hash = '#otherView'})
        $('#app').append(internals.elements.button)
    }

    internals.renderFilm = function (film) {
        internals.elements.filmCard = $(internals.createFilmCard(film));
    
        $('#app').append(internals.elements.filmCard)
    }

    externals.bindHandlers = function (event, handler) {
        internals.handlers[event] = handler;
    }

    externals.render = function (film) {
       
        $('#app').empty()
        internals.renderButton();
        if (film) {
            internals.renderFilm(film)
        }
    }

    return externals
})