
function solution(participant, completion) {
    participant = participant.sort();
    completion = completion.sort();
    for (let i = 0; i < completion.length; i++) {
      if (participant[i] !== completion[i]) return participant[i];
    }
    return participant[participant.length - 1];
  }

  function solution(participant, completion) {
      const map = new Map();
  
      for(let i = 0; i < participant.length; i++) {
          let a = participant[i], 
              b = completion[i];
          map.set(a, (map.get(a) || 0) + 1);    //출전자 키설정해주고 
          map.set(b, (map.get(b) || 0) - 1);    //완주자    빼주면 
      }

      for(let [k, v] of map) {          //탈락자나옴
          if(v > 0) return k;
      }
  
      return 'nothing';
  }
  
solution(["mislav", "stanko", "mislav", "ana"],["stanko", "ana", "mislav"])