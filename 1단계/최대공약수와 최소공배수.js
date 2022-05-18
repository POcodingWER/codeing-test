 function  solution(n, m) {
    var answer = [];
    for (let i = 0; i <= m; i++) {  //최대 공약수
        if(n%i === 0){
            if(m%i === 0){
                answer[0] = i
            }
        }        
        answer[1] = m*n/ answer[0]  //공배수 둘이곱하고 나누면되는거였네
    }
    
    return answer
}

// function solution(n, m) {
//     const gcd = greatestCommonDivisor(n, m);   
//     return [gcd, (n * m) / gcd];
//   }
  
//   const greatestCommonDivisor = (a, b) => {
//     if (b === 0) return a;
//     else return greatestCommonDivisor(b, a % b);
//   };

console.log(solution(3,12))

