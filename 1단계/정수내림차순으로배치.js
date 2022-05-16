function solution(n) {
    var answer = 0;
    console.log(Number(n.toString().split('').map(a=>parseInt(a)).sort((a,b)=>b-a).join('')))
    return answer;
}

solution(118372)
