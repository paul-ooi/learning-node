var fs = require('fs');

//CREATE DATA TO WRITE TO THE NEW FILE THAT WILL BE CREATED
var data = {
    name: 'Bob',
    age: 33
};

// //writeFile IS WHAT CREATES THE NEW FILE AND ADDS DATA FROM THE 2ND PARAMETER INTO IT
/**
 * WRITE FILE METHOD
 * @param {string} - #1 path and name of the .json file
 * @param {JSON Object} - #2 data written to the JSON file
 */
// fs.writeFile("data.json", data);//THIS LINE PASSES IN THE JSON OBJECT data BUT THE WRITEFILE METHOD REQUIRES THAT THE DATA PASSED TO IT BE A STRING VALUE, OTHERWISE IT OUTPUTS [object Object]

//JSON.stringify WILL CONVERT THE ABOVE OBJECT TO A PROPER JSON FORMAT, ALTERNATIVELY THE OBJECT CAN BE RE-WRITTEN WITH DOUBLE QUOTES AROUND KEY AND VALUES
fs.writeFile("data.json", JSON.stringify(data), (err) => {//WITHOUT A CALLBACK, CALLING AN ASYNCHRONOUS METHOD LIKE writeFile DISPLAYS A DEPRICATION WARNING
   console.log("write finished", err); //OUTPUT AN ERROR IF THERE IS ANY 
})