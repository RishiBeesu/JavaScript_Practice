// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = 'Rishi'
let lastName = 'Beesu'
let country = 'India'
let city = 'Hyderabad'
let age = 23
let isMarried = false
let year = 2024
console.log(typeof(firstName))
console.log(typeof(lastName))
console.log(typeof(country))
console.log(typeof(city))
console.log(typeof(age))
console.log(typeof(isMarried))
console.log(typeof(year))

// Check if type of '10' is equal to 10
console.log(typeof('10')===typeof(10))

// Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8')===10)

// Boolean value is either true or false.
//     Write three JavaScript statement which provide truthy value.
//     Write three JavaScript statement which provide falsy value.
console.log(7)
console.log('hi')
console.log(true)
console.log(0)
console.log('')
console.log(null)

// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
//     4 > 3
//     4 >= 3
//     4 < 3
//     4 <= 3
//     4 == 4
//     4 === 4
//     4 != 4
//     4 !== 4
//     4 != '4'
//     4 == '4'
//     4 === '4'
//     Find the length of python and jargon and make a falsy comparison statement.
console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')
console.log('python'.length !== 'jargon'.length)

// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
//     4 > 3 && 10 < 12
//     4 > 3 && 10 > 12
//     4 > 3 || 10 < 12
//     4 > 3 || 10 > 12
//     !(4 > 3)
//     !(4 < 3)
//     !(false)
//     !(4 > 3 && 10 < 12)
//     !(4 > 3 && 10 > 12)
//     !(4 === '4')
//     There is no 'on' in both dragon and python
console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))
console.log('dragon'.includes('on') && 'python'.includes('on'))

// Use the Date object to do the following activities
//     What is the year today?
//     What is the month today as a number?
//     What is the date today?
//     What is the day today as a number?
//     What is the hours now?
//     What is the minutes now?
//     Find out the numbers of seconds elapsed from January 1, 1970 to now.
let now = new Date()
console.log(now.getFullYear())
console.log(now.getMonth())
console.log(now.getDate())
console.log(now.getDay())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getTime())