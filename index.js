//Enumerate MyFitnessPal foods

var curl = require('curlrequest');
var fs = require('fs');
var http = require("http");
var RateLimiter = require('limiter').RateLimiter;
var limiter = new RateLimiter(1, 500);

function test(code) {
    var options = {
        host: "45.32.231.36",
        port: 31280,
        path: 'http://www.myfitnesspal.com/food/calories/' + code,
        headers: {
            Host: "www.myfitnesspal.com"
        }
    };
    http.get(options, function (res) {
        console.log(code, res.statusCode)
        if (res.statusCode == 200) {
            fs.writeFile("enum/" + code, "", () => { })
        }
    });
}


var code = 0;
setInterval(() => test(code++), 1)
setInterval(() => test(code++), 1)