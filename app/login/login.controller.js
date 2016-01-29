export default angular
        .module('schedulerApp.login')
        .controller('LoginController', LoginController);

LoginController.$inject = ['toastService'];

function LoginController(toastService) {
    let vm = this;
    vm.username = '';
    vm.password = '';
    
    vm.test = function(){
        toastService.info('test alert');
    }
}