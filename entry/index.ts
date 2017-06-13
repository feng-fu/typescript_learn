class Animal {
  name: string
  constructor(name: string) {
    this.name  = name
  }
  getName():string {
    return this.name
  }
}

class Dog extends Animal {
  constructor(name:string) {
    super(name)
  }
  bark() {
    return `${this.name} make noise bark...`
  }
}


class Child {
  private name: string
  constructor(name) {
    this.name = name
  }
}

class Children {
  public name: string
  constructor(name) {
    this.name = name
  }
}



let black = new Dog('black')

console.log(black.bark())


class Big {
  readonly size: string
  constructor(size) {
    this.size = size
  }
}

var Size = new Big('small')