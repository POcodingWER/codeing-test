function solution(numbers, hand) {
    let right = "#"
    let left = "*"
    let answer = ""
  
    // 키패드 좌표
    let keypads = [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
          ["*", 0, "#"],
      ];
  
    // 거리 구하기
    const getDistance = (start, target) => {
      let startPosition;
      let targetPosition;
      for (let i = 0; i < keypads.length; i++) {
        for (let j = 0; j < keypads[i].length; j++) {
          if (keypads[i][j] === start) startPosition = [i, j]       
          if (keypads[i][j] === target) targetPosition = [i, j]
        }
      }
      return Math.abs(targetPosition[0] - startPosition[0]) + Math.abs(targetPosition[1] - startPosition[1])
    }   // Math.abs 양수로 바꿔주는 함수
  
    
    numbers.forEach(num => {
      // 1 4 7
      if(num % 3 === 1) {       
          num
        answer += "L"
        left=num
      }
      // 3 6 9
      else if(num % 3 === 0 && num !== 0) {
        answer += "R"
        right=num
      } 
      // 2 5 8 0
      else {
        // 오른손 거리가 더 짧으면
        if(getDistance(left, num) - getDistance(right, num) > 0 ) {
          answer+= "R"
          right = num
        }
        // 거리가 같을 때
        else if (getDistance(left, num) - getDistance(right, num) === 0) {
          // 오른손 잡이
          if (hand === "right") {
            answer+= "R"
            right = num
          } 
          // 왼손 잡이
          else {
            answer+= "L"
            left = num
          }
        } 
        // 왼손 거리가 더 짧으면
        else {
          answer+= "L"
          left = num
        }
      }
    });
    
    return answer;
  }

  solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5],"right")


