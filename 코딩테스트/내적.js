function solution(a, b) {
    let answer = a.reduce((acc,cur,i)=>acc+(cur*b[i]),0);
        
    answer
    
    return answer;
}

solution([1,2,3,4],[-3,-1,0,2])