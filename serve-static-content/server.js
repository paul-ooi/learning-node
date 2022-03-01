var express = require("express"); //USE EXPRESS IN A VARIABLE
var bodyParser = require("body-parser");
var app = express(); //VARIABLE app IS USING AN INSTANCE OF EXPRESS APPLICATION (INSTALLED AS A NODE MODULE)
var http = require("http").Server(app);
var io = require("socket.io")(http);
var mongoose = require("mongoose");

console.log(__dirname); //THIS MESSAGE OUTPUTS THE CURRENT DIRECTORY THIS FILE IS IN, SINCE __dirname IS A NODE COMMAND IT IS SHOWN IN THE CLI ON THE THE SERVER SIDE THROUGH NodeMon

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

// DB URL
var dbUrl = "mongodb://waldo:l3arning@ds143461.mlab.com:43461/lynda_node";

// CREATE A MODEL TO HOLD THE SCHEMA FOR A MESSAGE
var Message = mongoose.model("Message", {
	name    : String,
	message : String
});

// //USE AN OBJECT TO DISPLAY ON THE PAGE
// var messages = [
//     {name: 'Tim', message: 'Hi'},
//     {name: 'Mark', message: 'What\'s up\?'}
// ];

//PASS THE OBJECT TO BE SENT TO THE MESSAGES AREA
app.get("/messages", (req, res) => {
	// res.send(messages); //REPLACE THIS WITH THE MESSAGES FROM THE MONGO DB
	Message.find({}, (err, messages) => {
		res.send(messages);
	});
});

app.use(bodyParser.json()); //THIS TELLS EXPRESS TO USE BODY PARSER AND EXPECT JSON FROM THE REQUEST BODY
app.use(bodyParser.urlencoded({ extended: false })); // WHAT COMES IN FROM THE BROWSER, IS URL ENCODED SO THIS LINE HELPS BODYPARSER READY THE DATA
//PASS THE OBJECT TO BE SENT TO THE MESSAGES AREA
app.post("/messages", (req, res) => {
	// console.log(req.body); // NEED TO TEST BY DISPLAYING THE DATA IN THE BODY OF THE REQUEST, THIS WILL RETURN AN UNDEFINED VALUE SINCE EXPRESS DOESN'T HAVE A WAY TO PARSE THIS BODY. USE body-parser PACKAGE (npm install -s body-parser)
	// ONCE THE TEST FOR THE REQUEST BODY WORKS, ADD TO THE messages ARRAY

	var message = new Message(req.body); // CREATE A NEW OBJECT AND PASS THE MESSAGE IN THE CONSTRUCTOR
	message.save((err) => {
		if (err) {
			sendStatus(500);
		}
		// messages.push (req.body); // REMOVE THIS ONCE THE DB IS CONNECTED
		io.emit("message", req.body);
		res.sendStatus(200); // THIS WILL LET THE CLIENT KNOW ALL IS OKAY
	});
});

io.on("connection", (socket) => {
	console.log("user connected"); // THIS WILL OUTPUT TO THE NODEMON CONSOLE TO ALERT US THAT SOMEONE HAS CONNECTED
});

mongoose.connect(dbUrl, { useNewUrlParser: true }, (err) => {
	console.log("connected to MOngo DB", err);
});

//app.listen(#) LISTENS TO THE SERVER AT PORT (#)
var server = http.listen(3000, () => {
	console.log("server is listening on port: ", server.address().port); //This is outputted in the Terminal, not on the browser console
});
