var fs = require('fs');
const moment = require('moment');
const today = moment()
var time ="현재 시간은" + today.format('HH:mm:ss') +"입니다"

console.log(time);

   var data = fs.readFileSync('date.txt', 'utf-8');

   console.log(data);
   
 
   fs.appendFileSync('date.txt', data, 'utf-8')
