// The following is an array of 10 students ages:
// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     Sort the array and find the min and max age
//     Find the median age(one middle item or two middle items divided by two)
//     Find the average age(all items divided by number of items)
//     Find the range of the ages(max minus min)
//     Compare the value of (min - average) and (max - average), use abs() method
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
const agesSort = ages.sort()
const min = agesSort[0]
const max = agesSort[agesSort.length-1]
const range = max - min
let median
if(agesSort.length % 2 ===0){
    median = (agesSort[(agesSort.length / 2) - 1] + agesSort[agesSort.length / 2])/2
}
else {
    median = agesSort[(agesSort.length - 1) / 2]
}
let sum = 0
for (let i = 0; i<agesSort.length;i++) {
    sum += agesSort[i]
}
const average = sum/agesSort.length
console.log(agesSort)
console.log(`min is ${min}, max is ${max}, median is ${median}, average is ${average}, range is ${range}.`)
console.log(Math.abs(max - average).toFixed(2),Math.abs(min - average).toFixed(2))

//Slice the first ten countries from the countries array
const countries = require('./countries.js')
console.log(countries.slice(0,10))

// Find the middle country(ies) in the countries array
let middleCountry = []
if(countries.length % 2 ===0){
    middleCountry.push(countries[(countries.length / 2) - 1])
    middleCountry.push(countries[countries.length / 2])
}
else {
    middleCountry.push(countries[(countries.length - 1) / 2])
}
console.log(middleCountry)

// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
let firstHalfCountries
let secondHalfCountries
if(countries.length % 2 === 0){
    firstHalfCountries = countries.slice(0, (countries.length/2))
    secondHalfCountries = countries.slice((countries.length/2))
}
else {
    firstHalfCountries = countries.slice(0, (countries.length + 1)/2)
    secondHalfCountries = countries.slice((countries.length + 1)/2)
}
console.log(countries.length)
console.log(firstHalfCountries.length)
console.log(secondHalfCountries.length)