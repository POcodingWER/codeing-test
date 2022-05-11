
const id_list = ["muzi", "frodo", "apeach", "neo"];
// const report = ["ryan con", "ryan con", "ryan con", "ryan con"];
const report = ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"];
const k =2;

function solution(id_list, report, k) {
    let reports = [...new Set(report)].map(a=> a.split(' '));   //중복제거하고 자르고 
    let counts = new Map(); //mapping 불럿

    for (const bad of reports){
        counts.set(bad[1],counts.get(bad[1])+1||1)  //있으면 1더해주고 없으면 1
    }   //신고회수

    let good = new Map();   //신고목록
    for(const report of reports){
        console.log(counts.get(report[1]))
        if(counts.get(report[1])>=k){       //신고 횟수가 k보다 크면
            good.set(report[0],good.get(report[0])+1||1)    //있으면 1더해주고 없으면 1
        }
    }
    let answer = id_list.map(a=>good.get(a)||0)
    answer
    return answer;
}

solution(id_list,report,2)