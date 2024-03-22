// Create an empty object called dog
const dog = {}

// Print the the dog object on the console
console.log(dog)

// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = 'chica'
dog.legs = 4
dog.color = 'golden'
dog.age = 2
dog.bark = function () {
    return 'woof woof'
}

// Get name, legs, color, age and bark value from the dog object
console.log(Object.values(dog))

// Set new properties the dog object: breed, getDogInfo
dog.breed = 'cyborg'
dog.getDogInfo = function () {
    console.log(Object.values(this))
}
dog.getDogInfo()