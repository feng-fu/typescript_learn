let isDone: boolean = false

let decLiteral: number = 12

let firstName: string = 'hello'

let list: Array<number> = [1,3,4]



// 元组  Tuple 


let x:[string, number]

x = ['19', 23]



x[1].toString()


x[3] = 'false'  // 只能是字符串或者数字类型


// enum 枚举


enum Color {Red, Green, Blue}
let c:Color = Color.Blue


let colorRed: string = Color[2]


console.log(colorRed)



//  任意值 。 any

let notSure:any = 4


notSure = 'hello world'


let list2: any[] = [1, true, 'free']


// 空值 。 void

let warning: void = undefined || null


let u: undefined = undefined

let n: null = null

