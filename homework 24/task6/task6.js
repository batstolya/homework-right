/* 
Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, 
вывести результат и спросить, хочет ли он решить еще один пример.
И так до тех пор, пока пользователь не откажется.
*/
let a;

do {
    a = confirm("Посчитаем?");
    if (!a){
        break;
    }
    let b = +prompt('Введите number!');
    let c = +prompt('Введите number2!');
    let sing = prompt('Введите знак!');

    if (sing == "*"){
        alert(b*c);
    } else if (sing === "/") {
        alert(b / c);
    } else if (sing === "+") {
        alert(b + c);
    } else if (sing === "-")  {
        alert(b - c);
    }


} while (a);







 