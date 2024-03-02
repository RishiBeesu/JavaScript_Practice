// Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )

//     YYY-MM-DD HH:mm eg. 20120-01-02 07:05
let now = new Date()
let day = now.getDay()
let month = now.getMonth()
let year = now.getFullYear()
let hour = now.getHours()
let minutes = now.getMinutes()
day<10
  ? day = `0${day}`
  : day
month<10
  ? month = `0${month}`
  : month
hour<10
  ? hour = `0${hour}`
  : hour
minutes<10
  ? minutes = `0${minutes}`
  : minutes
console.log(`${year}-${month}-${day} ${hour}:${minutes}`)