function solution(a, b) {
    let num =0;
    if (a<b) {
        for (let i = a; i <= b; i++) {
            num += i;
        }
        num
    }else{
        for (let i = b; i <= a; i++) {
            num += i;
        }
        num
    }
    return num;
}

function adder(a, b){
    console.log((Math.abs(b-a)+1)/2)
    return (a+b)*(Math.abs(b-a)+1)/2;
}
console.log(adder(5,5))
solution(5,5)