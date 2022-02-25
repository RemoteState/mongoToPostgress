const moment = require('moment')
const momentTimeZone = require('moment-timezone')
//Date + time default in localtimezone
let m = moment()
// console.log(m)
// console.log(m.toString())
// console.log(m.toISOString())
// Moment<2022-02-24T19:20:36+05:30>
// Thu Feb 24 2022 19:20:36 GMT+0530
// 2022-02-24T13:50:36.727Z Z means UTC

//ISO 8601 YYYY-MM-DD
let userDate = "2022-02-27"
// console.log(moment(userDate).startOf('isoWeek').format('YYYY-MM-DD'))
let mondayDate = moment(userDate).startOf('isoWeek').format('YYYY-MM-DD')
console.log(momentTimeZone.tz(new Date(mondayDate+ 'T00:00:00Z'),'America/Los_Angeles').toString())
let start = momentTimeZone.tz(new Date(mondayDate+ 'T08:00:00Z'),'America/Los_Angeles').toString();
let originalDate = new Date(userDate+ 'T07:59:59Z')

//increase original date by 1
originalDate.setDate(originalDate.getDate()+1)
console.log(originalDate)
let end = momentTimeZone.tz(originalDate,'America/Los_Angeles').toString();
console.log(start, end)
// Moment<2022-02-21T00:00:00+05:30>
