function solution(progresses, speeds) {
    var answer = [];
    let lastDeployDay = 0;

    for (let i = 0; i < progresses.length; i++) {
        let count = progresses[i];
        let nowDeployDay = 0;

        while (count < 100) {
            console.log(count)
            count += speeds[i];
            nowDeployDay ++;
        }
        nowDeployDay
        
        if(lastDeployDay < nowDeployDay) {
            lastDeployDay = nowDeployDay;
            answer.push(1);
        }else{
            answer[answer.length-1] ++;
        }
    }
    answer
    return answer;
}

function solution(progresses, speeds) {
    let answer = [0];
    let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
    let maxDay = days[0];
    days
    for(let i = 0, j = 0; i< days.length; i++){
        if(days[i] <= maxDay) {
            answer[j] += 1;
        } else {
            maxDay = days[i];
            answer[++j] = 1;
        }
    }

    return answer;
}

solution([0, 30, 55,55,0],	[100, 30, 5, 5,100])