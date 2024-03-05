// function showDateTime() {
//     let now = new Date()
//     let day = now.getDay()
//     console.log(day)
//     day < 10
//     ? day = '0'+ day.toString()
//     : day
//     console.log(day)
//     let month = now.getMonth()
//     month < 10
//     ? month = '0'+ month.toString()
//     : month
//     let year = now.getFullYear()
//     let hour = now.getHours()
//     hour < 10
//     ? hour = '0'+ hour.toString()
//     : hour
//     let minutes = now.getMinutes()
//     minutes < 10
//     ? minutes = '0'+ minutes.toString()
//     : minutes
//     console.log(`${day}/${month}/${year} ${hour}:${minutes}`)
// }

// showDateTime()
let now = new Date()
console.log(now.getDay())