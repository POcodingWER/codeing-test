function solution(a, b) {
    let count = 0;
    const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const month = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    for (let i = 1; i < a; i++) count += month[i];  //해달 달보다 작은 달일때는 일 더해주고
    count += b;                                     // 마지막 달 날짜 더해주고
    return day[(count + 4) % 7];        // 금요일 부터 1일 이므로
  }


  function solution(a,b){
    var date = new Date(2016, (a - 1), b);
    console.log(new Date(2016, (a -1), b))
      return date.toString().slice(0, 3).toUpperCase();
  }

  solution(5,24)