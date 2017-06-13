// 参数属性
class Animal {
  constructor(private name: string) {}
  greeting() {
    return this.name
  }
}


let password = 'secret passcode'


class Pass {
  _fullname: string
  get fullName() {
    return this._fullname
  }
  set fullName(param: string) {
    if(password && password === 'secret passcode'){
      this._fullname = param
    } else 
    {
       throw(new Error('password is wrong'))
    }
  }
}

var pass = new Pass()
pass.fullName = 'ajax'




