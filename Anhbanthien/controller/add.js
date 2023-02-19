var AddController = function ($scope, $http, $location) {
    $scope.input =
        { name: "GruntStore", address: "CSA", logo: "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_9981953457da53251a09f15604cd4f29/grunt.png", numberphone: "+67-0345777890", status: 1 }
    $scope.onSave = function () {
        $http.post(
            API_URL + '/ListCourses',
            JSON.stringify({
                name: $scope.input.name,
                address: $scope.input.address, logo: $scope.input.logo,
                numberphone: $scope.input.numberphone, status: $scope.input.status,
            })
        ).then(
            function (res) {
                $location.path('/store');
            },
            function (err) { },
        )
    }
}

