function solution(n) {
    var nswer = []
    let stringRevers = n.toString().split('').reverse()
    for (const a of stringRevers) {
        nswer.push(Number(a))
    }
    return nswer;
}
function solution(n) {
    console.log(n.toString().split('').reverse().map(o =>parseInt(o)))
    return n.toString().split('').reverse().map(o => o = parseInt(o));
}

solution(12345)