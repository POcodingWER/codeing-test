function solution(numbers) {
    let answer = 0;
    // 1~9 의 합을 구함
    for (let i = 1; i < 10; i++) {
      answer += i
    }
    
    // 주어진 값을 빼줌
    numbers.forEach(num => {
      answer -= num
    });
    
    return answer;
  }


function solution(numbers) {
    return 45 - numbers.reduce((accumulator, currentObject) => (accumulator + currentObject),0);
}
solution([1,2,3,4,6,7,8,0])