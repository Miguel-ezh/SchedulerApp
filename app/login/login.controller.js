export default angular
        .module('schedulerApp.login')
        .controller('LoginController', LoginController);

LoginController.$inject = [];

function LoginController() {
    let vm = this;
    vm.username = '';
    vm.password = '';
    
}