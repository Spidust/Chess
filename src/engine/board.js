/* 

8 BR BN BB BQ BK BB BN BR
7 BP BP BP BP BP BP BP BP
6
5
4
3
2 WP WP WP WP WP WP WP PW
1 WR WN WB WQ WK WB WN WR
  A  B  C  D  E  F  G  H
*/

const defaultBoard = [
  ["BR", "BN", "BB", "BQ", "BK", "BB", "BN", "BR"],
  ["BP", "BP", "BP", "BP", "BP", "BP", "BP", "BP"],
  ["00", "00", "00", "00", "00", "00", "00", "00"],
  ["00", "00", "00", "00", "00", "BN", "00", "00"],
  ["00", "00", "00", "00", "00", "00", "00", "00"],
  ["00", "00", "00", "00", "00", "00", "00", "00"],
  ["WP", "WP", "WP", "WP", "WP", "WP", "WP", "WP"],
  ["WR", "WN", "WB", "WQ", "WK", "00", "00", "WR"],
];

function Board() {
  return {
    board: defaultBoard,
    WKpos: [7, 5],
    BKpos: [0, 4],
    Wcastle: true,
    Bcastle: true,
    WQside: true,
    WKside: true,
    BQside: true,
    BKside: true,
  };
}
export default Board;
