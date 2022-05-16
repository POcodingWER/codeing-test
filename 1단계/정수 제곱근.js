function solution(n) {
    // Math.sqrt(9); // 3
    // Math.sqrt(2); // 1.414213562373095

    if(Number.isInteger(Math.sqrt(n))){             //isInteger 정수인지 확인 
    // if(Math.sqrt(n)%1 ===0){    
        return Math.pow( Math.sqrt(n)+1,2)          //정수가 맞으면 +1해서 제곱근만들어서리턴
    }
    return -1;                      //제곱이 정수가아니면 -1
}

solution(3)