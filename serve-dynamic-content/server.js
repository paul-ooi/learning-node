var express = require('express');//USE EXPRESS IN A VARIABLE
var app = express();//VARIABLE APP IS USING AN INSTANCE OF EXPRESS

app.use(express.static(__dirname));
//app.listen(#) LISTENS TO THE SERVER AT PORT (#)
var server = app.listen(3000, () => {
    console.log('server is listening on port: ', server.address().port);//This is outputted in the Terminal, not on the browser console
});