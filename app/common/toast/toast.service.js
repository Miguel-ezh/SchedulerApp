export default angular
    .module('schedulerApp.common', [])
    .service('toastService', toastService);
    
toastService.$inject = ['$mdToast'];

function toastService($mdToast){
    let service = {
        error: error,
        success: success,
        info: info
    };
    
    return service;
    
    function error(msg){
        $mdToast.show({
            template: '<md-toast class="md-toast md-toast-error">' + msg + '</md-toast>',
            hideDelay: 6000,
            position: 'bottom right'
        });
    }
    
    function success(msg){
        $mdToast.show({
            template: '<md-toast class="md-toast md-toast-success">' + msg + '</md-toast>',
            hideDelay: 6000,
            position: 'bottom right'
        });
    }
    
    function info(msg){
        $mdToast.show({
            template: '<md-toast class="md-toast md-toast-info">' + msg + '</md-toast>',
            hideDelay: 6000,
            position: 'bottom right'
        });
    }
}