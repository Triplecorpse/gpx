/**
 * Created by Eldar_Khaitov on 7/28/2015.
 */

var descriptionBase = function(base) {
        this.name = base[0];
        this.cmt = base[1];
        this.desc = base[2];
        this.src = base[3];
        this.link = base[4]; //array
    },

    wptType = function(point, lat, lon, ele, time, magvar, geoidheight, sym, type, fix, sat, hdop, vdop, pdop, ageofgpsdata, dgpsid, name, cmt, desc, src, link){
        this.__proto__ = new descriptionBase([name, cmt, desc, src, link]);

        if((!lat || !lon) && (!point[0] || !point[1])){
            throw "Latitude and longitude required"
        }

        this.lat = point[0] || lat;
        this.lon = point[1] || lon;
        this.ele = point[2] || ele;
        this.time = point[3] || time;
        this.magvar = point[4] || magvar;
        this.geoidheight = point[5] || geoidheight;
        this.sym = point[6] || sym;
        this.type = point[7] || type;
        this.fix = point[8] || fix;

        if(point[9] || sat >= 0) {
            this.sat = point[9] || sat;
        }

        this.hdop = point[10] || hdop;
        this.vdop = point[11] || vdop;
        this.pdop = point[12] || pdop;
        this.ageofgpsdata = point[13] || ageofgpsdata;
        this.dgpsid = point[14] || dgpsid;

        if((this.lat < -90) || (this.lat > 90)){
            throw "Latitude must be in range from -90 to 90"
        }

        if((this.lon < -180) || (this.lon > 180)){
            throw "Longitude must be in range from -180 to 180"
        }

        if((this.magvar < 0) || (this.lon > 360)){
            throw "Magvar must be in range from 0 to 360"
        }
    },

    rteType = {
        __proto__: descriptionBase,
        points: []
    },

    trkType = {
        __proto__: descriptionBase,
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