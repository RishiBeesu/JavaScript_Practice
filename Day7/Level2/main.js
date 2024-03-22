// Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
function solveLinEquation(a,b,c,x) {
    let y = (-c - a*x)/b
    return y
}
console.log(solveLinEquation(1,1,1,1))

// Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
// console.log(solveQuadratic()) // {0}
// console.log(solveQuadratic(1, 4, 4)) // {-2}
// console.log(solveQuadratic(1, -1, -2)) // {2, -1}
// console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
// console.log(solveQuadratic(1, 0, -4)) //{2, -2}
// console.log(solveQuadratic(1, -1, 0)) //{1, 0}
function solveQuadEquation(a,b,c) {
    let discriminant = b*b - 4*a*c
    if(discriminant > 0){
        let x1 = (-b + Math.sqrt(discriminant))/2
        let x2 = (-b - Math.sqrt(discriminant))/2
        if(x1===x2) {
            return {x1}
        }
        else {
            return {x1,x2}
        }
    }
    else {
        return 'No real roots'
    }
}
console.log(solveQuadEquation(1, 0, -4))

// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(arr) {
    for(i of arr) {
        console.log(i)
    }
}
printArray([2,5,7])

// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
// showDateTime()
// 08/01/2020 04:08
function showDateTime() {
    let now = new Date()
    let day = now.getDay()
    day < 10
    ? day = `0${day}`
    : day
    let month = now.getMonth()
    month < 10
    ? month = `0${month}`
    : month
    let year = now.getFullYear()
    let hour = now.getHours()
    hour < 10
    ? hour = `0${hour}`
    : hour
    let minutes = now.getMinutes()
    minutes < 10
    ? minutes = `0${minutes}`
    : minutes
    console.log(`${day}/${month}/${year} ${hour}:${minutes}`)
}
showDateTime()

// Declare a function name swapValues. This function swaps value of x to y.
// swapValues(3, 4) // x => 4, y=>3
// swapValues(4, 5) // x = 5, y = 4
function swapValues(num1,num2) {
    let temp = num2
    num2 = num1
    num1 = temp
    return {num1,num2}
}
console.log(swapValues(4,5))

// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
// console.log(reverseArray([1, 2, 3, 4, 5]))
// //[5, 4, 3, 2, 1]
// console.log(reverseArray(['A', 'B', 'C']))
// //['C', 'B', 'A']
function reverseArray(arr) {
    let revArr = []
    for(i of arr){
        revArr.unshift(i)
    }
    return revArr
}
console.log(reverseArray([1,2,3,4,5]))

// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
function capitalizeArray(arr) {
    let capitalizedarray = []
    for(i of arr){
        capitalizedarray.push(i.toUpperCase())
    }
    return capitalizedarray
}
console.log(capitalizeArray(['a','bc','def']))

// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
function addItem(arr,value) {
    arr.push(value)
    return arr
}
console.log(addItem([1,2,3],4))

// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
function removeItem(arr,value) {
   arr.splice(value,1)
   return arr
}
console.log(removeItem([1,2,3,4,5],2))

// Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
function sumOfNumbers(number) {
    let sum = 0
    for(let i = 1; i<=number; i++) {
        sum += i
    }
    return sum
}
console.log(sumOfNumbers(100))

// Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
function sumOfOdds(number) {
    let sum = 0
    for(let i = 1; i<=number; i++) {
        if(i % 2 !== 0) {
            sum += i
        }
    }
    return sum
}
console.log(sumOfOdds(100))

// Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
function sumOfEven(number) {
    let sum = 0
    for(let i = 1; i<=number; i++) {
        if(i % 2 === 0) {
            sum += i
        }
    }
    return sum
}
console.log(sumOfEven(100))

// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
// evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.
function evensAndOdds(num) {
    let numOdd = 0
    let numEven = 0
    for(let i = 0; i<=num; i++) {
        if(i % 2 === 0){
            numEven++
        }
        else {
            numOdd++
        }
    }
    console.log(`The number of odds are ${numOdd}.`)
    console.log(`The number of evens are ${numEven}.`)
}
evensAndOdds(100)

// Write a function which takes any number of arguments and return the sum of the arguments
// sum(1, 2, 3) // -> 6
// sum(1, 2, 3, 4) // -> 10
function sum(...arg) {
    let ans = 0
    for(i of arg){
        ans += i
    }
    return ans
}
console.log(sum(1, 2, 3, 4, 5))

// Writ a function which generates a randomUserIp.
function randomUserIp() {
    let num1 = Math.floor(Math.random() * 256)
    let num2 = Math.floor(Math.random() * 256)
    let num3 = Math.floor(Math.random() * 256)
    let num4 = Math.floor(Math.random() * 256)
    return `${num1}.${num2}.${num3}.${num4}`
}
console.log(randomUserIp())

// Write a function which generates a randomMacAddress
function randomMacAddress() {
    const characters = '0123456789ABCDEF';
    let macAddress = '';
    for (let i = 0; i < 6; i++) {
        const randomChar1 = characters[Math.floor(Math.random() * characters.length)];
        const randomChar2 = characters[Math.floor(Math.random() * characters.length)];
        macAddress += randomChar1 + randomChar2 + (i < 5 ? ':' : '');
    }
    return macAddress;
}
console.log(randomMacAddress());

// Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
// console.log(randomHexaNumberGenerator());
// '#ee33df'
function randomHexaNumberGenerator() {
    const characters = '0123456789ABCDEF';
    let hexaNumber = '#';
    for (let i = 0; i < 6; i++) {
        const randomChar = characters[Math.floor(Math.random() * characters.length)];
        hexaNumber += randomChar
    }
    return hexaNumber;
}
console.log(randomHexaNumberGenerator())

// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
// console.log(userIdGenerator());
// 41XTDbE
function userIdGenerator() {
    const characters = '1234567890QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm'
    let userID = ''
    for(let i = 0; i < 7; i++){
        randomChar = characters[Math.floor(Math.random() * characters.length)]
        userID += randomChar
    }
    return userID
}
console.log(userIdGenerator())