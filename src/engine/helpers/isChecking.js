export default function isChecking(board, team, pos) {
  const mark = [true, true, true, true, true, true, true, true];
  if (board.board) {
    board = board.board;
  }
  for (let i = 1; i <= 7; i++) {
    //straight line
    /*
        |_||_||_|
        |_||K||_|
        |_||=||_|
        */
    if (mark[0] && pos[0] + i <= 7) {
      if (board[pos[0] + i][pos[1]][0] == (team == "W" ? "B" : "W")) {
        if (["Q", "R"].includes(board[pos[0] + i][pos[1]][1])) {
          return true;
        }

        if (i == 1 && board[pos[0] + i][pos[1]][1] == "K") {
          return true;
        }
      }

      if (board[pos[0] + i][pos[1]][0] != "0") {
        mark[0] = false;
      }
    }
    /*
        |_||=||_|
        |_||K||_|
        |_||_||_|
        */
    if (mark[1] && pos[0] - i >= 0) {
      if (board[pos[0] - i][pos[1]][0] == (team == "W" ? "B" : "W")) {
        if (["Q", "R"].includes(board[pos[0] - i][pos[1]][1])) {
          return true;
        }

        if (i == 1 && board[pos[0] - i][pos[1]][1] == "K") {
          return true;
        }
      }

      if (board[pos[0] - i][pos[1]][0] != "0") {
        mark[1] = false;
      }
    }

    /*
        |_||_||_|
        |_||K||=|
        |_||_||_|
        */
    if (mark[2] && pos[1] + i <= 7) {
      if (board[pos[0]][pos[1] + i][0] == (team == "W" ? "B" : "W")) {
        if (["Q", "R"].includes(board[pos[0]][pos[1] + i][1])) {
          return true;
        }

        if (i == 1 && board[pos[0]][pos[1] + i][1] == "K") {
          return true;
        }
      }

      if (board[pos[0]][pos[1] + i][0] != "0") {
        mark[2] = false;
      }
    }
    /*
        |_||_||_|
        |=||K||_|
        |_||_||_|
        */
    if (mark[3] && pos[1] - i >= 0) {
      if (board[pos[0]][pos[1] - i][0] == (team == "W" ? "B" : "W")) {
        if (["Q", "R"].includes(board[pos[0]][pos[1] - i][1])) {
          return true;
        }

        if (i == 1 && board[pos[0]][pos[1] - i][1] == "K") {
          return true;
        }
      }

      if (board[pos[0]][pos[1] - i][0] != "0") {
        mark[3] = false;
      }
    }

    //diagonal
    /*
        |_||_||_|
        |_||K||_|
        |_||_||=|
        */
    if (mark[4] && pos[0] + i <= 7 && pos[1] + i <= 7) {
      if (board[pos[0] + i][pos[1] + i][0] == (team == "W" ? "B" : "W")) {
        if (["B", "Q"].includes(board[pos[0] + i][pos[1] + i][1])) {
          return true;
        }

        if (team == "B" && i == 1 && board[pos[0] + i][pos[1] + i][1] == "P") {
          return true;
        }
      }

      if (board[pos[0] + i][pos[1] + i][0] != "0") {
        mark[4] = false;
      }
    }
    /*
        |_||_||_|
        |_||K||_|
        |=||_||_|
        */
    if (mark[5] && pos[0] + i <= 7 && pos[1] - i >= 0) {
      if (board[pos[0] + i][pos[1] - i][0] == (team == "W" ? "B" : "W")) {
        if (["B", "Q"].includes(board[pos[0] + i][pos[1] - i][1])) {
          return true;
        }

        if (team == "B" && i == 1 && board[pos[0] + i][pos[1] - i][1] == "P") {
          return true;
        }
      }

      if (board[pos[0] + i][pos[1] - i][0] != "0") {
        mark[5] = false;
      }
    }
    /*
        |_||_||=|
        |_||K||_|
        |_||_||_|
        */
    if (mark[6] && pos[0] - i >= 0 && pos[1] + i <= 7) {
      if (board[pos[0] - i][pos[1] + i][0] == (team == "W" ? "B" : "W")) {
        if (["B", "Q"].includes(board[pos[0] - i][pos[1] + i][1])) {
          return true;
        }
        if (team == "W" && i == 1 && board[pos[0] - i][pos[1] + i][1] == "P") {
          return true;
        }
      }
      if (board[pos[0] - i][pos[1] + i][0] != "0") {
        mark[6] = false;
      }
    }
    /*
        |=||_||_|
        |_||K||_|
        |_||_||_|
        */
    if (mark[7] && pos[0] - i >= 0 && pos[1] - i >= 0) {
      if (board[pos[0] - i][pos[1] - i][0] == (team == "W" ? "B" : "W")) {
        if (["B", "Q"].includes(board[pos[0] - i][pos[1] - i][1])) {
          return true;
        }

        if (team == "W" && i == 1 && board[pos[0] - i][pos[1] - i][1] == "P") {
          return true;
        }
      }

      if (board[pos[0] - i][pos[1] - i][0] != "0") {
        mark[7] = false;
      }
    }
  }
  // Knight
  /*
    |_||_||_||=||_|
    |_||_||_||_||_|
    |_||_||K||_||_|
    |_||_||_||_||_|
    |_||_||_||_||_|
    */
  if (pos[0] - 2 >= 0 && pos[1] + 1 <= 7 && board[pos[0] - 2][pos[1] + 1] == (team == "W" ? "B" : "W") + "N") {
    return true;
  }
  /*
    |_||_||_||_||_|
    |_||_||_||_||=|
    |_||_||K||_||_|
    |_||_||_||_||_|
    |_||_||_||_||_|
    */
  if (pos[0] - 1 >= 0 && pos[1] + 2 <= 7 && board[pos[0] - 1][pos[1] + 2] == (team == "W" ? "B" : "W") + "N") {
    return true;
  }
  /*
    |_||=||_||_||_|
    |_||_||_||_||_|
    |_||_||K||_||_|
    |_||_||_||_||_|
    |_||_||_||_||_|
    */
  if (pos[0] - 2 >= 0 && pos[1] - 1 >= 0 && board[pos[0] - 2][pos[1] - 1] == (team == "W" ? "B" : "W") + "N") {
    return true;
  }

  /*
    |_||_||_||_||_|
    |=||_||_||_||_|
    |_||_||K||_||_|
    |_||_||_||_||_|
    |_||_||_||_||_|
    */
  if (pos[0] - 1 >= 0 && pos[1] - 2 >= 0 && board[pos[0] - 1][pos[1] - 2] == (team == "W" ? "B" : "W") + "N") {
    return true;
  }
  /*
    |_||_||_||_||_|
    |_||_||_||_||_|
    |_||_||K||_||_|
    |_||_||_||_||_|
    |_||_||_||=||_|
    */
  if (pos[0] + 2 <= 7 && pos[1] + 1 <= 7 && board[pos[0] + 2][pos[1] + 1] == (team == "W" ? "B" : "W") + "N") {
    return true;
  }
  /*
    |_||_||_||_||_|
    |_||_||_||_||_|
    |_||_||K||_||_|
    |_||_||_||_||=|
    |_||_||_||_||_|
    */
  if (pos[0] + 1 <= 7 && pos[1] + 2 <= 7 && board[pos[0] + 1][pos[1] + 2] == (team == "W" ? "B" : "W") + "N") {
    return true;
  }

  /*
    |_||_||_||_||_|
    |_||_||_||_||_|
    |_||_||K||_||_|
    |_||_||_||_||_|
    |_||=||_||_||_|
    */
  if (pos[0] + 2 <= 7 && pos[1] - 1 >= 0 && board[pos[0] + 2][pos[1] - 1] == (team == "W" ? "B" : "W") + "N") {
    return true;
  }
  /*
    |_||_||_||_||_|
    |_||_||_||_||_|
    |_||_||K||_||_|
    |=||_||_||_||_|
    |_||_||_||_||_|
    */
  if (pos[0] + 1 <= 7 && pos[1] - 2 >= 0 && board[pos[0] + 1][pos[1] - 2] == (team == "W" ? "B" : "W") + "N") {
    return true;
  }
  return false;
}
