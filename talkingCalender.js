
/*Create a function named talkingCalendar that takes in a date string with the format YYYY/MM/DD, and returns a new human readable date that looks like December 2nd, 2017.*/


const talkingCalendar = function(date) {
 
var year;
var M;
var D;
var x=0;
var y=0;
var month = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var day = ['1st', '2nd','3rd','4th','5th','6th','7th','8th','9th','10th','11th','12th','13th','14th', '15th','16th','17th','18th','19th', '20th','21st','22nd','23rd','24th','25th','26th','27th','28th','29th','30th','31st'];
x = date.slice(5, 7);//slicing month
y = date.slice(8, 10);//slicing day
year = date.slice(0,4);//slicing year
M = month[x-1];
D = day[y-1];
console.log( M + ' ' + D + ', '+year);

};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));