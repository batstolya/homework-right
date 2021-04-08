let number = prompt('Введите любое пятиразрядное число от  10000 to 99999', 0);
    number = number + '';
    if (number === number.split('').reverse().join(''))
        alert('Является палиндромом');
    else
        alert('НЕ есть палиндромом');