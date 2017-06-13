var Row = (function () {
    function Row(scale) {
        this.scale = scale;
    }
    Row.prototype.caculationInstance = function (point) {
        var xInstance = point.x - Row.position.x;
        var yInstance = point.y - Row.position.y;
        return Math.sqrt(xInstance * xInstance + yInstance * yInstance) / this.scale;
    };
    return Row;
}());
Row.position = {
    x: 3,
    y: 4
};
var row = new Row(10);
console.log(row.caculationInstance({ x: 10, y: 20 }));
