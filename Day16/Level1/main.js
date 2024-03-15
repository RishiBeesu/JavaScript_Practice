const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
// Change skills array to JSON using JSON.stringify()
let skillsText = JSON.stringify(skills)
console.log(skillsText)
// Stringify the age variable
let ageTxt = JSON.stringify(age)
console.log(ageTxt)
// Stringify the isMarried variable
let isMarriedText = JSON.stringify(isMarried)
console.log(isMarriedText)
// Stringify the student object
let studentTxt = JSON.stringify(student)
console.log(studentTxt)