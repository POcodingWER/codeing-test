function solution(array, commands) {
    let answer = [];
    commands.forEach(el => {
        answer.push([...array.slice(el[0]-1, el[0] === el[1] ? el[1] : el[1])].sort()[el[2]-1])
    })
    answer
    return answer;
}

solution([1, 5, 2, 6, 3, 7, 4],[[2, 5, 3], [4, 4, 1], [1, 7, 3]])