function solution(numbers) {
    var answer = [];
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i])
        for (let j = 0; j < i; j++) {
            answer.push(numbers[i]+numbers[j])
        }
    }
    answer = [...new Set(answer)].sort((a,b)=>a-b,0)
    return answer;
}


solution([2,1,3,4,1])