var UpdateController = function ($scope, $http, $location, $routeParams) {
    // Những thứ đằng sau $scope là view có thể tương tác được

    // Lấy được :id từ trên đường dẫn xuống đây
    var editId = $routeParams.id;
    // Sử dụng id đó để call API lấy bản ghi chi tiết

    $scope.input =
        { id: 17, name: "GruntStore", address: "CSA", logo: "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_9981953457da53251a09f15604cd4f29/grunt.png", numberphone: "+67-0345777890", status: 1 }
    $http.get(API_URL + '/ListCourses/' + editId).then(
        function (res) {
            // Đưa vào form để tiếp tục chỉnh sửa
            // ng-model="editItem.name"
            $scope.editItem = res.data;
            // console.log($scope.editItem);
        },
        function (err) {
            console.log(err);
        }
    );

    // Lưu và quay về danh sách
    $scope.onUpdate = function () {
        $http.put(
            API_URL + '/ListCourses/' + editId,
            JSON.stringify({
                id: $scope.input.id, name: $scope.input.name,
                address: $scope.input.address, logo: $scope.input.logo,
                numberphone: $scope.input.numberphone, status: $scope.input.status,
            })
        ).then(
            function (res) { $location.path('/store') },
            function (err) { console.log(err) },
        )
    }

}
