# LEARNING JS & NODE

## Invoking Functions
>Create a function, and invoke as normal
``` javascript
function greet() {
    console.log('Hello');
}
greet();
```

>Pass a function like any other object into another function and invoke it
``` javascript
function logGreeting(fn) {
    fn(); // INVOKE THE FUNCTION THAT IS PASSED INTO IT
}
logGreeting(greet); // USE A NAMED FUNCTION
```

>Also use functions assigned to a variable
```javascript
var greeting = function() {
    console.log('greeting from in the variable assigned function');
}
logGreeting(greeting); // USE VARIABLE THAT WAS ASSIGNED A FUNCTION
```

## Modules
``` javascript
require ('./greet'); // Require is apart of JS core, uses a string to reference the filepath. Assumes js file, but can read json and 
```

- Beware of using `exports = ` in place of `module.exports` since it is breaking the memory reference block. But if you mutate the exports object, you can extend the exports object. Use `exports.myCustomFunction = () =>{}`
- However, if you want to use ES6 and use `export function customName() {}`, you'll need to either use Babel in your project or name your files with `.mjs` extension