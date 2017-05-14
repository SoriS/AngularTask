var model = {
        items: [
                { purchase: "Хлеб", done: false },
                { purchase: "Масло", done: false },
                { purchase: "Картофель", done: true },
                { purchase: "Сыр", done: false }
        ]
};

//fot git commit
submitExample.controller('ExampleController', function ($scope) {
    $scope.items = model.items;
    $scope.submit = function () {
        if ($scope.text) {
            $scope.items.push({ purchase: $scope.text, done: false });
            $scope.text = '';
        }

        
    };
});

