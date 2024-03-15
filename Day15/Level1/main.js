// Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal {
    constructor(name,age,color,legs) {
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }
    get getName() {
        return this.name
    }
    get getAge() {
        return this.age
    }
    get getColor() {
        return this.color
    }
    get getLegs() {
        return this.legs
    }
    set setName(name) {
        if(typeof(name) === 'string'){
            this.name = name
        }
        else {
            console.log('please enter string')
        }
    }
    set setAge(age) {
        if(typeof(age) === 'number'){
            this.age = age
        }
        else {
            console.log('please enter number')
        }
    }
    set setColor(color) {
        if(typeof(color) === 'string'){
            this.color = color
        }
        else {
            console.log('please enter string')
        }
    }
    set setLegs(legs) {
        if(typeof(legs) === 'number'){
            this.legs = legs
        }
        else {
            console.log('please enter number')
        }
    }
    getInfo() {
        return `Name is ${this.name}, it is ${this.age} years old, shining in ${this.color} color, it has ${this.legs} legs`
    }
}
// Create a Dog and Cat child class from the Animal Class.
class Dog extends Animal {
    constructor(name,age,color,legs,breed) {
        super(name,age,color,legs)
        this.breed = breed
    }
    get getBreed() {
        return this.breed
    }
    set setBreed(breed) {
        if(typeof(breed) === 'string'){
            this.breed = breed
        }
        else {
            console.log('please enter string')
        }
    }
    getInfo() {
        return `Name is ${this.name}, it is ${this.age} years old, shining in ${this.color} color, it has ${this.legs} legs, it's breed is ${this.breed}`
    }
}
class Cat extends Animal {
    constructor(name,age,color,legs,breed) {
        super(name,age,color,legs)
        this.breed = breed
    }
    get getBreed() {
        return this.breed
    }
    set setBreed(breed) {
        if(typeof(breed) === 'string'){
            this.breed = breed
        }
        else {
            console.log('please enter string')
        }
    }
    getInfo() {
        return `Name is ${this.name}, it is ${this.age} years old, shining in ${this.color} color, it has ${this.legs} legs, it's breed is ${this.breed}`
    }
}

const cat1 = new Cat('lulu',10,'black',4,'sorceror')
console.log(cat1.getInfo())
cat1.setAge = 100
console.log(cat1.getInfo())