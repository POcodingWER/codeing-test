function solution(new_id) {
    let answer = new_id
    .toLowerCase()                  //step 1    소문자로 바꿈
    .replace(/[^0-9a-z._-]/g, "")   //step 2    특수문자삭제
    .replace(/\.+/g, ".")           //step 3    ...삭제하고 1개로바꿈
    .replace(/^\.|\.$/g, "")        //step 4    처음위치한 .삭제
    .replace(/^$/, "a")             //step 5    아무것도없을때 a넣어줌
    .slice(0, 15)                   //step 6    15자로 맞춰줌
    .replace(/\.$/, "");            //   마지막 . 삭제
    // step7
    if (answer.length === 1) answer = answer[0].repeat(3);      //1글자면 3개로바꿔주고
    if (answer.length === 2) answer = answer + answer[1];       //2글자면 마지막 2번째꺼 3번째 넣어주고
  return answer;
}

function solution(new_id) {
    const answer = new_id
        .toLowerCase()              // 1
        .replace(/[^\w-_.]/g, '')   // 2
        .replace(/\.+/g, '.')       // 3
        .replace(/^\.|\.$/g, '')    // 4
        .replace(/^$/, 'a')         // 5
        .slice(0, 15).replace(/\.$/, ''); // 6
    const len = answer.length;
    return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}

solution("...!@BaT#*..y.abcdefghijklm")

