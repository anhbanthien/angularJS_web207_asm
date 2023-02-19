var StoreController = function ($scope, $http, $location) {


    $scope.listCourses = []

    $scope.onGetList = function () {
        $http.get(API_URL + '/ListCourses').then(
            function (res) {
                if (res.status == 200) {
                    $scope.listCourses = res.data;
                }
            }, // khi chờ dữ liệu thành công
            function (err) {
                console.log(err);
            } // khi chờ dữ liệu nhưng thất bại
        );
    };
    $scope.onGetList();
    $scope.onDelete = function (deleteId) {
        // method delete http://localhost:3000/users/1
        $http.delete(API_URL + '/ListCourses/' + deleteId)
            .then(
                function (res) {
                    onGetList();
                },
                function (err) { }
            )
    };
    // var check = 0;

    // $scope.listCourses = [
    //     { id: 1, name: "AngularJSStore", address: "USA", logo: "https://w7.pngwing.com/pngs/752/651/png-transparent-angularjs-vue-js-others-angle-rectangle-triangle-thumbnail.png", numberphone: "+67-0345777890", status: 1 },
    //     { id: 2, name: "ReactJSStore", address: "VN", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png?20220125121207", numberphone: "+67-0345777890", status: 0 },
    //     { id: 3, name: "NodeJSStore", address: "UK", logo: "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_f0b606abb6d19089febc9faeeba5bc05/nodejs-development-services.png", numberphone: "+67-0345777890", status: 1 },
    //     { id: 4, name: "VueJSStore", address: "CHI", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVLFpJypmWo8-_qvR9u6NHZoWQ7XN3lyp6HLguGFLCe19OsShRSqadPl-aPeFPjali6kg&usqp=CAU", numberphone: "+67-0345777890", status: 1 },
    //     { id: 5, name: "JQueryStore", address: "USA", logo: "https://www.interviewbit.com/blog/wp-content/uploads/2021/10/jquery-logo-vertical_large_square.png", numberphone: "+67-0345777890", status: 0 },
    //     { id: 6, name: "GruntStore", address: "KTM", logo: "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_9981953457da53251a09f15604cd4f29/grunt.png", numberphone: "+67-0345777890", status: 1 },
    //     { id: 7, name: "AngularJSStore", address: "USA", logo: "https://w7.pngwing.com/pngs/752/651/png-transparent-angularjs-vue-js-others-angle-rectangle-triangle-thumbnail.png", numberphone: "+67-0345777890", status: 1 },
    //     { id: 8, name: "ReactJSStore", address: "USA", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png?20220125121207", numberphone: "+67-0345777890", status: 0 },
    //     { id: 9, name: "NodeJSStore", address: "CDS", logo: "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_f0b606abb6d19089febc9faeeba5bc05/nodejs-development-services.png", numberphone: "+67-0345777890", status: 1 },
    //     { id: 10, name: "VueJSStore", address: "USA", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVLFpJypmWo8-_qvR9u6NHZoWQ7XN3lyp6HLguGFLCe19OsShRSqadPl-aPeFPjali6kg&usqp=CAU", numberphone: "+67-0345777890", status: 1 },
    //     { id: 11, name: "JQueryStore", address: "SDD", logo: "https://www.interviewbit.com/blog/wp-content/uploads/2021/10/jquery-logo-vertical_large_square.png", numberphone: "+67-0345777890", status: 0 },
    //     { id: 12, name: "GruntStore", address: "KUA", logo: "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_9981953457da53251a09f15604cd4f29/grunt.png", numberphone: "+67-0345777890", status: 1 },
    //     { id: 12, name: "AngularJSStore", address: "SAD", logo: "https://w7.pngwing.com/pngs/752/651/png-transparent-angularjs-vue-js-others-angle-rectangle-triangle-thumbnail.png", numberphone: "+67-0345777890", status: 1 },
    //     { id: 13, name: "ReactJSStore", address: "DOD", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png?20220125121207", numberphone: "+67-0345777890", status: 0 },
    //     { id: 14, name: "NodeJSStore", address: "FDS", logo: "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_f0b606abb6d19089febc9faeeba5bc05/nodejs-development-services.png", numberphone: "+67-0345777890", status: 1 },
    //     { id: 15, name: "VueJSStore", address: "USA", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVLFpJypmWo8-_qvR9u6NHZoWQ7XN3lyp6HLguGFLCe19OsShRSqadPl-aPeFPjali6kg&usqp=CAU", numberphone: "+67-0345777890", status: 1 },
    //     { id: 16, name: "JQueryStore", address: "FFG", logo: "https://www.interviewbit.com/blog/wp-content/uploads/2021/10/jquery-logo-vertical_large_square.png", numberphone: "+67-0345777890", status: 0 },
    //     { id: 17, name: "GruntStore", address: "CSA", logo: "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_9981953457da53251a09f15604cd4f29/grunt.png", numberphone: "+67-0345777890", status: 1 }
    // ]


    // console.log($scope.listCourses);
    // $scope.input =
    //     { id: 17, name: "GruntStore", address: "CSA", logo: "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_9981953457da53251a09f15604cd4f29/grunt.png", numberphone: "+67-0345777890", status: 1 }



    // $scope.setShowForm = function (status) {
    //     $scope.isShowForm = status;
    //     $scope.isShowForm2 = false;
    //     $scope.Hide = !$scope.Hide



    // }
    // $scope.setShowForm2 = function (status, l) {
    //     $scope.isShowForm2 = status;
    //     $scope.isShowForm = false;
    //     $scope.input = l;
    //     check = l;
    //     $scope.Hide = !$scope.Hide


    // }
    // $scope.onSave = () => {


    //     var l = $scope.listCourses
    //     var newId = l.length > 0
    //         ? l[l.length - 1].id + 1
    //         : 1;
    //     var newItem = {
    //         id: newId,
    //         ...$scope.input
    //     }
    //     $scope.listCourses.push(newItem)
    //     $scope.isShowForm = false;

    //     console.log($scope.listCourses)

    //     $scope.Hide = !$scope.Hide

    //     alert("Thành Công")



    // }

    // $scope.onUpdate = () => {
    //     for (let i = 0; i < $scope.listCourses.length; i++) {
    //         if ($scope.listCourses[i].id === check.id) {
    //             $scope.listCourses[i] = $scope.input;
    //             break;
    //         }
    //     }
    //     $scope.isShowForm2 = false;
    //     $scope.Hide = !$scope.Hide
    //     alert("Thành Công")


    // }
    // $scope.onDelete = function (deleteId) {
    //     var confirm = window.confirm('Delete ?');
    //     if (confirm) {
    //         $scope.listCourses = $scope.listCourses.filter(function (item) {
    //             return item.id !== deleteId;
    //         })
    //         alert("Thành Công")
    //     }

    // }



}


