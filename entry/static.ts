class Row {
  static position = {
    x: 3,
    y: 4
  }
  constructor(public scale: number) {}
  caculationInstance(point:{x: number, y: number}) {
    let xInstance = point.x - Row.position.x
    let yInstance = point.y - Row.position.y
    return Math.sqrt(xInstance * xInstance + yInstance * yInstance) / this.scale
  }
}



var row = new Row(10)

console.log(row.caculationInstance({x:10,y:20}))