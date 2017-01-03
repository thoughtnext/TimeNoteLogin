(function() {
  var app = angular.module('app');
  app.factory('AppManager', function($q, $http, $log) {
    // var baseUrl = 'https://a9ab0a9c.ngrok.io/'
      // var baseUrl = 'http://192.168.1.4:8445/'
    return {
      chatbotLogin: function(username, password, user_fb_id) {
        console.log(username, password, user_fb_id)
        var deferred = $q.defer();
        var payload = new FormData();
        payload.append('data', '{"username":"' + username + '","password":"' + password + '","user_fb_id":"' + user_fb_id + '"}');

        $http({
            url: 'https://api.gotimenote.com/user/chatbot_login',
            method: 'POST',
            data: payload,
            headers: { 'Content-Type': undefined },
            transformRequest: angular.identity
          })
          .then(_success, _error)

        function _success(data) {
        	console.log(data.data)
          deferred.resolve(data.data);
        }

        function _error(err) {
          deferred.reject(err);
        }

        return deferred.promise;
      },
      getFbUserId: function(access_token, account_linking_token) {
        var deferred = $q.defer();
        var url = 'https://graph.facebook.com/v2.6/me?access_token=' + access_token + '&fields=recipient&account_linking_token=' + account_linking_token;
        $http.get(url)
          .then(_success, _error);

        function _success(data) {
        	console.log(data.data)
          deferred.resolve(data.data);
        }

        function _error(err) {
          deferred.reject(err);
        }

        return deferred.promise;
      }

    }
  });
})();
