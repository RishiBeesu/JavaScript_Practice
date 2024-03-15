// Calculate the total annual income of the person from the following text. 
let word = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
regexIncome = /\d+/g
const numbers = word.match(regexIncome)
let totalIncome = Number(numbers[0])*12 + Number(numbers[1]) + Number(numbers[2])*12
console.log(totalIncome)
// The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.
let position = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.'
regex = /-*\d+/g
const points = position.match(regex)
const numPoints = points.map((num) => Number(num))
numPoints.sort((a,b) => a-b)
distance = numPoints[numPoints.length - 1] - numPoints[0]
console.log(distance)
// Write a pattern which identify if a string is a valid JavaScript variable
let regexValidString = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/