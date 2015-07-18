var myApp = angular.module('myApp', ['ngDialog']);

myApp.factory('socket', function () {
    return io.connect('http://212.18.233.173:3000');
});

myApp.factory()
myApp.controller('AppCtrl', function ($scope, $http, socket, ngDialog) {
    console.log("CONTROLLER OK");
    console.log(socket);

    function refresh() {
        $http.get('http://212.18.233.173:3000/data').success(function (response) {
            console.log("HTTP:");
            console.log(response);
            $scope.contactlist = response;
            $scope.contact = "";
        });
    }

    refresh();

    socket.on('REFRESH', function () {
        console.log("SOCKET: REFRESH");
        refresh();
    });

    $scope.getMessage = function (id, len) {
        if (len > 0) {
            $http.get('http://212.18.233.173:3000/data/' + id).success(function (response) {
                console.log("HTTP:");
                console.log(response);
                $scope.wiadomosc = response.wiadomosci.pop();
                ngDialog.open({
                    template: 'css/modal.html',
                    className: 'ngdialog-theme-default',
                    scope: $scope
                });
                $http.delete('http://212.18.233.173:3000/data/' + id).success(function (response) {
                    console.log("HTTP:");
                    console.log(response);
                });
            });
        }
    };

});
