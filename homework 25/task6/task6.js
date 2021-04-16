/*
Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона,
которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет. 

*/

function getPerfectNumber(n) {
    let sum = 0;
    for(let i = 1; i < n; i++) {
        if (n % i === 0) {
            sum = sum + i;
        }
    }
    return n === sum;
}


function getRange(min, max) {
    for (let i = min; i <= max; i++ ){
        if (getPerfectNumber(i)) {
            console.log (i);
        }
    }
}

console.log(getRange(1, 30));
