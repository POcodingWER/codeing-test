function solution(num) {
    var answer = 0;
    if(num === 1){ 
        return answer
    }else{
        for (let index = 0; index < 500; index++) {
            if (num%2 ===0){//짝수면
                num = num/2
            }else{
                num = num*3 +1
                num
            }
            answer++;
            if(num===1){
                return answer
            }
            if(answer === 500 ){
                return -1;
            }
            
        }
    }
}

function solution(num,count = 0) {
    return num == 1 ? (count >= 500 ? -1 : count) : collatz(num % 2 == 0 ? num / 2 : num * 3 + 1,++count);
}

solution(1)