function solution(n){
    var answer = 0;
    let stringSplit = n.toString().split('');
    for (let i = 0; i < stringSplit.length; i++) {
        answer += Number(stringSplit[i]);
    }
    return answer;
}


function solution(n){
    // 쉬운방법
    return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
}

solution(123)