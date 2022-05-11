// function solution(board, moves) {
// 	//행열 구조 바꿔서 moves로 들어오는 값을 배열에 몇번째로 받는지 해서 빼주는것
// 	board
//   let rows = [...new Array(board.length)].map(v => new Array(board.length))     //받는값이 정사각형 이니깐 2중배열 만들어준다 
//   for (let i = 0; i < board.length; i++) {										
// 		for (let j = 0; j < board[i].length; j++) {
// 			const element = board[i][j];
// 			rows[j][i] = element
// 		}
// 	}
// 	rows = rows.map((row) => row.filter(v=>v>0).reverse())
// 	rows
// 	let out = [] // 바구니 : 뽑은 인형들 담는곳
// 	let answer = 0
// 	// 인형 뽑기
// 	moves.forEach(el => {
// 		if(rows[el-1].length > 0) { // 해당 열에 인형이 있을 때
// 			let val = rows[el-1].pop() // 인형 뽑기
// 			// 만약 지금 뽑은 인형이 이전에 뽑은 인형과 같으면
// 			if(out[out.length-1] === val) { 
// 				out.pop() // 인형 제거
// 				answer += 2 // 제거된 인형 수 추가
// 			} 
// 			// 만약 지금 뽑은 인형이 이전에 뽑은 인형과 다르면
// 			else {
// 				out.push(val) // 바구니에 인형 담기
// 			}
// 		}
// 	});
//   return answer;
// }

function solution(board, moves) {
	let count =0;
	let stack = [];

	for(let i=0;i<moves.length;i++){
		let now = moves[i]-1 			
		for(let j=0;j<board.length;j++){
			if(board[j][now]!=0){		//열에 0 이아닐때 
				if(stack[stack.length-1] === board[j][now]){		//stack마지막 배열이 지금 꺼랑 같으면
					stack.pop();					//빼주고
					count+=2;						//2더해줌
				}
				else{								//아니면
					stack.push(board[j][now])		//stack에 마지막 번호 넣어주면됨
				}
				board[j][now] = 0;	//break를 써야 열 끝까지 for문 안돌고 끝남
				break;
			}
		}
	}
	return count
}

solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]],[1,5,3,5,1,2,1,4])