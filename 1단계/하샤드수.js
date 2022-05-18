function solution(x) {
    let stringSplit =  x.toString().split('').map(a=>parseInt(a)).reduce((a,b)=>{return a+b},0)
    return x%stringSplit===0?true:false;
}

solution(10)