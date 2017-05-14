function greet(person) {
    console.log(person.name + " is a " + (person.sex ? 'male' : 'female') + " who is " + person.age + " years old.");
}
var jane = {
    name: 'jane',
    age: 10,
    sex: false
};
greet(jane);
