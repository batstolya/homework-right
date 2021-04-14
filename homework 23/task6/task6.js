let amount = prompt("Enter the amount of USD:", 0);
let currency = prompt("EUR = 1, UAH = 2, AZN = 3", 0);
switch (currency) {
  case "1":
    alert(amount * 0.84 + " " + "EUR");
    break;
  case "2":
    alert(amount * 27.91 + " " + "UAH");
    break;
  case "3":
    alert(amount * 1.70 + " " + "AZN");
    break;
}
