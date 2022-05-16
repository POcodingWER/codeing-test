function solution(n) {
    var answer = '';
    for (let i = 1; i <= n; i++) {
        if(i%2)  answer = answer+'수'
        else  answer =  answer+'박'
    }
    return answer;
}
const waterMelon = n => "수박".repeat(n).slice(0,n);        //반복하고 글자수만큼 삭제

console.log(waterMelon(1))
solution(3)