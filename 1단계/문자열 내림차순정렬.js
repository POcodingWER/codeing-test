function solution(s) {
  let a = s.split("");
  a.sort((a, b) => {
    if (a > b) return -1;
    return 0;
  });
  a
  return a.join('');
}
solution("EzZABbcdefg");
