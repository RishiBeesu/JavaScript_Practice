const countries = require('./countries.js')
const webTechs = require('../Level2/web_techs.js')
const mernStack = require('../Level2/mernstack.js')

// Copy countries array(Avoid mutation)
const copyArray = Array.from(countries)

// Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
const sortedCountries = copyArray.sort()
console.log(sortedCountries)

// Sort the webTechs array and mernStack array
const sortedWebTechs = webTechs.sort()
const sortedMernStack = mernStack.sort()
console.log(sortedWebTechs)
console.log(sortedMernStack)

// Extract all the countries contain the word 'land' from the countries array and print it as array
const landArr = []
for(country of countries) {
   if(country.includes('land')){
      landArr.push(country)
   }
}
console.log(landArr)

// Find the country containing the hightest number of characters in the countries array
let maxLen = 0
let maxLenCountry = ''
for(country of countries){
   if(country.length > maxLen) {
      maxLen = country.length
      maxLenCountry = country
   }
}
console.log(maxLenCountry)

// Extract all the countries containing only four characters from the countries array and print it as array
let fourArrCountry = []
for(country of countries) {
    if(country.length === 4) {
        fourArrCountry.push(country)
    }
}
console.log(fourArrCountry)

// Extract all the countries containing two or more words from the countries array and print it as array
let mulWordCountry = []
for(country of countries) {
    if(country.includes(' ')) {
        mulWordCountry.push(country)
    }
}
console.log(mulWordCountry)

// Reverse the countries array and capitalize each country and stored it as an array
const revCapArr = []
for(country of countries) {
    revCapArr.unshift(country.toUpperCase())
}
console.log(revCapArr)