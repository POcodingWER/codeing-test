function solution(seoul) {
    let answer = 0
     seoul.map((name,i)=>{
        if(name === "Kim") {
            answer =   `김서방은 ${i}에 있다`;
        }
     })
     return answer
}

function findKim(seoul) {
    return "김서방은 " + seoul.indexOf('Kim') + "에 있다";
}

console.log(solution(["Jane", "Kim"]))