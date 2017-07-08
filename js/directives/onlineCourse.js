app.directive('onlineCourse', function(){
    return{
        restriction: 'E',
        scope:{
            info:'='
        },
        templateUrl:'js/directives/onlineCourse.html'
    }
});
