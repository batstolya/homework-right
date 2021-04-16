
function getFormattedSecond (h,m,s){
    let resulHours = h * 60 * 60;
    let resulMinutes = m * 60;
    let result = resulHours + resulMinutes + s;
    return result;
}

let h = prompt("Введите часы!"); 
let m = prompt("Введите минуты!");
let s = prompt("Введите секунды!");

alert(getFormattedSecond(h, m, s));
