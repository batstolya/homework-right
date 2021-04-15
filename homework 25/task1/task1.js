function getNumber(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }

}
let a = prompt("Введите первое число!"); 
let b = prompt("Введите второе число!"); 

alert (getNumber(a, b));