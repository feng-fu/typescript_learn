interface Person {
  name: string,
  age: number,
  sex: boolean
}


function greet(person:Person) {
  console.log(`${person.name} is a ${person.sex?'male':'female'} who is ${person.age} years old.`)
}


let jane = {
  name: 'jane',
  age: 10,
  sex: false
}

greet(jane)