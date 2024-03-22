let readlinesync = require('readline-sync')
// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
// Enter your age: 30
// You are old enough to drive.
// Enter your age:15
// You are left with 3 years to drive.
let birthYear = Number(readlinesync.question('birth year: '))
let presentAge = 2024 - birthYear
if(presentAge>18){
  console.log(`You are ${presentAge} years old. You are old enough to drive`)
}
else{
  console.log(`You are ${presentAge}. You will be allowed to drive after ${18-presentAge} years.`)
}

// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
// Enter your age: 30
// You are 5 years older than me.
let myAge = Number(readlinesync.question('my age: '))
let yourAge = Number(readlinesync.question('your age: '))
let diff = myAge - yourAge
if(diff>0){
    console.log(`I am ${diff} years older than you`)
}
else if(diff===0) {
  console.log('We are same age')
}
else {
    console.log(`you are ${Math.abs(diff)} years older than me`)
}

// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
//     using if else
//     ternary operator.
//   let a = 4
//   let b = 3
//   4 is greater than 3
let a = 4
let b = 3
if(a>b){
    console.log('a is greater than b')
}
else {
    console.log('a is less than b')
}
a>b
  ? console.log('a is greater than b')
  : console.log('a is less than b')

// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
// Enter a number: 2
// 2 is an even number
// Enter a number: 9
// 9 is is an odd number.
let num = Number(readlinesync.question('Enter a number: '))
if(num%2 === 0){
    console.log(`${num} is a even number`)
}
else {
    console.log(`${num} is a odd number`)
}