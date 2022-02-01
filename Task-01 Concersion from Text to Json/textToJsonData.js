var fs = require('fs');
var data = fs.readFileSync("customer.txt", "utf8");

var finalData = JSON.parse(data);
console.log(finalData);


