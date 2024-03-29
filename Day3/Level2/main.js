let readlinesync = require('readline-sync')

// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// Enter base: 20
// Enter height: 10
// The area of the triangle is 100
let base = Number(readlinesync.question('base of triangle: '))
let height = Number(readlinesync.question('height of triangle: '))
let area = 0.5 * base * height
console.log(`area: ${area}`)

// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
// Enter side a: 5
// Enter side b: 4
// Enter side c: 3
// The perimeter of the triangle is 12
let a = Number(readlinesync.question('side a of triangle: '))
let b = Number(readlinesync.question('side b of triangle: '))
let c = Number(readlinesync.question('side c of triangle: '))
let perimeter = a + b + c
console.log(`perimeter: ${perimeter}`)

// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length = Number(readlinesync.question('Length of the rectangle: '))
let width = Number(readlinesync.question('width of the rectangle: '))
let areaRectangle = length * width
let perimeterRectangle = 2 * (length + width)
console.log(`area: ${areaRectangle}`)
console.log(`perimeter: ${perimeterRectangle}`)

// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let radius = Number(readlinesync.question('Radius of circle: '))
let areaCircle = Math.PI * radius * radius
console.log(`area: ${areaCircle}`)

// Calculate the slope, x-intercept and y-intercept of y = 2x -2
let x = 1
let y = 0
let slope = (y + 2)/x
console.log(`slope of y = 2x -2: ${slope}`)

// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point (6,10)
let x1 = 2
let y1 = 2
let x2 = 6
let y2 = 10
let m = (y2-y1)/(x2-x1)
console.log(`slope of points (2, 2) and point (6,10): ${m}`)

// Compare the slope of above two questions.
console.log(`comparing slopes: ${slope === m}`)

// Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
function roots(a,b,c ) {
  let discriminant = b*b - 4*a*c
  if(discriminant<0) {
    return 'no real roots'
  }
  else {
    let sqrtdiscriminant = Math.sqrt(discriminant) 
    let x1 = (-b + sqrtdiscriminant)/2
    let x2 = (-b - sqrtdiscriminant)/2
    if(x1===x2) {
      return x1
    }
    else {
      return [x1,x2]
    }
  }
}
console.log(`roots of (y = x2 + 6x + 9): ${roots(1,6,9)}`)

// Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120
let hours = Number(readlinesync.question('hours: '))
let hourlyPay = Number(readlinesync.question('hourly Pay: '))
let pay = hours * hourlyPay
console.log(`pay: ${pay}`)

// If the length of your name is greater than 7 say, your name is long else say your name is short.
let yourName = readlinesync.question('your name: ')
yourName.length>7
  ? console.log('your name is long')
  : console.log('your name is short')

// Compare your first name length and your family name length and you should get this output.
// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// Your first name, Asabeneh is longer than your family name, Yetayeh
let firstName = readlinesync.question('first name: ')
let lastName = readlinesync.question('last name: ')
firstName.length>lastName.length
  ? console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`)
  : console.log(`Your first name, ${firstName} is shorter than your family name, ${lastName}`)

// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
// let myAge = 250
// let yourAge = 25
// I am 225 years older than you.
let myAge = Number(readlinesync.question('my age: '))
let yourAge = Number(readlinesync.question('your age: '))
let diff = myAge - yourAge
diff>0
  ? console.log(`I am ${diff} years older than you`)
  : console.log(`I am ${Math.abs(diff)} years younger than you`)

// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
// Enter birth year: 1995
// You are 25. You are old enough to drive
// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.
let birthYear = Number(readlinesync.question('birth year: '))
let presentAge = 2024 - birthYear
presentAge>18
  ? console.log(`You are ${presentAge} years old. You are old enough to drive`)
  : console.log(`You are ${presentAge}. You will be allowed to drive after ${18-presentAge} years.`)

// Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
// Enter number of years you live: 100
// You lived 3153600000 seconds.
let numyears = Number(readlinesync.question('enter number of years: '))
numyears<100
  ? console.log(`You lived ${numyears*31536000} seconds.`)
  : console.log('Hi Immortal')

// Create a human readable time format using the Date time object
//     YYYY-MM-DD HH:mm
//     DD-MM-YYYY HH:mm
//     DD/MM/YYYY HH:mm
let now = new Date()
let day = now.getDay()
let month = now.getMonth()
let year = now.getFullYear()
let hour = now.getHours()
let minutes = now.getMinutes()
console.log(`${year}-${month}-${day} ${hour}:${minutes}`)
console.log(`${day}-${month}-${year} ${hour}:${minutes}`)
console.log(`${day}/${month}/${year} ${hour}:${minutes}`)