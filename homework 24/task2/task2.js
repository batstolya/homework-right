// Запросить 2 числа инайти только наибольший общий делитель. 
let a = +prompt("Введите пожалуйста первое число");
let b = +prompt("Введите пожалуйста второе число");
let divider = a > b ? b : a;

while (divider >= 1) {
    if (a % divider === 0 && b % divider === 0 ) {
        alert(divider);
        break;
    }
     divider--; //20 19 28 17
} 
