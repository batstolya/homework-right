function getPerfectNumber(n) {
    let sum = 0;
    for(let i = 1; i < n; i++) {
        if (n % i === 0) {
            sum = sum + i;
            console.log(`Число ${i} дильник`)
        }
    }
    return n === sum;
}

getPerfectNumber(7);