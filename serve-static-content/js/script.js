$(() => {//Shorthand for the Document ready function
    //TARGET SEND BUTTON ON CLICK and CALL THE ADD MESSASGES FUNCTION
    $('#send').click(() => {
        // console.log(__dirname);//THIS CONSOLE LOG DOESN'T WORK BECAUSE _dirname IS DEFINED WITHIN NODE ENVIRONMENT AND THIS IS IN THE BROWSER, THERE IS AN ERROR IN THE CONSOLE
       //USE THIS TO TEST THE SEND BUTTON
        // addMessages({
        //     name: "tim",
        //     message: "hello there"
        // });

    })
    getMessages();
})

/**
 * addMessages - v1.0
 * DISPLAY MESSAGE(S) IN A CONTAINER WITH THE NAME OF THE SENDER AND THE MESSAGE
 * @param {object} message - Name and Message from the sender
 */
function addMessages(message) {
    $('#messages').append(
        //USING TEMPLATE LITERALS ALSO KNOWN AS TEMPLATE STRINGS. STRING LITTERALS, THAT ALLOW EMBEDDED EXPRESSIONS, ENCLOSED WITH BACK TICKS.
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
        `<h4> ${message.name} </h4> <p> ${message.message} </p>`
    )
}

/**
 * GET MESSAGES FROM THE /messages ROUTE
 */
function getMessages() {
    $.get('http://localhost:3000/messages',
        (data) => {
            // console.log(data); //USE THIS TO TEST THAT THIS FUNCTION IS RETURNING THE RIGHT DATA
            
            // ITERATE THROUGH THE DATA AND DISPLAY EACH MESSAGE IN THE MESSAGE DIV, USING AN INLINE CALLBACK
            // data.forEach(message => {
            //     addMessages(message);
            // }, this);

            // REWRITE THE DATA TO SEND DIRECTLY TO THE addMessages FUNCTION, SINCE THE INLINE CALLBACK USES THE SAME PARAMETER IN THE addMessages, YOU CAN REWRITE forEach LIKE BELOW 
            data.forEach(addMessages)
        })
}