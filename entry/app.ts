function f(isDefine: boolean) {
  if(isDefine) {
    return false
  }
  else {
    return true
  }
}

function sumMtrix(matrix: number[][]):number {
  var sum:number = 0
  for(let i:number = 0;i < matrix.length; i++) {
    var currentRow:number[] = matrix[i]
    for(let j:number = 0;j < currentRow.length;j++) {
      sum += currentRow[j]
    }
  }
  return sum
}

function result(condition: boolean, x: number):number {
  if(condition) {
    x += 10
  }
  else {
    x += 8
  }
  return x
}


function cityDictonary(bool: boolean):object {
  var getCity:object = function() {
    return '1'
  }
  if(bool) {
    getCity = function() {
      return 'New York.'
    }
  }
  return getCity
}

class Print {
  element: string
  num: number
  constructor(element: string, num: number) {
    this.element = element
    this.num = num
  }
  getPrintElement():object {
    let ele = this.element
    let num = this.num
    let obj = {}
    obj[num] = ele
    return obj
  }
}


var P = new Print('a', 1)
console.log(P.getPrintElement())