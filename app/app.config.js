(function() {
  angular.module('app')
    .config(function($routeProvider, $locationProvider, $mdThemingProvider) {
      $routeProvider
        .when('/', {
          controller: 'login',
          templateUrl: './app/templates/login.html'
        })
        
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      })
    })
})();
