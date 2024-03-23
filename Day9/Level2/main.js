const { countries, names, numbers, products } = require('../Level1/arrays.js')
const countriesAll = require('./countries_data.js')
// Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
let totalPrice = products.map((product) => product.price).filter((price) => typeof(price) === 'number').reduce((acc,curr) => acc + curr,0)
console.log(totalPrice)

// Find the sum of price of products using only reduce reduce(callback))
let totalPriceReduce = products.reduce((acc,curr) => {
    if(typeof(curr.price) === 'number') {
        return acc + curr.price
    }
    else {
        return acc
    }
},0)
console.log(totalPriceReduce)

// Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
function categorizeCountries(countries,pattern) {
    const reqCountries = countries.filter((country) => country.name.includes(pattern)).map((country) => country.name)
    return reqCountries
}
console.log(categorizeCountries(countriesAll,'ia'))

// Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
function objNumLetterStart(countries) {
    const letterCount = {}
    countries.forEach((country) => {
        let firstLetter = country.name.charAt(0).toUpperCase()
        letterCount[firstLetter] = (letterCount[firstLetter] || 0) + 1
    })
    const objArray = Object.keys(letterCount).map((letter) => {
        return {
            letter: letter,
            count: letterCount[letter]
        }
    })
    return objArray
}
console.log(objNumLetterStart(countriesAll))

// Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
const getFirstTenCountries = (countries) => {
    let firstTen = countries.filter((country,index) => index < 10)
    firstTen = firstTen.map((country) => country.name)
    return firstTen;
}

console.log(getFirstTenCountries(countriesAll));

// Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
function getLastTenCountries(countries) {
    let lastTen = countries.filter((country,index) => index >= countries.length - 10)
    lastTen = lastTen.map((country) => country.name)
    return lastTen
}
console.log(getLastTenCountries(countriesAll))

// Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
const lettersDetails = objNumLetterStart(countriesAll)
let maxCount = 0
let maxCountLetter = ''
lettersDetails.forEach((detail) => {
    if(detail.count > maxCount) {
        maxCount = detail.count
        maxCountLetter = detail.letter
    }
})
console.log(maxCountLetter)