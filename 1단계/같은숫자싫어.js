function solution(arr){         //효율성 통과못함 for 문안에 splice쓰니깐 너무 느려짐
    for (let i = 1; i < arr.length; i++) {
        if(arr[i-1] === arr[i]){
            arr.splice(i,1)
            i--
        }
    }
    return arr;
}

function solution(arr) {
    return arr.filter((element, index) => element !== arr[index + 1]);
  }

solution([1,1,3,3,0,1,1])