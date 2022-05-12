function solution(price, money, count) {
    let totalMoney = 0; 

    for (let i = 1; i <= count; i++) {
        totalMoney += i*price
    }
    return totalMoney < money ? 0 :totalMoney-money;
}


function solution(price, money, count) {
    const tmp = price * count * (count + 1) / 2 - money;
    return tmp > 0 ? tmp : 0;
}

solution(3,20,4)