let year = prompt ("Введите год для проверки", 0);

let yearYes = year % 4 == 0;
let yearNot = year % 100 !== 0;



if (yearYes && yearNot){
    alert("Этот год високосный!");
} else {
    alert('Этот год не високосный!');
}


// if ((+year / 400 || year /4) && !(year /100 )    ) {
//     alert("Это високосный год!")
// } else {
//     alert("Это невисокосный год!")
// }

