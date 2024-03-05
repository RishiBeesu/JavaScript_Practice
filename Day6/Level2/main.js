const countries = require('./countries.js')
const webTechs = require('./web_techs.js')
const mernStack = require('./mernstack.js')
// Develop a small script which generate any number of characters random id:
//   fe3jo1gl124g
//   xkqci4utda1lmbelpkm03rba
const readlineSync = require('readline-sync')
let n = readlineSync.question('Enter length of id: ')
let allChar = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890'
let ranID = ''
for(let i = 0;i<n;i++){
   let ranchar = allChar[Math.floor(Math.random ()* allChar.length)]
   ranID += ranchar
}
console.log(ranID)
// Write a script which generates a random hexadecimal number.
// '#ee33df'
let hexaChar = 'ABCDEFabcdef1234567890'
let ranhex = '#'
for(let i = 0;i<6;i++){
   let ranchar = hexaChar[Math.floor(Math.random ()* hexaChar.length)]
   ranhex += ranchar
}
console.log(ranhex)
// Write a script which generates a random rgb color number.
// rgb(240,180,80)
let color1 = Math.floor(Math.random() * 256)
let color2 = Math.floor(Math.random() * 256)
let color3 = Math.floor(Math.random() * 256)
let color = `rgb(${color1},${color2},${color3})`
console.log(color)
// Using the above countries array, create the following new array.
// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
let capCountries = []
for(country of countries) {
   country = country.toUpperCase()
   capCountries.push(country)
}
console.log(capCountries)
// Using the above countries array, create an array for countries length'.
// [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
let countryLenArr = []
for(country of countries) {
   countryLenArr.push(country.length)
}
console.log(countryLenArr)
// Use the countries array to create the following array of arrays:
//   [
//   ['Albania', 'ALB', 7],
//   ['Bolivia', 'BOL', 7],
//   ['Canada', 'CAN', 6],
//   ['Denmark', 'DEN', 7],
//   ['Ethiopia', 'ETH', 8],
//   ['Finland', 'FIN', 7],
//   ['Germany', 'GER', 7],
//   ['Hungary', 'HUN', 7],
//   ['Ireland', 'IRE', 7],
//   ['Iceland', 'ICE', 7],
//   ['Japan', 'JAP', 5],
//   ['Kenya', 'KEN', 5]
// ]
let countryDetArr = []
for(country of countries) {
   let detArr = []
   detArr.push(country,country.toUpperCase().substr(0,3),country.length)
   countryDetArr.push(detArr)
}
console.log(countryDetArr)
// In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
// ['Finland','Ireland', 'Iceland']
const landArr = []
let noLand = true
for(country of countries) {
   if(country.includes('land')){
      landArr.push(country)
      noLand = false
   }
}
if(noLand) {
   console.log('All these countries are without land')
}
else {
   console.log(landArr)
}
// In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
// ['Albania', 'Bolivia','Ethiopia']
const iaEndArr = []
let noia = true
for(country of countries) {
   if(country.endsWith('ia')){
      iaEndArr.push(country)
      noia = false
   }
}
if(noia) {
   console.log('All these countries end without ia')
}
else {
   console.log(iaEndArr)
}
// Using the above countries array, find the country containing the biggest number of characters.
// Ethiopia
let maxLen = 0
let maxLenCountry = ''
for(country of countries){
   if(country.length > maxLen) {
      maxLen = country.length
      maxLenCountry = country
   }
}
console.log(maxLenCountry)
// Using the above countries array, find the country containing only 5 characters.
// ['Japan', 'Kenya']
let fiveCharCountyArr = []
for(country of countries) {
   if(country.length === 5) {
      fiveCharCountyArr.push(country)
   }
}
console.log(fiveCharCountyArr)
// Find the longest word in the webTechs array
let maxLenStack = 0
let maxLenStackWord = ''
for(tech of webTechs){
   if(tech.length > maxLenStack) {
      maxLenStack = tech.length
      maxLenStackWord = tech
   }
}
console.log(maxLenStackWord)
// Use the webTechs array to create the following array of arrays:
// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
const techDetArr = []
for(tech of webTechs) {
   const detArr = []
   detArr.push(tech,tech.length)
   techDetArr.push(detArr)
}
console.log(techDetArr)
// An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
let mernWord = ''
for(tech of mernStack) {
   mernWord += tech.substr(0,1)
}
console.log(mernWord)
// Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
const techArr = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
for(tech of techArr) {
   console.log(tech)
}
// This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
const fruitArr = ['banana', 'orange', 'mango', 'lemon']
const revFruitArr = []
for (fruit of fruitArr){
   revFruitArr.unshift(fruit)
}
console.log(revFruitArr)
// Print all the elements of array as shown below.
//   const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
//   ]
//   HTML
//   CSS
//   JS
//   REACT
//   NODE
//   EXPRESS
//   MONGODB
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
for(stack of fullStack){
for(tech of stack){
   console.log(tech)
}
}