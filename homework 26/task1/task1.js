function car(manufacturer,model,year,averageSpeed) {
  
    let result = {manufacturer:manufacturer, model:model, year:year, averageSpeed:averageSpeed};
    return result;
}

function ShowInfo(car) {
    console.log(`Инфо об машине: ${car.manufacturer}!`);
    console.log(`----------------------`);
    for (let key in car) {
        console.log(`${key} - ${car[key]}`);
    }
    console.log(`----------------------`);
}

function calcTimeInRoad(distance,car) {
    resultTime = parseFloat(distance) / parseFloat(car.averageSpeed);
    resultTimeFin = resultTime;

    console.log(`Вам нужно потратить на дорогу - ${resultTimeFin} часов `);
}

let car1 = new car('Lexus', 'SUV', 2020, '200km/h');
let car2 = new car('Hyundai', 'Tucson', 2021 , '160km/h');
ShowInfo(car1);
ShowInfo(car2);
calcTimeInRoad('200km',car2);