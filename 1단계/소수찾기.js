function solution(num) {
    var answer = 0;
    const isPrime = (num) => {                    //소수 찾는 함수
      for (let i = 2; i <= num/2; i++) {        //숫자의 제곱근까지만 확인하면 됨
          if (num % i === 0) return false;        //나누어지면 소수아니니깐 false;
        }
        return true;
      }

    for (let i = 2; i <= num; i++) {
      if(isPrime(i)) answer++;
    }

    return answer;
}

console.log(solution(10))