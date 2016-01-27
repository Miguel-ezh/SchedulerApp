export default angular
    .module('schedulerApp.home', ['ui.router'])
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('home', {
                    url: '/home',
                    controller: 'HomeController',
                    controllerAs: 'vm',
                    templateUrl: '/app/home/home.html',
                    data: {
                        requiresLogin: true
                    }
                });
        }]);