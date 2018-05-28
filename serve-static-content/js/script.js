$(() => {//Shorthand for the Document ready function
    //TARGET SEND BUTTON ON CLICK and CALL THE ADD MESSASGES FUNCTION
    $('#send').click(() => {
        console.log(__dirname);//THIS CONSOLE LOG DOESN'T WORK BECAUSE _dirname IS DEFINED WITHIN NODE ENVIRONMENT AND THIS IS IN THE BROWSER, THERE IS AN ERROR IN THE CONSOLE
        addMessages({
            name: "tim",
            message: "hello there"
        });
    })
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