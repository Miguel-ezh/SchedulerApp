export default angular
        .module('schedulerApp.login')
        .controller('SignupController', SignupController);

SignupController.$inject = ['$window'];

function SignupController($window) {
    let vm = this;
    vm.firstName = '';
    vm.lastName = '';
    vm.username = '';
    vm.password = '';
    
    vm.back = function(){
        $window.history.back();
    }
    
    vm.signup = function(){
        
    }
}