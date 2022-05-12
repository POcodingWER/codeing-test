function solution(sizes) {
    var answer = [];
    let 가로 = 0;
    let 세로 = 0;

    sizes.map(a=>{
        answer.push(a.sort((a,b)=>a-b))
    })
    for (const num of answer) {
        console.log(num[0])
        if(num[0] > 가로){ 가로 = num[0]; }
        if(num[1] > 세로){ 세로 = num[1]; }
    }
    return 가로 * 세로 ;
}

function solution(sizes) {
    const [hor, ver] = sizes.reduce(([h, v], [a, b]) => [Math.max(h, Math.max(a, b)), Math.max(v, Math.min(a, b))], [0, 0])
    return hor * ver;
}

solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]])