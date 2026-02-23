console.log("Hello World! This is my first Node.js app!");

const fs = require('fs');

fs.readFile('file.txt', 'utf8', function (err, data) {
    if (err) throw err;
    console.log(data);
});