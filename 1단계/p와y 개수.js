function solution(s){
    let Ycount =0;
    let Pcount =0;
    s = s.toLowerCase()
    let string = s.split('')
    for (const a of string) {
        
        if(a === 'p') Pcount++;
        if(a ==='y') Ycount++;
    }
    return Pcount===Ycount? true:false;
}


function solution(s){
    //함수를 완성하세요
    console.log(s.toUpperCase().split("P"))
    console.log(s.toUpperCase().split("Y"))
      return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
  }
  
solution("pPoooyY");