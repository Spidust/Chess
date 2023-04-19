import noCheck from "../helpers/noCheck";

export default function Queen(board, team, pos) {
  const valid = [];
  const mark = [true, true, true, true, true, true, true, true];
  const b = board.board;
  for (let i = 1; i <= 7; i++) {
    /*
    |_||=||_|
    |_||_||_|
    |_||_||_|
    */
    if (mark[0] && pos[0] - i >= 0) {
      if (b[pos[0] - i][pos[1]][0] != team) {
        if (noCheck(board, team + "Q", board[team + "Kpos"], pos, [pos[0] - i, pos[1]])) {
          valid.push([pos[0] - i, pos[1]]);
        }
        if (b[pos[0] - i][pos[1]] != "00") {
          mark[0] = false;
        }
      } else {
        mark[0] = false;
      }
    }

    /*
	  |_||_||_|
	  |_||_||_|
	  |_||=||_|
	  */
    if (mark[1] && pos[0] + i <= 7) {
      if (b[pos[0] + i][pos[1]][0] != team) {
        if (noCheck(board, team + "Q", board[team + "Kpos"], pos, [pos[0] + i, pos[1]])) {
          valid.push([pos[0] + i, pos[1]]);
        }
        if (b[pos[0] + i][pos[1]] != "00") {
          mark[1] = false;
        }
      } else {
        mark[1] = false;
      }
    }

    /*
	  |_||_||_|
	  |=||_||_|
	  |_||_||_|
	  */
    if (mark[2] && pos[1] - i >= 0) {
      if (b[pos[0]][pos[1] - i][0] != team) {
        if (noCheck(board, team + "Q", board[team + "Kpos"], pos, [pos[0], pos[1] - i])) {
          valid.push([pos[0], pos[1] - i]);
        }
        if (b[pos[0]][pos[1] - i] != "00") {
          mark[2] = false;
        }
      } else {
        mark[2] = false;
      }
    }

    /*
	  |_||_||_|
	  |_||_||=|
	  |_||_||_|
	  */
    if (mark[3] && pos[1] + i <= 7) {
      if (b[pos[0]][pos[1] + i][0] != team) {
        if (noCheck(board, team + "Q", board[team + "Kpos"], pos, [pos[0], pos[1] + i])) {
          valid.push([pos[0], pos[1] + i]);
        }
        if (b[pos[0]][pos[1] + i] != "00") {
          mark[3] = false;
        }
      } else {
        mark[3] = false;
      }
    }

    /*
    |=||_||_|
    |_||_||_|
    |_||_||_|
    */
    if (mark[4] && pos[0] - i >= 0 && pos[1] - i >= 0) {
      if (b[pos[0] - i][pos[1] - i][0] != team) {
        if (noCheck(board, team + "B", board[team + "Kpos"], pos, [pos[0] - i, pos[1] - i])) {
          valid.push([pos[0] - i, pos[1] - i]);
        }
        if (b[pos[0] - i][pos[1] - i] != "00") {
          mark[4] = false;
        }
      } else {
        mark[4] = false;
      }
    }
    /*
	  |_||_||=|
	  |_||_||_|
	  |_||_||_|
	  */
    if (mark[5] && pos[0] - i >= 0 && pos[1] + i <= 7) {
      if (b[pos[0] - i][pos[1] + i][0] != team) {
        if (noCheck(board, team + "B", board[team + "Kpos"], pos, [pos[0] - i, pos[1] + i])) {
          valid.push([pos[0] - i, pos[1] + i]);
        }
        if (b[pos[0] - i][pos[1] + i] != "00") {
          mark[5] = false;
        }
      } else {
        mark[5] = false;
      }
    }
    /*
	  |_||_||_|
	  |_||_||_|
	  |_||_||=|
	  */
    if (mark[6] && pos[0] + i <= 7 && pos[1] + i <= 7) {
      if (b[pos[0] + i][pos[1] + i][0] != team) {
        if (noCheck(board, team + "B", board[team + "Kpos"], pos, [pos[0] + i, pos[1] + i])) {
          valid.push([pos[0] + i, pos[1] + i]);
        }
        if (b[pos[0] + i][pos[1] + i] != "00") {
          mark[6] = false;
        }
      } else {
        mark[6] = false;
      }
    }
    /*
	  |_||_||_|
	  |_||_||_|
	  |_||_||=|
	  */
    if (mark[7] && pos[0] + i <= 7 && pos[1] - i >= 0) {
      if (b[pos[0] + i][pos[1] - i][0] != team) {
        if (noCheck(board, team + "B", board[team + "Kpos"], pos, [pos[0] + i, pos[1] - i])) {
          valid.push([pos[0] + i, pos[1] - i]);
        }
        if (b[pos[0] + i][pos[1] - i] != "00") {
          mark[7] = false;
        }
      } else {
        mark[7] = false;
      }
    }
  }
  return valid;
}
