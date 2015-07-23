app.controller('EmailController', ['$scope', 'emails', '$routeParams', function($scope, emails, $routeParams) {
  emails.success(function(data) {
  	console.log(data[$routeParams.id]);
    $scope.email = data[$routeParams.id];
  });
}]);