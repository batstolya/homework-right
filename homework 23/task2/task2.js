let age = prompt("Введите любое число! От 0 до 9", 1);

switch (+age) {
  case 0:
    alert(")");
    break;
  case 1:
    alert("!");
    break;
  case 2:
    alert("@");
    break;
  case 3:
    alert("#");
    break;
  case 4:
    alert("$");
    break;
  case 5:
    alert("%");
    break;
  case 6:
    alert("^");
    break;
  case 7:
    alert("&");
    break;
  case 8:
    alert("*");
    break;
  case 9:
    alert("(");
    break;
  default:
    alert("Введите число от 0 до 9!");
}
