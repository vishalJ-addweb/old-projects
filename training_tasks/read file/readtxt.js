const fs = require('fs');

var data = fs.readFileSync('read.txt');
var student = JSON.parse(data);
console.log(student);
