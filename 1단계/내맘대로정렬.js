function solution(strings, n) {
    var answer = [];
    let stringSort=strings.map(a=>a.split(""))
   console.log( stringSort.sort((a,b)=>{
    },0))
    stringSort
    return answer;
}

function solution(strings, n) {
    return strings.sort((a, b) => {
      if (a[n] < b[n]) return -1;
      if (a[n] > b[n]) return 1;
      if (a[n] === b[n]) return a < b ? -1 : 1;
      return 0;
    });
  }

solution(["sun", "bed", "car"],1)

//sort 정렬 하는법
// var object = {
//     name:'banana', price:3000,
//     name:'apple', price:39900,
//     name:'coconut', price:2000
//   }
  
//   console.log(object.sort(function(a, b) { 
//       return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
//   })) // 오름차순 정렬
  
//   console.log(object.sort(function(a, b) {
//       return a.name > b.name ? -1 : a.name > b.name ? 1 : 0;
//   });) // 내림차순 정렬