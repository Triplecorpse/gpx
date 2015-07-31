/**
 * Created by Eldar_Khaitov on 7/27/2i15.
 */

(function getGpxDocument() {
    $.ajax({
        url: "http://triplecorpse.github.io/gpx/trk/2014-12-30 20.27.06 Day.gpx"
    }).done(function(responseText) {
        createModel($.parseXML(responseText));
    });
})();

function createModel(gpxDocument){
    var allTrackPoints = getTrackPoints(gpxDocument);
    var allTrackSegments = getTrackSegments(gpxDocument);
    var allTracks = getTracks(gpxDocument);

    for(var i = 0; i < allTrackSegments.length; i++){
        allTrackSegments[i].setAttribute("number", (i + 1).toString());
    }

    for(i = 0; i < allTracks.length; i++){
        allTracks[i].setAttribute("number", (i + 1).toString());
    }

    //create an array with trackpoints
    for(i = 0; i < allTrackPoints.length; i++){
        var item = allTrackPoints[i];
        //console.log(item);
        var lat = item.getAttribute("lat"),
            lon = item.getAttribute("lon"),
            
            ele = item.getElementsByTagName("ele")[0],
            dateTime = item.getElementsByTagName("time")[0],
            magvar = item.getElementsByTagName("magvar")[0],
            geoidheight = item.getElementsByTagName("geoidheight")[0],
            sym = item.getElementsByTagName("sym")[0],
            type = item.getElementsByTagName("type")[0],
            fix = item.getElementsByTagName("fix")[0],
            sat = item.getElementsByTagName("fix")[0],
            hdop = item.getElementsByTagName("fix")[0],
            vdop = item.getElementsByTagName("fix")[0],
            pdop = item.getElementsByTagName("fix")[0],
            ageofgpsdata = item.getElementsByTagName("fix")[0],
            dgpsid = item.getElementsByTagName("fix")[0],
            name = item.getElementsByTagName("fix")[0],
            cmt = item.getElementsByTagName("fix")[0],
            desc = item.getElementsByTagName("fix")[0],
            src = item.getElementsByTagName("fix")[0],
            link = item.getElementsByTagName("fix")[0];

        var point = new wptType(
            lat,
            lon,
            ele && ele.innerHTML,
            dateTime && new Date(dateTime.innerHTML).toLocaleString(),
            magvar && magvar.innerHTML,
            geoidheight && geoidheight.innerHTML,
            sym && sym.innerHTML,
            type && type.innerHTML,
            fix && fix.innerHTML,
            sat && sat.innerHTML,
            hdop && hdop.innerHTML,
            vdop && vdop.innerHTML,
            pdop && pdop.innerHTML,
            ageofgpsdata && ageofgpsdata.innerHTML,
            dgpsid && dgpsid.innerHTML,
            name && name.innerHTML,
            cmt && cmt.innerHTML,
            desc && desc.innerHTML,
            src && src.innerHTML,
            link && link.innerHTML,
            [i + 1, item.parentElement.getAttribute("number"), item.parentElement.parentElement.getAttribute("number")]
        );
        //console.log(point);
        pointsGlobalArray.push(point);
    }
    //console.log(pointsGlobalArray);

    var routes = getRoutes(gpxDocument);
    var waypoints = getWaypoints(gpxDocument);
}

function getTracks(gpxDocument){
    try{
        return gpxDocument.getElementsByTagName("trk");
    }
    catch(e) {
        alert(e);
        throw e;
    }
}

function getTrackSegments(gpxDocument, track){
    try{
        return gpxDocument.getElementsByTagName("trkseg");
    }
    catch(e)
    {
        alert(e);
        throw e;
    }

}

function getTrackPoints(gpxDocument, track, trackSegment){
    if(!track || !trackSegment){
        return gpxDocument.getElementsByTagName('trkpt');
    }
}

function getRoutes(gpxDocument){

}

function getRoutePoints(gpxDocument, route){

}

function getWaypoints(gpxDocument){

}