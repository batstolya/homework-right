    let capital = prompt('Какая столица Украины? 1 - Киев 2 - Львов 3 - Белая Церковь');
    let currency = prompt('Какая валюта в Украине? 1 - USD 2 - UAH 3 - RMB');
    let independence = prompt('С какого года Украина стала независимым государством? 1 - 1985г.  2 - 2001г. 3 - 1991г.');
    let score = 0;
    if (capital == 1)
    score = score + 2 
        // score += 2;
    if (currency == 2)
    score = score + 2 
        // score += 2;
    if (independence == 3)
    score = score + 2 
        // score += 2;
    alert('Вы набрали ' + score + ' балов!');