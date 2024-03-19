// Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
let gojoSorceror = document.querySelector('p')
console.log(gojoSorceror.textContent)
// Get each of the the paragraph using document.querySelector('#id') and by their id
let evil = document.querySelector('#cleave')
let employee = document.querySelector('#overtime')
let gojorelative = document.querySelector('#rika')
console.log(evil.textContent)
console.log(employee.textContent)
console.log(gojorelative.textContent)
// Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
const jujutsuSorcerors = document.querySelectorAll('p')
// Loop through the nodeList and get the text content of each paragraph
jujutsuSorcerors.forEach((sorceror) => console.log(sorceror.textContent))
// Set a text content to paragraph the fourth paragraph,Fourth Paragraph
// Set id and class attribute for all the paragraphs using different attribute setting methods
