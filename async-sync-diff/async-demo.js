fs = require('fs');

//FUNCTION IS CALLED PHONE NUMBER BECAUSE THE IDEA EXTENDS FROM CALLING A CALL CENTER PHONE NUMBER AND HAVE THEM CALL YOU BACK WHEN THEY'RE READY SO THAT YOU CAN CONTINUE TO GO ABOUT YOUR DAY WITHOUT WAITING ON HOLD FOR THEM TO ANSWER
function phoneNumber (err, data) {
    console.log('data', data);
}

fs.readdir('c:/', phoneNumber);

console.log("this comes after");