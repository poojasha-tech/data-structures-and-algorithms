function validSuduku(board) {
    for (let i = 0; i < 9; i++) {
        let rows = new Set();
        for (let j = 0; j < 9; j++) {
            if (board[i][j] == ".") continue

            if (rows.has(board[i][j])) return false
            else {
                rows.add(board[i][j])
            }

        }
    }


    for (let j = 0; j < 9; j++) {
        let colums = new Set();
        for (let i = 0; i < 9; i++) {
            if (board[i][j] == ".") continue
            if (colums.has(board[i][j])) return false
            else {
                colums.add(board[i][j])
            }


        }
    }

   let b=[
    [0,0],
    [0,3],
    [0,6],
    [3,0],
    [3,3],
    [3,6],
    [6,0],
    [6,3],
    [6,6]
   ]

   for(let s of b){
    const [si,sj]=s
    let box= new Set()
    for(let i=si ;i<si+3;i++){
        for(let j=sj;j<sj+3;j++){
            if(board[i][j]== ".") continue
            if(box.has(board[i][j])) return false;
            else{
                box.add(board[i][j])
            }
        }

    }
   }
   
   return true;
}

console.log(validSuduku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."], //00 01 02 .....08
    ["6", ".", ".", "1", "9", "5", ".", ".", "."], //10 11 12 .....18
    [".", "9", "8", ".", ".", ".", ".", "6", "."],// 20 21 22 ......28
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]  //80 81 82 ..... 88
]))