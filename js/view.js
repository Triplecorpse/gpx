/**
 * Created by Eldar_Khaitov on 7/27/2015.
 */
document.getElementById('files').addEventListener('change', gpxInput, false);

function writeGpx(points){
    //var table = document.getElementById("gpxPoints");

    //remove old data
    //for(var i = table.children.length - 1; i >= 0; i--){
    //    if(table.children[i].className !== 'points-header'){
    //        table.removeChild(table.children[i]);
    //    }
    //}

    //happy path
    //for(i = 0; i < points.length; i++){
    //    var item = points[i];
    //    var point = [
    //        item.getAttribute("lat"),
    //        item.getAttribute("lon"),
    //        item.getElementsByTagName("ele")[0].innerHTML,
    //        new Date(item.getElementsByTagName("time")[0].innerHTML).toLocaleString()
    //    ];
    //
    //    var tr = document.createElement("tr");
    //    tr.className = "points-row";
    //    for(var j = 0; j < point.length; j++){
    //        var td = document.createElement("td");
    //        td.innerHTML = point[j];
    //        td.className = "points-data";
    //        tr.appendChild(td);
    //    }
    //
    //    table.appendChild(tr);
    //}
}