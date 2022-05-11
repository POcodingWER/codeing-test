// function solution(n) {
//     let num = [n.toString(3)]   //10->3진수로 치환
//     let change = num[0].split('')
//     let Box = []
//     for (const i of change) {
//         Box.unshift(i)
//     }
//     return parseInt(Box.join(''), 3);       //parseInt 3진법 ->10진수로
// }

const solution = (n) => {
    console.log([...n.toString(3)])         //이렇게 넣으면 split안쓰고 알아서 짤림
    return parseInt([...n.toString(3)].reverse().join(""), 3);
}

solution(45)