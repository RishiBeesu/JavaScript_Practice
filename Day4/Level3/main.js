// Write a program which tells the number of days in a month.
// Enter a month: January
// January has 31 days.
// Enter a month: JANUARY
// January has 31 day
// Enter a month: February
// February has 28 days.
// Enter a month: FEbruary
// February has 28 days.
let month = 'FebRuary'
switch(month.toLowerCase()){
    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
      month = month.charAt(0).toUpperCase() + month.slice(1).toLowerCase()  
      console.log(`${month} has 31 days.`)
      break
    case 'february':
      console.log('February has 28 days')
      break
    case 'april':
    case 'june':
    case 'september':
    case 'october':
      month = month.charAt(0).toUpperCase() + month.slice(1).toLowerCase()  
      console.log(`${month} has 30 days.`)
      break
    default:
        console.log('please enter a valid month')
}
//   Write a program which tells the number of days in a month, now consider leap year.
let newMonth = 'FebRuary'
let year = 2020
switch(newMonth.toLowerCase()){
    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
      newMonth = newMonth.charAt(0).toUpperCase() + newMonth.slice(1).toLowerCase()  
      console.log(`${newMonth} has 31 days.`)
      break
    case 'february':
      if (year % 4 === 0) {
        console.log('February has 29 days')
        break
      }
      else {
        console.log('February has 28 days')
        break
      }
    case 'april':
    case 'june':
    case 'september':
    case 'october':
      newMonth = newMonth.charAt(0).toUpperCase() + newMonth.slice(1).toLowerCase()  
      console.log(`${newMonth} has 30 days.`)
      break
    default:
        console.log('please enter a valid month')
}