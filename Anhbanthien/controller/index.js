var app = angular.module(
    'angularjs-router',
    ['ngRoute']
);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: './pages/trangchu.html',
        })
        .when('/trangchu', {
            templateUrl: './pages/trangchu.html',
        })
        .when('/profile', {
            templateUrl: './pages/info.html',
        })
        .when('/add', {
            templateUrl: './pages/add.html',
            controller: StoreController
        })
        .when('/store', {
            templateUrl: './pages/store.html',
            controller: StoreController
        })

        .when('/404', {
            templateUrl: './pages/error.html',


        })
        .otherwise({
            redirectTo: '/404'
        })
});