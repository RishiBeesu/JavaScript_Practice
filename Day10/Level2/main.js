const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]

// Find a union b
const union = [...a,...b]
const unionSet = new Set(union)
console.log(unionSet)

// Find a intersection b
let intersection = a.filter((num) => b.includes(num))
let intersectionSet = new Set(intersection)
console.log(intersectionSet)

// Find a with b
// a with b === a union b