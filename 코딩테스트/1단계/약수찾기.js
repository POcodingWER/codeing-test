function solution(left, right) {
    let answer = 0;

    for (let i = left; i <= right; i++) {
        let 홀짝 = 0;
        for (let j = 1; j <= i; j++) {
            if(i%j === 0){
                홀짝 ++
            }
        }
        if(홀짝%2 ===0)answer += i
        else answer -= i
    }
    return answer;
}

function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) {   //제곱근이 정수면, 약수의 갯수가 홀수인거죠..? 
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}

solution(13,17)