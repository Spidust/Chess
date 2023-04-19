import noCheck from "../helpers/noCheck";

export default function Knight(board, team, pos) {
  let valid = [];
  const b = board.board;

  /*
    |_||=||_||_||_|
    |_||_||_||_||_|
    |_||_||N||_||_|
    |_||_||_||_||_|
    |_||_||_||_||_|
    */
  if (pos[0] - 2 >= 0 && pos[1] - 1 >= 0) {
    if (
      b[pos[0] - 2][pos[1] - 1][0] != team &&
      noCheck(board, team + "N", board[team + "Kpos"], pos, [pos[0] - 2, pos[1] - 1])
    ) {
      valid.push([pos[0] - 2, pos[1] - 1]);
    }
  }

  /*
    |_||_||_||_||_|
    |=||_||_||_||_|
    |_||_||N||_||_|
    |_||_||_||_||_|
    |_||_||_||_||_|
    */
  if (pos[0] - 1 >= 0 && pos[1] - 2 >= 0) {
    if (
      b[pos[0] - 1][pos[1] - 2][0] != team &&
      noCheck(board, team + "N", board[team + "Kpos"], pos, [pos[0] - 1, pos[1] - 2])
    ) {
      valid.push([pos[0] - 1, pos[1] - 2]);
    }
  }

  /*
    |_||_||_||=||_|
    |_||_||_||_||_|
    |_||_||N||_||_|
    |_||_||_||_||_|
    |_||_||_||_||_|
    */
  if (pos[0] - 2 >= 0 && pos[1] + 1 <= 7) {
    if (
      b[pos[0] - 2][pos[1] + 1][0] != team &&
      noCheck(board, team + "N", board[team + "Kpos"], pos, [pos[0] - 2, pos[1] + 1])
    ) {
      valid.push([pos[0] - 2, pos[1] + 1]);
    }
  }

  /*
    |_||_||_||_||_|
    |_||_||_||_||=|
    |_||_||N||_||_|
    |_||_||_||_||_|
    |_||_||_||_||_|
    */
  if (pos[0] - 1 >= 0 && pos[1] + 2 <= 7) {
    if (
      b[pos[0] - 1][pos[1] + 2][0] != team &&
      noCheck(board, team + "N", board[team + "Kpos"], pos, [pos[0] - 1, pos[1] + 2])
    ) {
      valid.push([pos[0] - 1, pos[1] + 2]);
    }
  }

  /*
    |_||_||_||_||_|
    |_||_||_||_||_|
    |_||_||N||_||_|
    |_||_||_||_||_|
    |_||_||_||=||_|
    */
  if (pos[0] + 2 <= 7 && pos[1] + 1 <= 7) {
    if (
      b[pos[0] + 2][pos[1] + 1][0] != team &&
      noCheck(board, team + "N", board[team + "Kpos"], pos, [pos[0] + 2, pos[1] + 1])
    ) {
      valid.push([pos[0] + 2, pos[1] + 1]);
    }
  }

  /*
    |_||_||_||_||_|
    |_||_||_||_||_|
    |_||_||N||_||_|
    |_||_||_||_||=|
    |_||_||_||_||_|
    */
  if (pos[0] + 1 <= 7 && pos[1] + 2 <= 7) {
    if (
      b[pos[0] + 1][pos[1] + 2][0] != team &&
      noCheck(board, team + "N", board[team + "Kpos"], pos, [pos[0] + 1, pos[1] + 2])
    ) {
      valid.push([pos[0] + 1, pos[1] + 2]);
    }
  }

  /*
    |_||_||_||_||_|
    |_||_||_||_||_|
    |_||_||N||_||_|
    |_||_||_||_||_|
    |_||=||_||_||_|
    */
  if (pos[0] + 2 <= 7 && pos[1] - 1 >= 0) {
    if (
      b[pos[0] + 2][pos[1] - 1][0] != team &&
      noCheck(board, team + "N", board[team + "Kpos"], pos, [pos[0] + 2, pos[1] - 1])
    ) {
      valid.push([pos[0] + 2, pos[1] - 1]);
    }
  }

  /*
    |_||_||_||_||_|
    |_||_||_||_||_|
    |_||_||N||_||_|
    |=||_||_||_||_|
    |_||_||_||_||_|
    */
  if (pos[0] + 1 <= 7 && pos[1] - 2 >= 0) {
    if (
      b[pos[0] + 1][pos[1] - 2][0] != team &&
      noCheck(board, team + "N", board[team + "Kpos"], pos, [pos[0] + 1, pos[1] - 2])
    ) {
      valid.push([pos[0] + 1, pos[1] - 2]);
    }
  }
  return valid;
}
