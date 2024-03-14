const { countries, names, numbers, products } = require('./arrays.js')
// Explain the difference between forEach, map, filter, and reduce.
/* in forEach we do not create a new array but rather perform operations using each element,
   in map we create a new array and return that array after performing operations
   in filter we return new array by conditions
   in reduce we return a single value after doing the necessary operation
*/
// Define a callback function before you use it in forEach, map, filter or reduce.
function callbackforEach(element){
    console.log(element)
}
countries.forEach(callbackforEach)
function callbackmap(element) {
    return element.toUpperCase()
}
const newNames = names.map(callbackmap)
console.log(newNames)
function callbackfilter(element) {
    if(element % 2 === 0){
        return element
    }
}
const evenNumber = numbers.filter(callbackfilter)
console.log(evenNumber)
function callbackreduce(acc,curr) {
    return acc + curr
}
const sumReduce = numbers.reduce(callbackreduce,0)
console.log(sumReduce)
// Use forEach to console.log each country in the countries array.
countries.forEach((country) => {
    console.log(country)
})
// Use forEach to console.log each name in the names array.
names.forEach((name) => {
    console.log(name)
})
// Use forEach to console.log each number in the numbers array.
numbers.forEach((num) => {
    console.log(num)
})
// Use map to create a new array by changing each country to uppercase in the countries array.
const countryUpperCase = countries.map((country) => country.toUpperCase())
console.log(countryUpperCase)
// Use map to create an array of countries length from countries array.
const countriesLength = countries.map((country) => country.length)
console.log(countriesLength)
// Use map to create a new array by changing each number to square in the numbers array
const sqnumber = numbers.map((num) => num * num)
console.log(sqnumber)
// Use map to change to each name to uppercase in the names array
const namesCap = names.map((name) => name.toUpperCase())
console.log(namesCap)
// Use map to map the products array to its corresponding prices.
const prodprice = products.map((product) => Object.values(product))
console.log(prodprice)
// Use filter to filter out countries containing land.
const landCountries = countries.filter((country) => {
    let regex = /land/i
    return regex.test(country)
})
console.log(landCountries)
// Use filter to filter out countries having six character.
const countryLength6 = countries.filter((country) => country.length === 6)
console.log(countryLength6)
// Use filter to filter out countries containing six letters and more in the country array.
const countryLength6m = countries.filter((country) => country.length >= 6)
console.log(countryLength6m)
// Use filter to filter out country start with 'E';
const countryStartE = countries.filter((country) => country.startsWith('E'))
console.log(countryStartE)
// Use filter to filter out only prices with values.
const valWithPrices = products.filter((product) => (product.price !== null && product.price !== " " && product.price !== ""))
console.log(valWithPrices)
// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
function getStringLists(arr) {
    const newArr = arr.filter((element) => typeof(element) === 'string')
    return newArr
}
// Use reduce to sum all the numbers in the numbers array.
let sum = numbers.reduce((acc,curr) => acc + curr,0)
console.log(sum)
// Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
let joinCountries = countries.reduce((acc,curr) => {
    if(countries.indexOf(curr) === countries.length - 1){
        return acc + " and " + curr
    }
    else {
        return acc + ", " + curr
    }
}, "Estonia") + " are north European countries"
console.log(joinCountries)
// Explain the difference between some and every
/* some returns true even if few or one of the elements satisfy the condition but,
   every return true only if all elements satisfy the condition
*/
// Use some to check if some names' length greater than seven in names array
let someNameLength7 = names.some((name) => name.length > 7)
console.log(someNameLength7)
// Use every to check if all the countries contain the word land
let countryAllLand = countries.every((country) => {
    let regex = /land/i
    regex.test(country)
})
console.log(countryAllLand)
// Explain the difference between find and findIndex.
/* find returns the element which satisfies the condition
   findIndex returns index of the element which satisfies the condition
*/
// Use find to find the first country containing only six letters in the countries array
let firstCountryLength6 = countries.find((country) => country.length === 6)
console.log(firstCountryLength6)
// Use findIndex to find the position of the first country containing only six letters in the countries array
let firstCountryLength6Index = countries.findIndex((country) => country.length === 6)
console.log(firstCountryLength6Index)
// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
let findIndexNorway = countries.findIndex((country) => country === 'Norway')
console.log(findIndexNorway)
// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
let findIndexRussia = countries.findIndex((country) => country === 'Russia')
console.log(findIndexRussia)
