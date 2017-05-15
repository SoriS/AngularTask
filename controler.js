var model = {
    items: [
        { purchase: "Поспать", done: false, status: true },
        { purchase: "Поесть", done: false, status: true },
        { purchase: "Попить", done: true, status: true },
        { purchase: "Покурить", done: false, status: true }
    ]
};


submitExample.controller('ExampleController', function ($scope) {
    $scope.items = model.items;
    $scope.submit = function () {
        if ($scope.text) {
            $scope.items.push({ purchase: $scope.text, done: false, status: true });
            $scope.text = '';
        }
    };
    $scope.Rename = function ($event,item) {

        item.status = !item.status;
    }
     $scope.onBlur = function($event,item) {

        if(item.status===false){
         item.status = !item.status;}
     }
    submitExample.filter('all', function(){
     return function(all){
         if(all===false)
         
        return items;
    }
})

});

