//Enumerate MyFitnessPal foods

var curl = require('curlrequest');
var fs = require('fs');
var http = require("http");
var RateLimiter = require('limiter').RateLimiter;
var limiter = new RateLimiter(1, 500);
Array.max = function( array ){
    return Math.max.apply( Math, array );
};
var code = fs.readdirSync("enum").map(Number).sort(function sortNumber(a,b) {return a - b;}).reverse()[0];
console.log(code);


function test(code) {

   /* var options = {
        /*host: "45.32.231.36",
        port: 31280,
        path: ,
        headers: {
            Host: "www.myfitnesspal.com"
        }
};*/
    http.get('http://www.myfitnesspal.com/food/calories/' + code, function (res) {
        console.log(code, res.statusCode)
        if (res.statusCode == 200) {
            fs.writeFile("enum/" + code, "", () => { })
        }

        test(code++)
    });
}



for (var i = 0; i < 1000; i++) {
    test(code++)
}/* */