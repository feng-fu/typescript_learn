function f(isDefine) {
    if (isDefine) {
        return false;
    }
    else {
        return true;
    }
}
function sumMtrix(matrix) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var j = 0; j < currentRow.length; j++) {
            sum += currentRow[j];
        }
    }
    return sum;
}
function result(condition, x) {
    if (condition) {
        x += 10;
    }
    else {
        x += 8;
    }
    return x;
}
function cityDictonary(bool) {
    var getCity = function () {
        return '1';
    };
    if (bool) {
        getCity = function () {
            return 'New York.';
        };
    }
    return getCity;
}
var Print = (function () {
    function Print(element, num) {
        this.element = element;
        this.num = num;
    }
    Print.prototype.getPrintElement = function () {
        var ele = this.element;
        var num = this.num;
        var obj = {};
        obj[num] = ele;
        return obj;
    };
    return Print;
}());
var P = new Print('a', 1);
console.log(P.getPrintElement());
