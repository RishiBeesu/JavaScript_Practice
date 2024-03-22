// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
let marks = 45;
let grade;
if (marks >= 80 && marks <= 100) {
    grade = 'A';
    console.log(grade);
} else if (marks >= 70 && marks <= 79) {
    grade = 'B';
    console.log(grade);
} else if (marks >= 60 && marks <= 69) {
    grade = 'C';
    console.log(grade);
} else if (marks >= 50 && marks <= 59) {
    grade = 'D';
    console.log(grade);
} else if (marks >= 0 && marks <= 49) {
    grade = 'F';
    console.log(grade);
} else {
    console.log('Enter valid marks');
}

// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer
let month = 'June'
let season
switch(month){
  case 'September':
  case 'October':
  case 'November':
    season = 'Autumn'
    console.log(season)
    break
  case 'December':
  case 'January':
  case 'February':
    season = 'Winter'
    console.log(season)
    break
  case 'March':
  case 'April':
  case 'May':
    season = 'Spring'
    console.log(season)
    break
  case 'June':
  case 'July':
  case 'August':
    season = 'Summer'
    console.log(season)
    break
  default:
    console.log('Please enter a valid month')
}

// Check if a day is weekend day or a working day. Your script will take day as an input.
// What is the day  today? Saturday
// Saturday is a weekend.
// What is the day today? saturDaY
// Saturday is a weekend.
// What is the day today? Friday
// Friday is a working day.
// What is the day today? FrIDAy
// Friday is a working day.
let day = 'sunDaY'
let workStatus
switch(day.toLowerCase()){
  case 'monday':
  case 'tuesday':
  case 'wednesday':
  case 'thursday':
  case 'friday':
    day = day.charAt(0).toUpperCase() + day.slice(1).toLowerCase()
    console.log(`${day} is a working day`)
    break
  case 'saturday':
  case 'sunday':
    day = day.charAt(0).toUpperCase() + day.slice(1).toLowerCase()
    console.log(`${day} is a weekend`)
    break
  default:
    console.log('Please enter a valid day')
}