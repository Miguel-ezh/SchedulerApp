export default angular
    .module('schedulerApp.login', ['ui.router', 'schedulerApp.common'])
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('login', {
                    url: '/login',
                    controller: 'LoginController',
                    controllerAs: 'vm',
                    templateUrl: '/app/login/login.html'
                });
                
            $stateProvider
                .state('forgot', {
                   url: '/forgot',
                   controller: 'ForgotController',
                   controllerAs: 'vm',
                   templateUrl: '/app/login/forgot.html' 
                });
            
            $stateProvider
                .state('signup', {
                   url: '/signup',
                   controller: 'SignupController',
                   controllerAs: 'vm',
                   templateUrl: '/app/login/signup.html' 
                });
        }]);