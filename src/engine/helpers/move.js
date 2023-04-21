export default function move(board, pieces, before, after) {
  const team = pieces[0] == "W" ? 7 : 0;
  if (["WK", "BK"].includes(pieces)) {
    board[pieces + "pos"] = [after[0], after[1]];

    //castle
    if (board[pieces[0] + "castle"] && Math.abs(after[1] - before[1]) == 2) {
      //King side castle
      if (after[1] - before[1] > 0) {
        board.board[team][7] = "00";
        board.board[team][4] = "00";

        board.board[team][6] = pieces;
        board.board[team][5] = pieces[0] + "R";
      } /* Queen side castle */ else {
        board.board[team][0] = "00";
        board.board[team][4] = "00";

        board.board[team][2] = pieces;
        board.board[team][3] = pieces[0] + "R";
      }
      board[pieces[0] + "castle"] = false;
      return board;
    }
    board[pieces[0] + "castle"] = false;
  }
  if (
    (pieces[1] == "R" && before == [team, 0] && board[pieces[0] + "Qside"]) ||
    (after == [team, 0] && board[pieces[0] + "Qside"])
  ) {
    board.QSide == false;
  }
  if (
    (pieces[1] == "R" && before == [team, 7] && board[pieces[0] + "Kside"]) ||
    (after == [team, 7] && board[pieces[0] + "Kside"])
  ) {
    board.KSide == false;
  }
  board.board[before[0]][before[1]] = "00";
  board.board[after[0]][after[1]] = pieces;

  return board;
}
