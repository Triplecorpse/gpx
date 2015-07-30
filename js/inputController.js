/**
 * Created by Eldar_Khaitov on 7/27/2015.
 */
function gpxInput(evt) {
    var files = evt.target.files,
        file;

    for (var i = 0; file = files[i]; i++) {

        var reader = new FileReader();

        reader.onload = function(e) {
            var gpxDocument = $.parseXML(reader.result);//new DOMParser().parseFromString(reader.result,"text/xml");
            gpxOutput(gpxDocument);
        };

        reader.readAsText(file);
    }
}