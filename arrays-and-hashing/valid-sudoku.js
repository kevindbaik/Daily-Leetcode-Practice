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
