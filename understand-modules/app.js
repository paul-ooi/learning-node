var myMod = require("./greet");
var another = require("./greet/method.js");
var greet3 = require("./greet/greet3.js");
var greet3b = require("./greet/greet3.js");
var greet5 = require("./greet/revealing-module-pattern");
const greet = require("./greet");




myMod.english();
myMod.french();
another.greets(); // greets is a property added to the module.exports object from the method.js file

greet3.greet();
greet3.greeting = "Inject new change"; // this is applied in the greet3b function call because Node's module.exports caches the previously inpormted file. so greet3b is actually a reference to the object from greet3
greet3b.greet();

greet5.greet.myGreet();
