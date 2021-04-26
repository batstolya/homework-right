let min = 0;
let max = 100;

let value = +prompt('Введите число от 0 до 100!');

while (min < max) {
    let response = prompt('Ваше число > 50, или < 50  == 50?');

    if (response === '<') {
        max = math.ceil((min + max) / 2);
    } else if (response === '>'){
        min = math.floor((min + max) / 2);
    } else if (response === '=='){
       //do nothing
    } else {
        alert('Такой опции нет!');
    }
}

