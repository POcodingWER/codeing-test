function solution(arr) {
    if(arr.length===1){
    return [-1]
    }else{
       //   console.log(Math.min(...arr)) 제일작은숫자찾기
       //   console.log(arr.indexOf(1)) 숫자위치찾기
       //   console.log(arr.splice(어디부터,몇개)) 잘라낼지
         arr.splice(arr.indexOf(Math.min(...arr)),1)
       return arr
    }

}

solution([4,3,2,1])