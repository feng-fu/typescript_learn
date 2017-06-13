var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.getName = function () {
        return this.name;
    };
    return Animal;
}());
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.bark = function () {
        return this.name + " make noise bark...";
    };
    return Dog;
}(Animal));
var Child = (function () {
    function Child(name) {
        this.name = name;
    }
    return Child;
}());
var Children = (function () {
    function Children(name) {
        this.name = name;
    }
    return Children;
}());
var black = new Dog('black');
console.log(black.bark());
var Big = (function () {
    function Big(size) {
        this.size = size;
    }
    return Big;
}());
var Size = new Big('small');
