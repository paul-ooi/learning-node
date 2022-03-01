var greetings = require('./greetings.json');

var greet = function() {
	// console.log("Hello"); //Return a simple text
	console.log(greetings.en); // Send back an object with properties to access
};

module.exports = greet;
