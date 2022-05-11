function solution(nums) {
    const choice = nums.length/2
    choice
    const n = [...new Set(nums)];
    if(n.length > choice){
        return choice;
    }else{
        return n.length;
    }
}

function solution(nums) {
  const max = nums.length / 2;
  const arr = [...new Set(nums)];

  return arr.length > max ? max : arr.length
}
solution([3,1,2,3])