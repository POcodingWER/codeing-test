function solution(s){           //스텍구조로 풀면풀림
    
    var answer = -1;
    let notPairStack = []
    for(let i=0; i<s.length; i++){
        console.log(s[i])
        notPairStack[notPairStack.length-1] === s[i] ?  notPairStack.pop() : notPairStack.push(s[i])    //같은게있으면 빼고 없으면 넣어주고
        notPairStack
    } 
    answer = notPairStack.length === 0 ? 1 : 0;          //길이가 0이면 성공(1) 아니면 싱패(0)
    return answer;
}

// function solution(s)
// {
//     var stringToArray = s.split('');
//     var res = [];

//     for (var val of stringToArray){
//         if( val === res[res.length -1]){
//             res.pop() 
//         } else { res.push(val)}
//     } 
//     return res.length === 0 ? 1 : 0 ;
// }

solution('cbaabaac')