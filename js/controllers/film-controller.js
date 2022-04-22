define(['views/film-view', 'services/film-service'], function(view, filmService){

    var internals = {};
    var externals = {};

    internals.buttonHandler = function(){
        filmService.getFilm().then(function(series) {
            view.render(series);
        })
    }

    externals.init = function(){
        view.bindHandlers('espargo', internals.buttonHandler)
        view.render()
    }

    return externals;
})