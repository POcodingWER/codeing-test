function solution(N, stages) {
    let user = stages;
    const answer = []
    const Box = []
    for (let i = 1; i <= N; i++) {
       let x = user.filter((el) => el === i);
       Box.push( [i, x.length/user.length] )
       user = user.filter((el) => el !== i);
    }
    Box.sort((a,b)=> b[1] - a[1]);
    return Box.map((x) => x[0]);
}


function solution(N, stages) {
    let result = [];
    for(let i=1; i<=N; i++){
        let reach = stages.filter((x) => x >= i).length;  //i보다 크거나작은것만 나오게
        let curr = stages.filter((x) => x === i).length;    
        result.push([i, curr/reach]);
    }
    result.sort((a,b) => b[1] - a[1]);
    return result.map((x) => x[0]);
}


solution(5,	[2, 1, 2, 6, 2, 4, 3, 3])