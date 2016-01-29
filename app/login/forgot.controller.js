export default angular
        .module('schedulerApp.login')
        .controller('ForgotController', ForgotController);

ForgotController.$inject = ['$window'];

function ForgotController($window) {
    let vm = this;
    vm.email = '';
    
    vm.back = function(){
        $window.history.back();
    }
}