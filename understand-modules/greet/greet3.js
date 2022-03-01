function Greetr() {
    this.greeting = "Hello World!!";
    this.greet = () => {
        console.log(this.greeting);
    }
}

module.exports = new Greetr();