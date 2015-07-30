/**
 * Created by Eldar_Khaitov on 7/27/2015.
 */
//function gpxInput(evt) {
//    var files = evt.target.files,
//        file;
//
//    for (var i = 0; file = files[i]; i++) {
//
//        var reader = new FileReader();
//
//        reader.onload = function(e) {
//            var gpxDocument = $.parseXML(reader.result);//new DOMParser().parseFromString(reader.result,"text/xml");
//            gpxOutput(gpxDocument);
//        };
//
//        reader.readAsText(file);
//    }
//}

(function loadFile() {
    var response = $.ajax(window.location.href + 'trk/2014-12-30 20.27.06 Day.gpx');
    createModel(response);
    //console.log(response);
})();

function createModel(AjaxResponseDocument){
    var gpxDocument = AjaxResponseDocument.responseText;
    var tracks = getTracks(gpxDocument);
    console.log('createModel',tracks);
    var routes = getRoutes(gpxDocument);
    var waypoints = getWaypoints(gpxDocument);
}

function getTracks(gpxDocument){
    try{
        console.log("gpxDoc", gpxDocument);
        var tracks = gpxDocument.getElementsByTagName("trk");
        console.log('getTracks',tracks);
        return tracks;
    }
    catch(e)
    {
        alert(e);
        throw e;
    }
}

function getTrackSegments(gpxDocument, track){

}

function getTrackPoints(gpxDocument, track, trackSegment){

}

function getRoutes(gpxDocument){

}

function getRoutePoints(gpxDocument, route){

}

function getWaypoints(gpxDocument){

}