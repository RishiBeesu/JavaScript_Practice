// Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
const personAccount = {
    firstName: 'Rishi',
    lastName: 'Beesu',
    incomes: {
        job: 1000,
        business: 2000
    },
    expenses: {
        rent: 500,
        grocery: 500
    },
    totalIncome: function() {
        let total = 0
        for(let income in this.incomes){
            total += this.incomes[income]
        }
        return total
    },
    totalExpense: function() {
        let total = 0
        for(let expense in this.expenses){
            total += this.expenses[expense]
        }
        return total
    },
    accountInfo: function() {
        return `${this.firstName} ${this.lastName}. Total Income: ${this.totalIncome()}, Total Expense: ${this.totalExpense()}. Remaining Balance: ${this.accountBalance()}`
    },
    addIncome: function(work,amount) {
        this.incomes[work] = amount
    },
    addExpense: function(expense,amount) {
        this.expenses[expense] = amount
    },
    accountBalance: function() {
        return `Remaining Balance: ${this.totalIncome() - this.totalExpense()}`
    }
}
// Imagine you are getting the above users collection from a MongoDB database.
const {users, products} = require('./arrays.js')
//a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
function signUp(username,email,password) {
    let existingUser = users.find((user) => user.username === username || user.email === email)
    if(existingUser) {
        console.log('User already has an account')
    }
    else {
        let date = new Date()
        let id
        function randomID() {
            const charecters = '0123456789QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm'
            let ranID = ''
            for(let i = 0; i < 6; i++){
                let ranChar = charecters[Math.floor(Math.random() * charecters.length)]
                ranID += ranChar
            }
            return ranID
        }
        do {
            id = randomID()
        }
        while(users.some((user) => user.id === id))
        users.push({
            _id: id,
            username: username,
            email: email,
            password: password,
            createdAt: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`,
            isLoggedIn: "false"
        })
    }
}
signUp('Aloy','aloy@horizon.com',1111)
console.log(users[users.length - 1])

//b. Create a function called signIn which allows user to sign in to the application
function signIn(username,password) {
    const reqUser = users.find((user) => user.username === username)
    if(!reqUser){
        console.log('User not found')
        return false
    }
    if(reqUser.password === password){
        console.log('Authentication Success')
        return true
    }
    else{
        console.log('Password Incorrect')
        return false
    }
}
signIn('rishi','6666')
signIn('Alex','123123')
signIn('Alex','4444')

//The products array has three elements and each of them has six properties. 
// a. Create a function called rateProduct which rates the product
function rateProduct(product,userId,rating) {
    const reqProduct = products.find((prod) => prod.name === product)
    reqProduct.ratings.push({
        userId: userId,
        rate: rating
    })
}
rateProduct('TV','fwfaff',5)
console.log(products[2])

// b. Create a function called averageRating which calculate the average rating of a product
function averageRating(product) {
    const reqProduct = products.find((prod) => prod.name === product)
    let totalRating = 0
    reqProduct.ratings.forEach((rating) => totalRating += rating.rate)
    return totalRating/reqProduct.ratings.length
}
console.log(averageRating('mobile phone'))

//Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
function likeProduct(product,userId) {
    const reqProduct = products.find((prod) => prod.name === product)
    reqProduct.likes.push(userId)
}
likeProduct('TV','fghhha')
console.log(products[2])