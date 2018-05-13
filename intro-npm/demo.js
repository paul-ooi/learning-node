//FIRST INSTALL LODASH (npm install lodash) LOCALLY TO THE FOLDER

//using the underscore symbol to hold the lodash package
var _ = require('lodash');//REQUIRE DOES NOT NEED A FULL PATH SINCE NODE ALREADY KNOWS THE DEFAULT PATH TO THE MODULES (node_modules);

//BY ASSIGNING LODASH TO THE UNDERSCORE, WE CAN NOW ACCESS THE PROPERTIES AND METHODS USING THE DOT NOTATION
console.log(_.random(1,10));


//INSTALL NodeMon package globally SO THAT YOU CAN MONITOR CHANGES TO A FILE (nodemon .\demo.js)

//TO MANAGE THE MANY PACKAGES A PROJECT DEPENDS ON, USE A package.json FILE
//CREATE IT BY USING THE TERMINAL AND TYPE  npm init
//FOLLOW THE QUESTIONS TO ALTER ANY OF THE DEFAULT VALUES, AT THE END CONFIRM YES TO CREATE FILE
//SHORTCUT COMMAND npm init --yes CREATES THE FILE WITH ALL THE DEFAULTS