var isDone = false;
var decLiteral = 12;
var firstName = 'hello';
var list = [1, 3, 4];
// 元组  Tuple 
var x;
x = ['19', 23];
x[1].toString();
x[3] = 'false'; // 只能是字符串或者数字类型
// enum 枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Blue;
var colorRed = Color[2];
console.log(colorRed);
