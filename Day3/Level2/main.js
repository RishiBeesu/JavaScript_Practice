// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// Enter base: 20
// Enter height: 10
// The area of the triangle is 100
let base = Number(prompt('base of triangle'))
let height = Number(prompt('height of triangle'))
let area = 0.5 * base * height
console.log(area)
// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
// Enter side a: 5
// Enter side b: 4
// Enter side c: 3
// The perimeter of the triangle is 12
let a = Number(prompt('side a of triangle'))
let b = Number(prompt('side b of triangle'))
let c = Number(prompt('side c of triangle'))
let perimeter = a + b + c
console.log(perimeter)
// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length = Number(prompt('Length of the rectangle'))
let width = Number(prompt('width of the rectangle'))
let areaRectangle = length * width
let perimeterRectangle = 2 * (lenght + width)
// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let radius = Number(prompt('Radius of circle'))
let areaCircle = Math.PI * radius * radius
// Calculate the slope, x-intercept and y-intercept of y = 2x -2
let x = Number(prompt('x-intercept'))
let y = Number(prompt('y-intercept'))
let slope = 2 * x - 2
// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let x1 = 2
let y1 = 2
let x2 = 6
let y2 = 10
let m = (y2-y1)/(x2-x1)
console.log(m)
// Compare the slope of above two questions.
console.log(slope === m)
// Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
// confused as to should i use quadratic equation formula or trial and error
// Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120
let hours = Number(prompt('hours'))
let hourlyPay = Number(prompt('hourly Pay'))
let pay = hours * hourlyPay
console.log(pay)
// If the length of your name is greater than 7 say, your name is long else say your name is short.
let yourName = Number(prompt('your name'))
yourName.lenght>7
  ? console.log('your name is long')
  : console.log('your name is short')
// Compare your first name length and your family name length and you should get this output.
// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// Your first name, Asabeneh is longer than your family name, Yetayeh
let firstName = Number(prompt('first name'))
let lastName = Number(prompt('last name'))
firstName.lenght>lastName.lenght
  ? console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`)
  : console.log(`Your first name, ${firstName} is shorter than your family name, ${lastName}`)
// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
// let myAge = 250
// let yourAge = 25
// I am 225 years older than you.
let myAge = Number(prompt('my age'))
let yourAge = Number(prompt('your age'))
let diff = myAge - yourAge
diff>0
  ? console.log(`I am ${diff} years older than you`)
  : console.log(`I am ${Math.abs(diff)} years younger than you`)
// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
// Enter birth year: 1995
// You are 25. You are old enough to drive
// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.
let birthYear = Number(prompt('birth year'))
let presentAge = 2024 - birthYear
presentAge>18
  ? console.log(`You are ${presentAge} years old. You are old enough to drive`)
  : console.log(`You are ${presentAge}. You will be allowed to drive after ${18-presentAge} years.`)
// Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
// Enter number of years you live: 100
// You lived 3153600000 seconds.
let numyears = Number(prompt('enter number of years'))
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