function solution(s) {
    let a = s.split('');
    if(a.length%2 === 0 ){
       let x = a.slice(parseInt(a.length/2)-1,parseInt(a.length/2)+1)
        return x.join('');
    }else{
        return a[parseInt(a.length/2)];
        
    }

}

console.log(solution("qwer"))