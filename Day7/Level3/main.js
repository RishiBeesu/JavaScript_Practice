const readlinesync = require('readline-sync')
// Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
// userIdGeneratedByUser()
// 'kcsy2
// SMFYb
// bWmeq
// ZXOYh
// 2Rgxf
// '
// userIdGeneratedByUser()
// '1GCSgPLMaBAVQZ26
// YD7eFwNQKNs7qXaT
// ycArC5yrRupyG00S
// UbGxOFI7UXSWAyKN
// dIV0SSUTgAdKwStr
// '
function userIdGeneratedByUser() {
    const characters = '1234567890QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm'
    let idLength = Number(readlinesync.question('Enter length of ID required: '))
    let numberOfID = Number(readlinesync.question('Enter number of ID\'s required: '))
    let finalID = ''
    for(let i = 0; i < numberOfID; i++) {
        let id = ''
        for(let j = 0; j < idLength; j++) {
            let randomChar = characters[Math.floor(Math.random() * characters.length)]
            id += randomChar
        }
        if(i === 0){
            finalID += id
        }
        else {
            finalID = finalID + "\n" + id 
        }
    }
    return finalID
}
console.log(userIdGeneratedByUser())

// Write a function name rgbColorGenerator and it generates rgb colors.
// rgbColorGenerator()
// rgb(125,244,255)
function rgbColorGenerator() {
    let color = []
    for(let i = 0; i < 3; i++) {
        randomNum = Math.floor(Math.random() * 256)
        color.push(randomNum)
    }
    let [red, green, blue] = color
    return `rgb(${red},${green},${blue})`
}
console.log(rgbColorGenerator())

// Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
function arrayOfHexaColors(length) {
    const charecters = '0123456789ABCDEF'
    const color = []
    for(let i = 0; i < length; i++) {
        let hexaColor = '#'
        for(let j = 0; j < 6; j++) {
            randomChar = charecters[Math.floor(Math.random() * charecters.length)]
            hexaColor += randomChar
        }
        color.push(hexaColor)
    }
    return color
}
console.log(arrayOfHexaColors(5))

// Write a function arrayOfRgbColors which return any number of RGB colors in an array.
function arrayOfRgbColors(length) {
    let rgbcolor = []
    for(let j = 0; j < length; j++) {
        let color = []
        for(let i = 0; i < 3; i++) {
            randomNum = Math.floor(Math.random() * 256)
            color.push(randomNum)
        }
        let [red, green, blue] = color
        rgbcolor.push(`rgb(${red},${green},${blue})`)
    }
    return rgbcolor
}
console.log(arrayOfRgbColors(3))

// Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
function convertHexaToRgb(hex) {
    hex = hex.replace('#','')
    let red = parseInt(hex.substring(0,2),16)
    let green = parseInt(hex.substring(2,4),16)
    let blue = parseInt(hex.substring(4,6),16)
    return `rgb(${red},${green},${blue})`
}
console.log(convertHexaToRgb('#FF0000'))

// Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
function convertRgbToHexa(rgb) {
    rgb = rgb.replace('rgb','')
    rgb = rgb.replace('(','')
    rgb = rgb.replace(')','')
    rgb = rgb.split(',')
    let hexa = '#'
    rgb.forEach((num) => {
        hexNum = Number(num).toString(16)
        if(hexNum.length === 1){
            hexNum = '0' + hexNum
        }
        hexa += hexNum
    })
    return hexa
}
console.log(convertRgbToHexa('rgb(255,0,0)'))

// Write a function generateColors which can generate any number of hexa or rgb colors.
// console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
// console.log(generateColors('hexa', 1)) // '#b334ef'
// console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
// console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
function generateColors(colorScheme,length) {
    if(colorScheme === 'rgb'){
        return collectionOfRgbColors(length)
    }
    else if(colorScheme === 'hexa'){
        return collectionOfHexaColors(length)
    }
    else {
        return `Please enter valid color scheme`
    }
}
function collectionOfRgbColors(length) {
    let rgbcolor = []
    for(let j = 0; j < length; j++) {
        let color = []
        for(let i = 0; i < 3; i++) {
            randomNum = Math.floor(Math.random() * 256)
            color.push(randomNum)
        }
        let [red, green, blue] = color
        rgbcolor.push(`rgb(${red},${green},${blue})`)
    }
    if(rgbcolor.length === 1){
        return rgbcolor.toString()
    }
    else {
        return rgbcolor
    }
    
}
function collectionOfHexaColors(length) {
    const charecters = '0123456789ABCDEF'
    const color = []
    for(let i = 0; i < length; i++) {
        let hexaColor = '#'
        for(let j = 0; j < 6; j++) {
            randomChar = charecters[Math.floor(Math.random() * charecters.length)]
            hexaColor += randomChar
        }
        color.push(hexaColor)
    }
    if(color.length === 1){
        return color.toString()
    }
    else {
        return color
    }
    
}
console.log(generateColors('hexa', 3)) 
console.log(generateColors('hexa', 1)) 
console.log(generateColors('rgb', 3)) 
console.log(generateColors('rgb', 1))

// Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
function shuffleArray(array) {
    const shuArr = []
    const ranIndexArr = []
    let isNotFull = true
    while(isNotFull) {
        let ranIndex = Math.floor(Math.random() * array.length)
        if(!(ranIndexArr.includes(ranIndex))){
            shuArr.push(array[ranIndex])
            ranIndexArr.push(ranIndex)
        }
        if(shuArr.length === array.length){
            isNotFull = false
        }
    }
    return shuArr
}
// chatgpt used Fisher-Yates shuffle algorithm
console.log(shuffleArray([1,2,3,4,5,6,7]))

// Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
function factorial(num) {
    if(num === 1){
        return 1
    }
    else {
        return num * factorial(num - 1)
    }
}
console.log(factorial(5))

// Call your function isEmpty, it takes a parameter and it checks if it is empty or not
function isEmpty(parameter) {
    if(parameter === null || parameter === undefined) {
        return true
    }
    else if(typeof(parameter) === 'string' && parameter.trim() === '') {
        return true
    }
    else if(Array.isArray(parameter) && parameter.length === 0) {
        return true
    }
    else if(typeof(parameter) === 'object' && Object.keys(parameter).length === 0) {
        return true
    }
    else {
        return false
    }
}
console.log(isEmpty(undefined))

// Call your function sum, it takes any number of arguments and it returns the sum.
function sum(...arr) {
    let sum = 0
    arr.forEach((num) => sum += num)
    return sum
}
console.log(sum(1,2,3,4,5,6))

// Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
function sumOfArrayItems(array) {
    let sum = 0
    for(let num of array) {
        if(typeof(num) !== 'number') {
            return `item with index ${array.indexOf(num)} is not a number`
        }
        else {
            sum += num
        }
    }
    return sum
}
console.log(sumOfArrayItems([1,2,'three',4,5]))

// Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
function average(array) {
    let sum = 0
    for(let num of array) {
        if(typeof(num) !== 'number') {
            return `item with index ${array.indexOf(num)} is not a number`
        }
        else {
            sum += num
        }
    }
    let average = sum/array.length
    return average
}
console.log(average([1,2,3,4,5]))

// Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
// console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
// ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
// ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
//   'Not Found'
function modifyArray(array,item) {
    if(array.length < 5) {
        return 'Item not found'
    }
    else {
        array[4] = array[4].toUpperCase()
        return array
    }
}
console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']))
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']))

// Write a function called isPrime, which checks if a number is prime number.
function isPrime(num) {
    let isPrime = true
    if(num === 1) {
        return '1 is neither prime nor composite'
    }
    if(num === 2) {
        return 'Prime'
    }
    for(let i = 2; i*i <= num; i++){
        if(num % i === 0){
            isPrime = false
        }
    }
    if(isPrime) {
        return "Prime"
    }
    else {
        return 'Not prime'
    }
    
}
console.log(isPrime(11))

// Write a functions which checks if all items are unique in the array.
function areUnique(array) {
    const unqSet = new Set(array)
    if(unqSet.size === array.length) {
        return 'All items are unique'
    }
    else {
        return 'All items are not unique'
    }
}
console.log(areUnique([1,2,3,4,4]))

// Write a function which checks if all the items of the array are the same data type.
function sameDataType(array) {
    const dataTypeArray = []
    array.forEach((element) => dataTypeArray.push(typeof(element)))
    const dataTypeSet = new Set(dataTypeArray)
    if(dataTypeSet.size === 1){
        return 'All items are of same data type'
    }
    else {
        return 'All items are not of same data type'
    }
}
console.log(sameDataType([1,2,3,4,5]))
console.log(sameDataType([1,2,'three',4,5]))

// JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.
function isValidVariable(varName) {
    regex = /^[A-Za-z$_]/ig
    if(regex.test(varName)) {
        return 'Valid variable'
    }
    else {
        return 'Not valid variable'
    }
}
console.log(isValidVariable('_name'))

// Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
// sevenRandomNumbers()
// [(1, 4, 5, 7, 9, 8, 0)]
function sevenRandomNumbers() {
    const array = []
    while(!(array.length === 7)) {
        let ranNum = Math.floor(Math.random() * 10)
        if(!(array.includes(ranNum))) {
            array.push(ranNum)
        }
    }
    return array
}
console.log(sevenRandomNumbers())

// Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
function reverseCountries(countries) {
    const revCountries = []
    countries.forEach((country) => revCountries.unshift(country))
    return(revCountries)
}