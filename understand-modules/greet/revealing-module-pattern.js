// Only expose props and methods you want via a returned object, very common best practice to keep variables protected

var greetings = "This is a protected greeting";

function greet(){
    console.log(greetings);
}

module.exports.greet = {
    myGreet : greet
}