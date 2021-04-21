/* 2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом: 

+Функция сложения 2-х объектов-дробей;

+Функция вычитания 2-х объектов-дробей;

+Функция умножения 2-х объектов-дробей;

Функция деления 2-х объектов-дробей;

Функция сокращения объекта-дроби.

*/

function Fraction(upNumber, downNumber) {
  return { upNumber: upNumber, downNumber: downNumber };
}
let firstNumber = Fraction(5,10);
let secondNumber = Fraction(2,15);



// Функция для нахождения общего знаменателя;
function generalDenominatorCheck(obj1, obj2) {
    let i = obj1.downNumber;
    for (i; true; i++) {
      if (i % obj1.downNumber === 0 && i % obj2.downNumber === 0) {
        generalDenominator = i;
        break;
      }
    }
    return generalDenominator;
  }  
  console.log(generalDenominatorCheck(firstNumber, secondNumber));
// END 

// Функция сложения 2-х объектов-дробей;
function additionFraction(obj1, obj2) {
  if (obj1.downNumber == obj2.downNumber) {
    let resultUpNumber = obj1.upNumber + obj2.upNumber;
    return `${resultUpNumber}/${obj1.downNumber}`;
  } else {
    let check = generalDenominatorCheck(obj1, obj2);

    let numerator1 = obj1.upNumber * (check / obj1.downNumber);
    let numerator2 = obj2.upNumber * (check / obj2.downNumber);
    let sum = numerator1 + numerator2;
    return `${sum}/${check}`;
  }
}
console.log(additionFraction(firstNumber, secondNumber));
//END  


// Функция вычитания 2-х объектов-дробей;
function subtractionFraction(obj1, obj2) {
    if (obj1.downNumber == obj2.downNumber) {
      let resultUpNumber = obj1.upNumber - obj2.upNumber;
      return `${resultUpNumber}/${obj1.downNumber}`;
    } else {
      let check = generalDenominatorCheck(obj1, obj2);
  
      let numerator1 = obj1.upNumber * (check / obj1.downNumber);
      let numerator2 = obj2.upNumber * (check / obj2.downNumber);
      let sum = numerator1 - numerator2;
      return `${sum}/${check}`;
    }
  }
  console.log(subtractionFraction(firstNumber, secondNumber));
//END  

// Функция умножения 2-х объектов-дробей;

function multiFraction(obj1, obj2) {
    let resultUpNumber = obj1.upNumber * obj2.upNumber;
    let resultDownNumber = obj1.downNumber * obj2.downNumber;
    return `${resultUpNumber}/${resultDownNumber}`;
  }
  console.log(multiFraction(firstNumber, secondNumber));

//END 

// Функция деления 2-х объектов-дробей;

function divisionFraction(obj1, obj2) {
    let resultUpNumber = obj1.upNumber * obj2.downNumber;
    let resultDownNumber = obj1.downNumber * obj2.upNumber;
    return `${resultUpNumber}/${resultDownNumber}`;
  }
  console.log(divisionFraction(firstNumber, secondNumber));

//END 
  
// Функция сокращения объекта-дроби;

function ReductionFruction(obj) {

let i;
    if (obj.downNumber > obj.upNumber) {
       i = obj.upNumber
    }  else{
       i = obj.downNumber;
    }

    for (i; i > 1; i--) {
        if ((obj.upNumber % i === 0) && (obj.downNumber % i === 0)) {
            obj.upNumber = obj.upNumber / i;
            obj.downNumber = obj.downNumber /i;
        }
    }
    return `${obj.upNumber}/${obj.downNumber}`;
}
console.log(ReductionFruction(firstNumber));
//END 
  
  

