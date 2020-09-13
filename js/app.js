'use strict';

(function () {
    function init() {
        var router = new Router([
            new Route('home', 'home.html', true),            
            new Route('shop', 'shop.html'),
            new Route('magazine', 'magazine.html')
        ]);
    }
    init();
}())