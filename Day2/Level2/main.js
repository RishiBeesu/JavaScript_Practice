// Using console.log() print out the following statement:
// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
console.log("The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.")

// Using console.log() print out the following quote by Mother Teresa:
// "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log('\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"')

// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log(typeof(parseInt('10'))===typeof(10))

// Check if typeof parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(typeof(parseInt(parseFloat('9.8')))===typeof(10))

// Check if 'on' is found in both python and jargon
let text1 = 'python'
let text2 = 'jargon'
console.log(text1.includes('on'))
console.log(text2.includes('on'))

// I hope this course is not full of jargon. Check if jargon is in the sentence.
let sentence1 = 'I hope this course is not full of jargon.'
console.log(sentence1.includes('jargon'))

// Generate a random number between 0 and 100 inclusively.
let ranNum1 = Math.floor(Math.random() * 101)
console.log(ranNum1)

// Generate a random number between 50 and 100 inclusively.
let ranNum2 = Math.floor(Math.random() * 51 + 50)
console.log(ranNum2)

// Generate a random number between 0 and 255 inclusively.
let ranNum3 = Math.floor(Math.random() * 256)
console.log(ranNum3)

// Access the 'JavaScript' string characters using a random number.
let word = 'JavaScript'
let ranChar = word[Math.floor(Math.random() * (word.length))] // no +1 as index start from 0
console.log(ranChar)

// Use console.log() and escape characters to print the following pattern.
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
let numrow = 5
for(let i = 1; i <= numrow; i++) {
    let row = i
    for (let j = 0; j<= numrow - 2; j++) {
        let num = Math.pow(i,j)
        row = row + " " + num
    }
    console.log(row)
}

// Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let needStr = 'You cannot end a sentence with because because because is a conjunction'
let reqStr = needStr.substr(31,23)
console.log(reqStr)