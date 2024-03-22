// Iterate 0 to 10 using for loop, do the same using while and do while loop
for (let i = 0; i <= 10; i++) {
    console.log(i)
}
let w1 = 0
while(w1<=10){
    console.log(w1)
    w1++
}
let d1 = 0
do {
    console.log(d1)
    d1++
}
while(d1<=10)

// Iterate 10 to 0 using for loop, do the same using while and do while loop
for (let i = 10; i >= 0; i--) {
    console.log(i)
}
let w2 = 10
while(w2>=0){
    console.log(w2)
    w2--
}
let d2 = 10
do {
    console.log(d2)
    d2--
}
while(d2>=0)

// Iterate 0 to n using for loop
const readlineSync = require('readline-sync')
const n = readlineSync.question('Enter value of n: ')
for(let i=0; i<=n; i++) {
    console.log(i)
}

// Write a loop that makes the following pattern using console.log():
//     #
//     ##
//     ###
//     ####
//     #####
//     ######
//     #######
const p1 = readlineSync.question('No of rows needed: ')
let pattern1 = ''
for(let i = 1; i <= p1; i++){
    pattern1 += '#'
    console.log(pattern1)
}

// Use loop to print the following pattern:
// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100
const p2 = readlineSync.question('No of rows needed: ')
for(let i = 0; i < p2; i++){
    console.log(`${i} x ${i} = ${i*i}`)
}

// Using loop print the following pattern
//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000
const p3 = readlineSync.question('No of rows needed: ')
for(let i = 0; i < p3; i++){
    console.log(`${i} ${i*i} ${i*i*i}`)
}

// Use for loop to iterate from 0 to 100 and print only even numbers
for(let i=0;i<=100;i++){
    if(i % 2 === 0){
        console.log(i)
    }
}

// Use for loop to iterate from 0 to 100 and print only odd numbers
for(let i=0;i<=100;i++){
    if(i % 2 !== 0){
        console.log(i)
    }
}

// Use for loop to iterate from 0 to 100 and print only prime numbers
for(let i=2;i<=100;i++){
    let isPrime = true
    for(let j=2; j<=Math.sqrt(i);j++) {
        if(i%j ===0){
            isPrime = false
            break
        }
    }
    if(isPrime){
        console.log(i)
    }
}

// Use for loop to iterate from 0 to 100 and print the sum of all numbers.
// The sum of all numbers from 0 to 100 is 5050.
let sum100 = 0
for(let i=0;i<=100;i++){
    sum100 += i
}
console.log(sum100)

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
let sumEven100 = 0
let sumOdd100 = 0
for(let i=0;i<=100;i++){
    if(i % 2 === 0){
        sumEven100 += i
    }
    else {
        sumOdd100 += i
    }
}
console.log(sumEven100)
console.log(sumOdd100)

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
//   [2550, 2500]
let sumArr100 = []
sumArr100.push(sumEven100)
sumArr100.push(sumOdd100)
console.log(sumArr100)

// Develop a small script which generate array of 5 random numbers
let arrRan = []
for(let i = 0; i < 5; i++) {
    arrRan.push(Math.floor(Math.random()*10))
}
console.log(arrRan)

// Develop a small script which generate array of 5 random numbers and the numbers must be unique
let arrRanUnq = []
for(let i = 1; i <= 5; i++) {
    let num = Math.floor(Math.random()*10)
    while(arrRanUnq.includes(num)){
      num = Math.floor(Math.random()*10)
    }
    arrRanUnq.push(num)
}
console.log(arrRanUnq)

// Develop a small script which generate a six characters random id:
// 5j2khz
let allChar = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890'
let ranstr = ''
for(let i = 0;i<6;i++){
   let ranchar = allChar[Math.floor(Math.random ()* allChar.length)]
   ranstr += ranchar
}
console.log(ranstr)