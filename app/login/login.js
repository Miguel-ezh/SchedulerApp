export default angular
    .module('schedulerApp.login', ['ui.router'])
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('login', {
                    url: '/login',
                    controller: 'LoginController',
                    controllerAs: 'vm',
                    templateUrl: '/app/login/login.html'
                });
        }]);