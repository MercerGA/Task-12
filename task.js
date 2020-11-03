// Task 1
var user = {
    name: 'George',
    age: 23,
    gender: 'Male'
  };
if (user.age >= 18 && user.gender == 'Male') {
    console.log ('Adult Boy')
}else if (user.age < 18) {
    console.log ('Underage')
}else {
    console.log ('Error')
}
// Task 2
let cars = ["Audi","Bmw", "Lexus", "Volkswagen", "Ferrari", "Porsche"];
for (let i = 1; i < cars.length; i++) {
    console.log(cars [i])
}
// Task 3
let names = ["George","John", "Mariam", "Gabriel", "Stacy", "Lana"];
for (let i = 0; i < names.length; i++) {
    if (names[i].length > 4) {
        console.log(names[i])
    }
}
// Task 4
let numbers = [2, 13, 17, 22, 40, 50, 73];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2==0) {
        console.log(numbers[i])
    }
}
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2==1) {
        console.log(numbers[i])
    }
}
// Task 5
let user2 = ['Name', 'Lastname', 25, 50, 'Gender', [100, 500], 700]; {
    console.log(user2[5][1])
}
// Task 6
var person = {
    name: 'John',
    surname: 'Wick',
    gender: 'Male',
    eyecolor: 'Blue'
}
console.log(person.eyecolor)
// Task 7
let taskforce = ['Ghost', 'Price', 'MacTavish', 'Soap', 'Gigs', 'Roach']
for (let i = 0; i < taskforce.length; i++) {
    console.log(taskforce[i])
}