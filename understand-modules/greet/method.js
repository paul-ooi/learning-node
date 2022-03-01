// Module Design using object

var greets = function() {

    let phrase = "";

    for (let i = 0; i < 2; i++){
        phrase += "Hey World! ";
    }
    console.log( phrase) ;
}

module.exports.greets = greets;