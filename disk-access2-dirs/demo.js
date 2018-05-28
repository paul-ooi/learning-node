var fs = require("fs");

//readdir PARAM#1 IS THE PATH AS A STRING, PARAM#2 IS A CALLBACK
fs.readdir('c:/', (err, data) => {
    console.log(data);
});