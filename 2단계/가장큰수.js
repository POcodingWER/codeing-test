function solution(numbers) {
    var answer = '';
    let test
    numbers.sort().reverse()
    numbers
    for (let i = 0; i < numbers.length; i++) {
        i
        if(numbers[i]%10===0){
            i
            numbers
            test = numbers.splice(numbers.indexOf(numbers[i]),1);
            numbers
            numbers.splice(i+1,0,...test)
            numbers
            i++
        }
    }
    numbers
    return answer;
}

function solution(numbers) {
    var answer = '';
    numbers.sort((a,b)=>sortFunc(a,b))
    answer = numbers.join('')
    if(answer[0] === '0') return '0'
    return answer;
}
const sortFunc =  (a,b) =>{
    const compareA = parseInt(a.toString() + b.toString())  //글자로바꿔서 큰글자찾는거같은디..
    compareA
    const compareB = parseInt(b.toString() + a.toString())
    compareB
    console.log(compareB - compareA)
    return compareB - compareA
}

solution([3,30,31,33])