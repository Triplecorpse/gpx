/**
 * Created by Eldar_Khaitov on 7/28/2015.
 */

var metadata = function(base) {
        this.name = base[0];
        this.cmt = base[1];
        this.desc = base[2];
        this.src = base[3];
        this.link = base[4]; //array
    },

    wptType = function(lat, lon, ele, time, magvar, geoidheight, sym, type, fix, sat, hdop, vdop, pdop, ageofgpsdata, dgpsid, name, cmt, desc, src, link, auxData){
        this.__proto__ = new metadata([name, cmt, desc, src, link]);

        var validator = {
            'latitude': ((lat >= -90) && (lat <= 90)),
            'longitude': ((lon >= -180) && (lon <= 180)),
            'magnetic variation': magvar && ((magvar >= 0) && (magvar < 360)),
            'time stamp': time && (time instanceof Date),
            'fix': fix && ((fix === 'none') || (fix === '2d') || (fix === '3d') || (fix === 'dgps') || (fix === 'pps')),
            'satellite count': sat && (sat >= 0),
            'differential gps station': dgpsid && ((dgpsid >= 0) && (dgpsid <= 1023))
        };

        for(var condition in validator){
            if((validator.hasOwnProperty(condition)) && !condition){
                throw "Error in " + condition + " field.";
            }
        }

        this.lat = lat;
        this.lon = lon;
        this.ele = ele;
        this.time = time;
        this.magvar = magvar;
        this.geoidheight = geoidheight;
        this.sym = sym;
        this.type = type;
        this.fix = fix;
        this.sat = sat;
        this.hdop = hdop;
        this.vdop = vdop;
        this.pdop = pdop;
        this.ageofgpsdata = ageofgpsdata;
        this.dgpsid = dgpsid;

        this.pointNum = auxData[0];
        this.trackSegNum = auxData[1];
        this.trackNum = auxData[2];
    },

    rteType = {
        __proto__: metadata,
        points: []
    },

    trkType = {
        __proto__: metadata,
        points: []
    };

function wptTypeTest(){

    console.log("point1 creation started");
    var point1 = new wptType([1,2,3,new Date()]);
    console.log("point1 created");
    console.log(point1);

    console.log("point2 creation started");
    var point2 = new wptType([],1,2,3.3,new Date());
    console.log("point2 created");
    console.log(point2);

    console.log("point3 creation started");
    var point3 = new wptType([],1.2,2.1);
    point3.__proto__.name = "point3";

    for(var item in point3) {
        console.log(item, ": ", point3[item]);
    }

    console.log(point3);
    console.log(point3.__proto__);
    console.log(point2.__proto__);
}