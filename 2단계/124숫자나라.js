function solution(n) {
    var answer = '';
    console.log(n.toString(4))
    console.log(parseInt(n/4))
    console.log(n%3)
    console.log(n/3/3/3)
    console.log(n/3/3/3/3/3/3)
    
    for (let i = 1; i <= n; i++) {
        if(i%4 === 0 ) answer++
    }
    console.log(answer*11)
    return answer;
}

solution()