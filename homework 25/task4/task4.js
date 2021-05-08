function getArea(l, b) {
    if (l && b) {
        return l * b;
    } else {
        return l*l;
    }
}

let l = +prompt('Введите длину прямоугольника!')
let b = +prompt('Введите ширину прямоугольника!')

alert(getArea (l , b));