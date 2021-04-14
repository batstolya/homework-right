let price = prompt("Какая сумму покупки?", 0);


if (price >= 200 && price <=299) {
    let Discount = (price / 100) * 3;
    let priceaDiscount =  price - Discount;  
    alert(`Цена покупки со скидкой в 3% составляет : ${priceaDiscount} UAN`);
} else if (price >= 300 && price <= 499)  {
    let Discount = (price / 100) * 5;
    let priceaDiscount =  price - Discount;  
    alert(`Цена покупки со скидкой в 5% составляет : ${priceaDiscount} UAN`);
} else if (price >= 500)  {
    let Discount = (price / 100) * 7;
    let priceaDiscount =  price - Discount;  
    alert(`Цена покупки со скидкой в 7% составляет : ${priceaDiscount} UAN`);
} 
else {
    alert("На такую сумму скидка не предусмотрена")
}

