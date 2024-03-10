const users = require('./users.js')
// Find the person who has many skills in the users object.
const manySkills = []
for(let user in users){
  if(users[user].skills.length>1){
    manySkills.push(user)
  }
}
console.log(manySkills)
// Count logged in users, count users having greater than equal to 50 points from the following object.
const loggedUsers = []
const points50 = []
for(let user in users){
    if(users[user].isLoggedIn === true){
        loggedUsers.push(user)
    }
    if(users[user].points >= 50){
        points50.push(user)
    }
}
console.log(loggedUsers)
console.log(points50)
// Find people who are MERN stack developer from the users object
const mernDevelopers = []
const mongodbRegex = /mongodb/i
const expressRegex = /express/i
const reactRegex = /react/i
const nodeRegex = /node/i
for(let user in users){
    if(users[user].skills.some(item => mongodbRegex.test(item)) && users[user].skills.some(item => expressRegex.test(item)) && users[user].skills.some(item => reactRegex.test(item)) && users[user].skills.some(item => nodeRegex.test(item))) {
        mernDevelopers.push(user)
    }
}
console.log(mernDevelopers)
// Set your name in the users object without modifying the original users object
const copyUsers = Object.assign(users)
copyUsers.Rishi = {
    skills: ['HTML','CSS','JavaScript','Python','MongoDB','Express','Node','React'],
    age: 23
}
console.log(copyUsers.hasOwnProperty('Rishi'))
// Get all keys or properties of users object
console.log(Object.keys(users))
// Get all the values of users object
console.log(Object.values(users))
// Use the countries object to print a country name, capital, populations and languages.
const country = {
    name: "India",
    capital: "Delhi",
    population: "8 billion",
    languages: ['Telugu','Hindi','English','Kannada','Malyalam','Tamil']
}
console.log(country.name,country.capital,country.population,country.languages)