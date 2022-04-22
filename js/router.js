define(function () {
    var internals = {};
    var externals = {};

    internals.routes = [
        {
            hash: '#film',
            controller: 'film-controller'
        },
    ]

    internals.defaultHash = '#film'
    internals.defaultRoute = 0;

    internals.handleHashChange = function () {
        console.log('HASHCHANGE CAUGHT')
        window.location.hash = window.location.hash || internals.defaultHash;
        var route = internals.routes.find(function (elem) {
            return elem.hash === window.location.hash
        })
        if (!route) {
            window.location.hash = internals.defaultHash;
            return;
        }

        require(['controllers/' + route.controller], function (controller) {
            console.log('WE IMPORTED A CONTROLLER! and its about to start')
            controller.init();
        })
    }

    externals.start = function () {
        internals.handleHashChange()
        window.onhashchange = internals.handleHashChange
    }

    return externals
});