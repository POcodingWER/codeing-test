function solution(strings, n) {
    var answer = [];
    strings.sort()
    let stringSort=strings.map(a=>a.split(""))
   console.log( stringSort.sort((a,b)=>{
       a[n] - b[n]
    },0))
    stringSort
    return answer;
}

solution(["sun", "bed", "car"],1)