// 参数属性
var Animal = (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.greeting = function () {
        return this.name;
    };
    return Animal;
}());
var password = 'secret passcode';
var Pass = (function () {
    function Pass() {
    }
    Object.defineProperty(Pass.prototype, "fullName", {
        get: function () {
            return this._fullname;
        },
        set: function (param) {
            if (password && password === 'secret passcode') {
                this._fullname = param;
            }
            else {
                throw (new Error('password is wrong'));
            }
        },
        enumerable: true,
        configurable: true
    });
    return Pass;
}());
var pass = new Pass();
pass.fullName = 'ajax';
console.log(pass.fullName)