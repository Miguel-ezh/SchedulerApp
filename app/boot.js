import 'angular-material/angular-material.css!'

import angular from 'angular'
import material from 'angular-material'
import 'angular-ui-router'
import 'angular-messages'

// Load loggers for injection and pre-angular debugging
import { LogDecorator, ExternalLogger } from 'app/utils/logDecorator';
import 'angular-storage';
import 'angular-jwt';

//Load modules
import '/app/login/load'
import '/app/home/load'

/**
 * Manually bootstrap the application when AngularJS and
 * the application classes have been loaded.
 */
angular
  .element( document )
  .ready( function() {

    let appName = 'schedulerApp';
    let $log = new ExternalLogger();

    $log = $log.getInstance( "BOOTSTRAP" );
    $log.debug( "Initializing '{0}'", [ appName ] );
    
    let body = document.getElementsByTagName("body")[0];
    let app  = angular
          .module( appName, [ 
            'schedulerApp.login',
            'schedulerApp.home',
            'ui.router',
            material,
            'ngMessages',
            'angular-jwt',
            'angular-storage'
            ])
          .run(
          [
              '$rootScope', '$state', '$stateParams', 'store', 'jwtHelper', 
            function ($rootScope, $state, $stateParams, store, jwtHelper) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
                $rootScope.$on("$stateChangeError", console.log.bind(console));
                
                $rootScope.$on('$stateChangeStart', function(e, to) {
                    if (to.data && to.data.requiresLogin) {
                        if (!store.get('jwt') || jwtHelper.isTokenExpired(store.get('jwt'))) {
                            e.preventDefault();
                            $state.go('login');
                        }
                    }
                });
            }
          ])
          .config( ['$provide', '$stateProvider', '$urlRouterProvider', '$mdThemingProvider', 'jwtInterceptorProvider', '$httpProvider',  
                    function($provide, $stateProvider, $urlRouterProvider, $mdThemingProvider, jwtInterceptorProvider, $httpProvider){
                $urlRouterProvider.otherwise('/');
                
                jwtInterceptorProvider.tokenGetter = function(store) {
                    return store.get('jwt');
                }
                $httpProvider.interceptors.push('jwtInterceptor');
                
                $mdThemingProvider.theme('default')
                    .primaryPalette('blue')
                    .accentPalette('light-blue')
                    .warnPalette('red');
          }]);
          
    angular.bootstrap( body, [ app.name ], { strictDi: false })
  });

