var StoreController = function ($scope) {


    var check = 0;

    $scope.listCourses = [
        { id: 1, name: "AngularJS", address: "VietNam", logo: "https://w7.pngwing.com/pngs/752/651/png-transparent-angularjs-vue-js-others-angle-rectangle-triangle-thumbnail.png", numberphone: "0345777890", status: 1 },
        { id: 2, name: "ReactJS", address: "VietNam", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png?20220125121207", numberphone: "0345777890", status: 1 },
        { id: 3, name: "NodeJS", address: "VietNam", logo: "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_f0b606abb6d19089febc9faeeba5bc05/nodejs-development-services.png", numberphone: "0345777890", status: 1 },
    ]

    $scope.input =
    {

        name: "Express", address: "VietNam",
        logo: "https://1.bp.blogspot.com/-jkSmywQ57sA/Wer3KKSqgaI/AAAAAAAACc4/07TexMsBBI4v7WlVKo76YvxM3TvrMxIdwCLcBGAs/s640/express.js.png",
        numberphone: "0345777890", status: 0

    }



    $scope.setShowForm = function (status) {
        $scope.isShowForm = status;
        $scope.isShowForm2 = false;
        $scope.Hide = !$scope.Hide



    }
    $scope.setShowForm2 = function (status, l) {
        $scope.isShowForm2 = status;
        $scope.isShowForm = false;
        $scope.input = l;
        check = l;
        $scope.Hide = !$scope.Hide


    }
    $scope.onSave = () => {


        var l = $scope.listCourses
        var newId = l.length > 0
            ? l[l.length - 1].id + 1
            : 1;
        var newItem = {
            id: newId,
            ...$scope.input
        }
        $scope.listCourses.push(newItem)
        $scope.isShowForm = false;

        console.log($scope.listCourses)

        $scope.Hide = !$scope.Hide



    }

    $scope.onUpdate = () => {
        for (let i = 0; i < $scope.listCourses.length; i++) {
            if ($scope.listCourses[i].id === check.id) {
                $scope.listCourses[i] = $scope.input;
                break;
            }
        }
        $scope.isShowForm2 = false;
        $scope.Hide = !$scope.Hide


    }
    $scope.onDelete = function (deleteId) {
        var confirm = window.confirm('Delete ?');
        if (confirm) {
            $scope.listCourses = $scope.listCourses.filter(function (item) {
                return item.id !== deleteId;
            })
        }

    }

}


