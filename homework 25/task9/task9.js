/*
Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.
1) Найти сколько в секундах часов (делим секунды на 3600 и округливаем) это будут часы
2) Найти минуты те которые остались с деления на 3600
3) Остача от деления на 60

*/

function getFormattedTime(s) {
    let resultSecond = s % 60; 
    let resulHours = Math.floor(s / (60*60)); 
    let resulMinutes = Math.floor(s % 3600 / 60)
    // console.log(resultSecond);
    // console.log(resulHours);
    // console.log(resulMinutes);
    let fS = `${resultSecond}`.padStart(2, '0')
    let fM = `${resulMinutes}`.padStart(2, '0')
    let fH = `${resulHours}`.padStart(2, '0')

   return `${fH }:${fM}:${fS}`;
}

console.log(getFormattedTime(3000));
