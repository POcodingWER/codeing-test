function solution(phone_number) {
    var answer = '';
    let endNum = phone_number.slice(-4)
    for (let i = 0; i < phone_number.length-4; i++) {
        answer += '*';
    }
    return answer + endNum;
}

function solution(s) {
    var result = "*".repeat(s.length - 4) + s.slice(-4);
    result
    return result;
}

solution("01033334444")