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
//b. Create a function called signIn which allows user to sign in to the application

//The products array has three elements and each of them has six properties. a. Create a function called rateProduct which rates the product b. Create a function called averageRating which calculate the average rating of a product

//Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
