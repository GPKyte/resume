(function() {
  var app = angular.module('buildResume', [ ]);
  app.controller('bioController', function() {
    this.bio = bio;
  });
  app.controller('educationController', function() {
    this.education = education;
  });
})();
