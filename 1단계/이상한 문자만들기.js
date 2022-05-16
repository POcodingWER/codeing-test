function solution(s) {
    var Box = [];
    let stringSplit = s.split(' ')
    for (const word of stringSplit) {
    var answer = [];
        word.split('').map((a,i)=>{
            if(i%2 === 0){
                answer.push(a.toUpperCase())
            }else{
                answer.push(a.toLowerCase())
            }
        })
     Box.push(answer.join(''))
    }
    return Box.join(' ');
}

solution("try hqwe qwe")