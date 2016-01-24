import 'angular-material/angular-material.css!'

import angular from 'angular'
import material from 'angular-material'
import 'angular-ui-router'

// Load loggers for injection and pre-angular debugging

import { LogDecorator, ExternalLogger } from 'app/utils/LogDecorator';

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
            'ui.router',
            material
            ])
          .run(
          [
              '$rootScope', '$state', '$stateParams',
            function ($rootScope, $state, $stateParams) {
                // It's very handy to add references to $state and $stateParams to the $rootScope
                // so that you can access them from any scope within your applications.For example,
                // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
                // to active whenever 'contacts.list' or one of its decendents is active.
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
                $rootScope.$on("$stateChangeError", console.log.bind(console));
            }
          ])
          .config( ['$provide', '$stateProvider', '$urlRouterProvider', '$mdThemingProvider', 
                    function($provide, $stateProvider, $urlRouterProvider, $mdThemingProvider){
                $urlRouterProvider.otherwise('/app');
                LogDecorator($provide);
          }]);
          
    angular.bootstrap( body, [ app.name ], { strictDi: false })
  });

