

function solution(lottos, win_nums) {
    const zeroCount = lottos.filter((e) => e === 0).length; //0개수찾기
    const matchCount = win_nums.filter((e) => lottos.includes(e)).length;   //맞는개수찾기
    const matchToRank = [6, 6, 5, 4, 3, 2, 1];          //등수매기기 
    const lowRank = matchToRank[matchCount];            //맞은것만출력
    const highRank = zeroCount === 6 ? 1 : matchToRank[matchCount + zeroCount];     //zero가 6개면 1등 아니면 맞는거 + 0개수
    
    return [highRank, lowRank];
}


function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];

    let minCount = lottos.filter(v => win_nums.includes(v)).length;
    let zeroCount = lottos.filter(v => !v).length;

    const maxCount = minCount + zeroCount;

    return [rank[maxCount], rank[minCount]];
}
solution([44, 1, 0, 0, 31, 25],[31, 10, 45, 1, 6, 19])