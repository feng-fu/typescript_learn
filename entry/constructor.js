var Greeter = (function () {
    function Greeter(greet) {
        this.greet = greet;
    }
    Greeter.prototype.greeting = function () {
        console.log(this.greet);
    };
    return Greeter;
}());
Greeter.greetEveryOne = 'hello everyone.';
var g = new Greeter('hello world.');
g.greeting();
var marker = Greeter;
marker.greetEveryOne = 'hello jack';
var f = new marker('jack');
f.greeting();
