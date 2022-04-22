require(['router'], function(routerModule){
    $(document).ready(function(){
        console.log('The dom has fully loaded');

        routerModule.start();
    })
})