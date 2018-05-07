var app = angular.module('parkApp');

app.factory('getParkerings', ['$http', function ($http) {
    var parkerings = {
        resultSet: function () {
            var url = `https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=parkering_new`;
            var data;
            return $http.get(url)
                .then(function onSuccess(response) {
                    // Handle success
                    data = response.data;
                    console.log(data);
                    var status = response.status;
                    var statusText = response.statusText;
                    var headers = response.headers;
                    var config = response.config;
                    return data.records;

                })
                .catch(function onError(response) {
                    // Handle error
                    data = response.data;
                    var status = response.status;
                    var statusText = response.statusText;
                    var headers = response.headers;
                    var config = response.config;
                    return "Error";
                });

        }
    };
    return parkerings;
}]);