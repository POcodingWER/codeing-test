
function solution(d, budget) {
    d.sort((a,b)=>a-b)
    var answer = 0;
    let Box =[]
    for (let i = 0; i < d.length; i++) {
        answer += d[i];
        Box ++;
        if(budget <= answer) {
            if(budget === answer){
                return Box;     
            }
        return Box - 1;
        }
    }
    return Box;     //부서가한개이면
}

function solution(d, budget) {
    let answer = 0;
    d.sort((a, b) => a - b);
    for (const department of d) {
      if (budget < department) break;
      answer += 1;
      budget -= department;
      department
    }
    return answer;
  }
solution([1,3,2,5,4]	,9)