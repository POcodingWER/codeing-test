function solution(s) {
    console.log(s.search(/\D/g))
    if(s.length===4||s.length===6){
        return Number(s)? true :false;
    }else{
        return false
    }
}

console.log(solution("131"))
// console.log(solution("1a31"))