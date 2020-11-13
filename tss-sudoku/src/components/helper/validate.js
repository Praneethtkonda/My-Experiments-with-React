export default function validateSudoku(board) {
    let k = 0, p, i, j;
    for(p = 0; p <= 9; p+=3) {
        for(k = 0; k <= 9; k+=3) {
            const mySet = new Set();
            i = p;
            let count_i = 1;
            while(count_i <= 3 && i <= 8) {
                j = k;
                let count_j = 1;
                while(count_j <= 3 && j <= 8) {
                    // console.log(i,j,board[i][j]);
                    if(board[i][j] !== "") {
                        if(mySet.has(board[i][j])) {
                            // console.log(i, j, board[i][j], mySet.keys());
                            return false;
                        }
                        mySet.add(board[i][j]);
                    }
                    j++;
                    count_j += 1;
                }
                i++;
                count_i += 1;
            }
        }
    }
    // Horizontal rows
    for(i = 0; i < 9; i++) {
        const mySet = new Set();
        for(j = 0; j< 9; j++) {
            if(board[i][j] !== "") {
                if(mySet.has(board[i][j])) {
                    return false;
                }
                mySet.add(board[i][j]);
            }
            
        }
    }
    // For columns
    for(j = 0; j < 9; j++) {
        const mySet = new Set();
        for(i = 0; i< 9; i++) {
            if(board[i][j] !== "") {
                if(mySet.has(board[i][j])) {
                    // console.log(i, j, board[i][j], mySet.keys());
                    return false;
                }
                mySet.add(board[i][j]);   
            }
        }
    }
    return true;
}