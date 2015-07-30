var c = {c:0};
var a = function(a){
    this.a = a;
    this.__proto__ = c;
};
var a1 = new a(1);
var point3 = new a(2);
//a.__proto__ = c;
//b.__proto__ = c;
a1.c = 3;
//b.c = 2;
console.log(point3.c);
for(var item in point3) {
    console.log(point3["item"]);
    console.log(point3);
}