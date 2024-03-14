const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']
// create an empty set
const emptySet = new Set()
// Create a set containing 0 to 10 using loop
const numSet = new Set()
for(let i = 0; i<=10; i++){
    numSet.add(i)
}
console.log(numSet)
// Remove an element from a set
numSet.delete(8)
console.log(numSet)
// Clear a set
numSet.clear()
console.log(numSet)
// Create a set of 5 string elements from array
const arr = ["car","apple","eagle","ball","car","dinosaur","eagle"]
const arrSet = new Set(arr)
console.log(arrSet)
// Create a map of countries and number of characters of a country
const mapCountry = new Map()
countries.forEach((country) => {
    mapCountry.set(country,country.length)
})
console.log(mapCountry)