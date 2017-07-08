app.directive('bioInfo', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'js/directives/bioInfo.html'
  };
});
