function solution(n, lost, reserve) {
    let answer = 0;
    let studentClothes = new Array(n + 2).fill(1);
    for (const student of reserve)studentClothes[student] += 1; //체육복이2개인사람찾기
    studentClothes
    for (const student of lost) studentClothes[student] -= 1;   //잏어버린사람찾기
    studentClothes
    for (let i = 1; i < n + 1; i++) {
      if (studentClothes[i] === 0) {    //옷이없는 번호찾아서
        if (studentClothes[i - 1] === 2 || studentClothes[i + 1] === 2) {   //앞이 2 뒤가 2일때
          if (studentClothes[i - 1] === 2) {    //앞이 2일때
            studentClothes[i - 1] -= 1;
            studentClothes[i] += 1;
          } else {  //뒤가 2일때
            studentClothes[i + 1] -= 1;
            studentClothes[i] += 1;
          }
        }
      }
    }
    for (const student of studentClothes) {
      answer += student > 0 ? 1 : 0;
    }
    answer -= 2;
    return answer;
  }
  


solution(5,	[2, 4],	[1, 3, 5])