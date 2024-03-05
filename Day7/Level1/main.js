// Declare a function fullName and it print out your full name.
function fullName() {
    console.log('Rishi Beesu')
}
// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(fullName,lastName) {
    return `${fullName} ${lastName}`
}
// Declare a function addNumbers and it takes two two parameters and it returns sum.
const sum = (num1,num2) => sum1+sum2
// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
const areaOfRectangle = (length,width) => length*width
// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
const perimeterOfRectangle = (length,width) => 2*(length+width)
// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
const volumeOfRectPrism = (length,width,height) => length*width*height
// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
const areaOfCircle = (radius) => (Math.PI*radius*radius).toFixed(2)
// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
const circumOfCircle = (radius) => (2*Math.PI*radius).toFixed(2)
// Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
const density = (mass,volume) => mass/volume
// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
const speed = (distance,time) => distance/time
// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
const weight = (mass,gravity) => mass*gravity
// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32
}
// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
//     The same groups apply to both men and women.
//     Usnderweight: BMI is less than 18.5
//     Normal weight: BMI is 18.5 to 24.9
//     Overweight: BMI is 25 to 29.9
//     Obese: BMI is 30 or more
function status(weight,height) {
    let bmi = weight/(height*height)
    if(bmi<18.5){
        return 'Underweight'
    }
    else if(bmi>= 18.5 && bmi < 25){
        return 'Normal weight'
    }
    else if(bmi>=25 && bmi<30){
        return 'Overweight'
    }
    else {
        return 'Obese'
    }
}
// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(month) {
    switch(month){
        case 'September':
        case 'October':
        case 'November':
          return 'Autumn'
          break
        case 'December':
        case 'January':
        case 'February':
          return 'Winter'
          break
        case 'March':
        case 'April':
        case 'May':
          return 'Spring'
          break
        case 'June':
        case 'July':
        case 'August':
          return 'Summer'
          break
        default:
          return 'Please enter a valid month'
      }
}
// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
// console.log(findMax(0, 10, 5))
// 10
// console.log(findMax(0, -10, -2))
// 0
function findMax(num1,num2,num3) {
    return Math.max(num1,num2,num3)
}