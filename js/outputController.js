/**
 * Created by Eldar_Khaitov on 7/27/2015.
 */

function gpxOutput(gpxDocument, trackNumber, trackSegmentNumber){
    trackNumber = trackNumber || 0;
    trackSegmentNumber = trackSegmentNumber || 0;

    var trks = $(gpxDocument).find("trk"); //collection of tracks
    var trksegs = $(trks[trackNumber]).find("trkseg"); //collection of track segments
    var trkpts = $(trksegs[trackSegmentNumber]).find("trkpt"); //collection of track points

    createPointsArray(trkpts);

    writeGpx(trkpts);
}

var pointsGlobalArray = [];//new wptType([50,30,167,20]), new wptType([51,31,161,10]), new wptType([49,29,14,0])];
function createPointsArray(trkpts){
    //console.log(trkpts);
    for(var i = 0; i < trkpts.length; i++){
        var item = trkpts[i];
        //console.log(item);
        var point = new wptType([],
            item.getAttribute("lat"),
            item.getAttribute("lon"),
            item.getElementsByTagName("ele")[0].innerHTML,
            new Date(item.getElementsByTagName("time")[0].innerHTML)
            //item.getElementsByTagName("magvar")[0].innerHTML,
            //item.getElementsByTagName("geoidheight")[0].innerHTML,
            //item.getElementsByTagName("sym")[0].innerHTML,
            //item.getElementsByTagName("type")[0].innerHTML,
            //item.getElementsByTagName("fix")[0].innerHTML,
            //item.getElementsByTagName("sat")[0].innerHTML,
            //item.getElementsByTagName("hdop")[0].innerHTML,
            //item.getElementsByTagName("vdop")[0].innerHTML,
            //item.getElementsByTagName("pdop")[0].innerHTML,
            //item.getElementsByTagName("ageofgpsdata")[0].innerHTML,
            //item.getElementsByTagName("dgpsid")[0].innerHTML,
            //item.getElementsByTagName("name")[0].innerHTML,
            //item.getElementsByTagName("cmt")[0].innerHTML,
            //item.getElementsByTagName("desc")[0].innerHTML,
            //item.getElementsByTagName("src")[0].innerHTML
            //item.getElementsByTagName("link")[0].innerHTML
        );
        pointsGlobalArray.push(point);
    }
    console.log('inside function',pointsGlobalArray);
    //fillScope();
}

//function fillScope($scope){
//    $scope.points = pointsGlobalArray;
//}

//var pointList = angular.module('pointList', []);
//pointList.controller('PointsCtrl', function setData($scope){
//    $scope.$apply(function(){
//        $scope.points = pointsGlobalArray;
//    });
//    //if(pointsGlobalArray.length > 0)
//    //    $scope.points = pointsGlobalArray;
//    //setTimeout(function(){
//    //    setData($scope)
//    //},2000);
//    console.log('inside angular points', $scope.points);
//    console.log('inside angular points global array', pointsGlobalArray);
//});