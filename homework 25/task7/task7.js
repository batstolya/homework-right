function setTime(h, m, s) {
    h = +h || 0;
    m = +m || 0;
    s = +s || 0;
    if (0 === m && 0 === s  ) {
        return `${h}:00:00`;
    } else if (0 === m){
        return `${h}:00:${s}`;
    } else if (0 === s) {
        return `${h}:${m}:00`;
    } else return `${h}:${m}:${s}`
    
}

let h = 8;
let m;
let s;

// let h = prompt("Введите часы!"); 
// let m = prompt("Введите минуты!");
// let s = prompt("Введите секунды!");
// console.log(h);
// console.log(m);
// console.log(s);

// alert(setTime(h,m,s));

console.log(setTime(h,m,s));

