// 36. Valid Sudoku
// Medium
// https://leetcode.com/problems/valid-sudoku/description/

//* Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
//* 1. Each row must contain the digits 1-9 without repetition.
//* 2. Each column must contain the digits 1-9 without repetition.
//* 3. Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

//* NOTE: A Sudoku board (partially filled) could be valid but is not necessarily solvable.
//* NOTE: Only the filled cells need to be validated according to the mentioned rules.
/**
 * * Example 1:
 * * Input: board =
 * * [["5","3",".",".","7",".",".",".","."]
 * * ,["6",".",".","1","9","5",".",".","."]
 * * ,[".","9","8",".",".",".",".","6","."]
 * * ,["8",".",".",".","6",".",".",".","3"]
 * * ,["4",".",".","8",".","3",".",".","1"]
 * * ,["7",".",".",".","2",".",".",".","6"]
 * * ,[".","6",".",".",".",".","2","8","."]
 * * ,[".",".",".","4","1","9",".",".","5"]
 * * ,[".",".",".",".","8",".",".","7","9"]]

*/


function isValidSudoku(board) {
  // Helper function to check if a block (row, column, or box) has valid numbers
  function isValidBlock(block) {
      const seen = new Set(); // Use a Set to track seen numbers
      for (let num of block) {
          if (num !== '.') { // Skip empty spaces
              if (seen.has(num)) {
                  // Duplicate found, block is not valid
                  return false;
              }
              seen.add(num);
          }
      }
      return true;
  }

  // Check rows
  for (let row = 0; row < 9; row++) {
      if (!isValidBlock(board[row])) return false;
  }

  // Check columns
  for (let col = 0; col < 9; col++) {
      const column = board.map(row => row[col]);
      if (!isValidBlock(column)) return false;
  }

  // Check 3x3 subgrids
  for (let row = 0; row < 9; row += 3) {
      for (let col = 0; col < 9; col += 3) {
          const box = [];
          for (let r = 0; r < 3; r++) {
              for (let c = 0; c < 3; c++) {
                  box.push(board[row + r][col + c]);
              }
          }
          if (!isValidBlock(box)) return false;
      }
  }

  // If all checks passed, the board is valid
  return true;
}

//! attempt 2 with my notes

// input will be an array of arrays that represent a board
// output will be a boolean determing if input array is a valid sudoku board

// check if each row is valid sudoku, if not immediately return false
// check if each column is valid sudoku, if not return false
// check if each 3x3 is valid, if not return false

// use a hash set to check for each condition (row, col, 3x3)


function isValidSudoku(board) {
    for(let i = 0; i < board.length; i++) {
        // initialize a hash set for each row in our board
        // this hash set will store numbers as keys
        const rowSet = new Set();
        for(let j = 0; j < board[i].length; j++) {
            const value = board[i][j];
            // if the value is "." or "," skip to next iteration
            // continue can be used to ignore
            if(value === "." || value === ",") continue;

            // if the value exists within our hash set, immediately return false
            if(rowSet.has((value))) return false
            // otherwise add the value to hash set
            else rowSet.add(value)
        }
    }

    for(let i = 0; i < board[0].length; i++) {
        const columnSet = new Set();
        for(let j = 0; j < board.length; j++) {
            const value = board[j][i];
            if(value === "." || value === ",") continue;
            if(columnSet.has((value))) return false
            else columnSet.add(value)
        }
    }

     // Iterate over each 3x3 sub-box starting index
    for (let row = 0; row < 9; row += 3) {
        for (let col = 0; col < 9; col += 3) {
            const boxSet = new Set(); // Create a new Set for each 3x3 sub-box

            // Iterate over the elements within the current 3x3 sub-box
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    const value = board[row + i][col + j]; // Access each element in the sub-box
                    if (value === "." || value === ",") continue; // Skip empty cells

                    // Check for duplicates within the sub-box
                    if (boxSet.has(value)) return false; // Duplicate found, not valid
                    else boxSet.add(value);
                }
            }
        }
    }
    return true;
}
