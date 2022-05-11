function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let answer = s;

    for(let i=0; i< numbers.length; i++) {
        let arr = answer.split(numbers[i]);     //numbers[i] 잘라라서 배열로만들고[''numbers[i]삭제 '']
        answer = arr.join(i);                   //['1'i넣어서 붙여'2'] ->  1i2
    }
    answer
    return Number(answer);
}

// function solution(s) {
//     s = s.replace(/zero/gi, 0)
//     .replace(/one/gi, 1)
//     .replace(/two/gi, 2)
//     .replace(/three/gi, 3)
//     .replace(/four/gi, 4)
//     .replace(/five/gi, 5)
//     .replace(/six/gi, 6)
//     .replace(/seven/gi, 7)
//     .replace(/eight/gi, 8)
//     .replace(/nine/gi, 9)
//     return parseInt(s);     //문자열 숫자로 바꿔줌
// }
solution("one4seveneight")