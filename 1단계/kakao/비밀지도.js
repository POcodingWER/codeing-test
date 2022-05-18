function solution(n, arr1, arr2) {
    var answer = [];
    for (let i = 0; i <n; i++) {
        answer.push([])
        let testArr = arr1[i].toString(2).padStart(n,'0');
        let testArr2 = arr2[i].toString(2).padStart(n,'0');
        
        for (let j = 0; j < n; j++) {
        if(testArr[j] == 1 || testArr2[j] == 1){
            answer[i][j]= '#'
        }else{
            answer[i][j]= ' '
        }
    }
     answer[i]= answer[i].join('')
    }
    return answer;
}

var solution=(n,a,b)=>a.map((a,i)=>(a|b[i]).toString(2).padStart(n,0).replace(/0/g,' ').replace(/1/g,'#'))
                            //      OR연산은로 걸러내고 2진법에 숫자 몇개로 ?쪼개고  찾아서 0이면 없에고 1이면 #
console.log(solution(5,[9, 20, 28, 18, 11],[30, 1, 21, 17, 28]))

let eeeee = Number(5).toString(2);
let kkkkk = Number(2).toString(2);
eeeee
kkkkk
console.log(eeeee|kkkkk)  ///OR연산 
console.log(eeeee&kkkkk)  ///AND연산 
console.log(eeeee+kkkkk)  ///+연산 
console.log(parseInt(eeeee|kkkkk,2))
