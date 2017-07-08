app.directive('education', function(){
    return{
        restriction: 'E',
        scope:{
            info:'='
        },
        templateUrl:'js/directives/education.html'
    }
});
