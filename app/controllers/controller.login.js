(function() {
  angular.module('app')
    .controller('login', function($scope, $location, $window, $route, md5, AppManager) {
      var abc = $route.current.params
      var account_linking_token = abc.account_linking_token
      var access_token = 'EAAHzb4te058BAIw3qDOlCx6Ro6uFtVlXmQL5gpV7lgbzcKrFffJKtly0pvRhnA40ukUMoQeJt9UDTldswWWe9qzL5fK4DvrqZA1GRmbUOzpV1LOu4nzLZBenmHvlP4qD5QXAanZASEmbJKx1fHpZA9qhYNrSFRk8OMjzovQcuAZDZD'


      $scope.login = function() {
        var username = ($scope.username)
        var pass = md5.createHash($scope.password)
        AppManager.getFbUserId(access_token, account_linking_token)
          .then(function(result) {
            console.log(result)
            var user_fb_id = result.recipient
            console.log(username, pass, user_fb_id)
            AppManager.chatbotLogin(username, pass, user_fb_id)
              .then(function(result) {
                console.log(result)
                if (result.success == 'true') {
                  $scope.showErrormsg = false

                  console.log($scope.showErrormsg)
                  $window.location.href = abc.redirect_uri + '&authorization_code=success'

                } else {
                  $scope.showErrormsg = true
                  console.log($scope.showErrormsg)
                }
              })
          })
      }
    });
})();
