class Greeter {
  static greetEveryOne = 'hello everyone.'
  constructor(public greet: string) {}
  greeting() {
    console.log(this.greet)
  }
}

let g:Greeter = new Greeter('hello world.')

g.greeting()


let markers: typeof Greeter = Greeter

markers.greetEveryOne = 'hello jack'

let ddddd:Greeter = new markers('jack')

ddddd.greeting()