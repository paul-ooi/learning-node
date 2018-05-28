var express = require('express');//USE EXPRESS IN A VARIABLE
var app = express();//VARIABLE app IS USING AN INSTANCE OF EXPRESS APPLICATION (INSTALLED AS A NODE MODULE)

console.log(__dirname);//THIS MESSAGE OUTPUTS THE CURRENT DIRECTORY THIS FILE IS IN, SINCE __dirname IS A NODE COMMAND IT IS SHOWN IN THE CLI ON THE THE SERVER SIDE THROUGH NodeMon

//USING app ALLOWS US TO USE THE PROPERTIES AND FUNCTIONS OF THE EXPRESS APPLICATION
app.use(express.static(__dirname));
//app.use PROVIDE A BASE TARGET STRING IN THE PARAMETER TO TELL THE app WHERE TO LOOK
//express.static DEFINES THE ROOT DIRECTORY WHERE TO SERVE STATIC ASSETS TO THE CLIENT
//__dirname GETS THE DIRECTORY NAME OF THE CURRENT MODULE

// //CREATE A ROUTE FOR THE BROWSER TO ACCESS
    // //THIS CASE IS LOCALHOST:3000/messages WILL DISPLAY hello TEXT ON THE PAGE
    // app.get('/messages', (req, res) => {
    //     res.send('hello');
    // })

//USE AN OBJECT TO DISPLAY ON THE PAGE
var messages = [
    {name: 'Tim', message: 'Hi'},
    {name: 'Mark', message: 'What\'s up\?'}
];

//PASS THE OBJECT TO BE SENT TO THE MESSAGES AREA
app.get('/messages', (req, res) => {
    res.send(messages);
})

//app.listen(#) LISTENS TO THE SERVER AT PORT (#)
var server = app.listen(3000, () => {
    console.log('server is listening on port: ', server.address().port);//This is outputted in the Terminal, not on the browser console
});