var app = angular.module(
    'angularjs-router',
    ['ngRoute']
);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: './pages/trangchu.html',
            controller: StoreController
        })
        .when('/trangchu', {
            templateUrl: './pages/trangchu.html',
            controller: StoreController
        })
        .when('/profile', {
            templateUrl: './pages/info.html',
            controller: StoreController
        })
        .when('/add', {
            templateUrl: './pages/add.html',
            controller: AddController
        })
        .when('/store', {
            templateUrl: './pages/store.html',
            controller: StoreController
        })
        .when('/update/:id', {
            templateUrl: './pages/update.html',
            controller: UpdateController
        })
        .when('/404', {
            templateUrl: './pages/error.html',

        })
        .otherwise({
            redirectTo: '/404'
        })
});