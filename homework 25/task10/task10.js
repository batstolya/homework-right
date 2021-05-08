

function getFormattedSecond (h,m,s){
    let resulHours = h * 60 * 60;
    let resulMinutes = m * 60;
    let result = resulHours + resulMinutes + s;
    return result;
}
function getFormattedTime(s) {
    let resultSecond = s % 60; 
    let resulHours = Math.floor(s / (60*60)); 
    let resulMinutes = Math.floor(s % 3600 / 60)

    let fS = `${resultSecond}`.padStart(2, '0')
    let fM = `${resulMinutes}`.padStart(2, '0')
    let fH = `${resulHours}`.padStart(2, '0')

   return `${fH }:${fM}:${fS}`;
}
let h = +prompt("Введите часы!"); 
let m = +prompt("Введите минуты!");
let s = +prompt("Введите секунды!");
let a = +prompt("2Введите часы!"); 
let b = +prompt("2Введите минуты!");
let c = +prompt("2Введите секунды!");

let firstDate = getFormattedSecond(h, m, s);
let secondDate = getFormattedSecond(a, b, c);

function getDifferenceDates (firstDate , secondDate) {
    if (firstDate > secondDate) {
        return getFormattedTime(firstDate);
    } else {
        return getFormattedTime(secondDate);
    }
}8
alert(getDifferenceDates (firstDate, secondDate));