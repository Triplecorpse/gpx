/**
 * Created by Eldar_Khaitov on 7/27/2015.
 */

var pointsGlobalArray = [];

var pointList = angular.module('pointList', []);

pointList.controller('PointsCtrl', function setData($scope){
    $scope.$apply(function(){
        $scope.points = pointsGlobalArray;
    });
    setTimeout(function(){
        setData($scope)
    },2000);

    $scope.getPosition = function(event) {
        $scope.items.push( {
            "label": "Click",
            "value": 100,
            "x": event.offsetX-50,
            "y": event.offsetY-50
        });
        alert(event.offsetX);
    };
    //console.log('inside angular points', $scope.points);
    //console.log('inside angular points global array', pointsGlobalArray);
});