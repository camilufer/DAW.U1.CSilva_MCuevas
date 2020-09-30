'use strict';

(function() {
    function init() {
        var router = new Router([
            new Router('index', 'index.html', true),
            new Route('about', 'about.html')
        ]); 
    }
    init();
    
}());