// Declare an empty array;
let arr = new Array()

// Declare an array with more than 5 number of elements
let arr5 = ['one','two','three','four','five','six','seven']

// Find the length of your array
console.log(arr5.length)

// Get the first item, the middle item and the last item of the array
console.log(arr5[0],arr5[arr5.length-1],arr5[(arr5.length-1)/2])

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = [1,'two',true,'a',4.7,2,'nani']
console.log(mixedDataTypes.length)

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// Print the array using console.log()
console.log(itCompanies)

// Print the number of companies in the array
console.log(itCompanies.length)

// Print the first company, middle and last company
console.log(itCompanies[0],itCompanies[itCompanies.length-1],itCompanies[(itCompanies.length-1)/2])

// Print out each company
for(let i = 0; i<itCompanies.length; i++) {
    console.log(itCompanies[i])
}

// Change each company name to uppercase one by one and print them out
for(let i = 0; i<itCompanies.length; i++) {
    console.log(itCompanies[i].toUpperCase())
}

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.join(', ') + " are big IT companies.")

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let companyExist = prompt('Enter company')
if (itCompanies.includes(companyExist)) {
    console.log(companyExist)
}
else {
    console.log('company not found')
}

// Filter out companies which have more than one 'o' without the filter method
let oArray = []
let reg = /o/ig
for (let i = 0; i<itCompanies.length; i++) {
    if(itCompanies[i].match(reg)!==null){
        if(itCompanies[i].match(reg).length>1){
            oArray.push(itCompanies[i])
        }
    }
}
console.log(oArray)

// Sort the array using sort() method
console.log(itCompanies.sort())

// Reverse the array using reverse() method
console.log(itCompanies.reverse())

// Slice out the first 3 companies from the array
console.log(itCompanies.slice(0,3))

// Slice out the last 3 companies from the array
console.log(itCompanies.slice(itCompanies.length-3))

// Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(3,4))

// Remove the first IT company from the array
console.log(itCompanies.shift())

// Remove the middle IT company or companies from the array
console.log(itCompanies.splice(2,2,0))

// Remove the last IT company from the array
console.log(itCompanies.pop)

// Remove all IT companies
itCompanies=[]