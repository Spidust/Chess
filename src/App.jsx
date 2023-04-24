import { useState, useEffect, useRef } from "react";
import classnames from "classnames";
import "./App.css";
import piecesMove from "./engine/index";
import Board from "./engine/board";
import move from "./engine/helpers/move";

function Length2ArrayEquality(arrayA, arrayB) {
  return arrayA[0] == arrayB[0] && arrayA[1] == arrayB[1];
}

function TwoDIncludes(array, childArray) {
  for (let i of array) {
    if (Length2ArrayEquality(i, childArray)) {
      return true;
    }
  }
  return false;
}

function reverse2DArray(array) {
  array = JSON.parse(array);
  const newArray = [];
  for (let i of array.reverse()) {
    newArray.push(i.reverse());
  }
  return newArray;
}

function reversePosition(pos) {
  return [7 - pos[0], 7 - pos[1]];
}

const piecesName = {
  P: "pawn",
  R: "rook",
  N: "knight",
  B: "bishop",
  Q: "queen",
  K: "king",
};
function App() {
  const [board, setBoard] = useState(Board());
  const [turn, setTurn] = useState("W");
  const [SelectedPiece, SelectPiece] = useState([]);
  const [ValidMove, SetValidMove] = useState([]);
  const [LastMove, SetLastMove] = useState([]);
  const previous = useRef();

  let turnCount = useRef(0);
  useEffect(() => {
    if (SelectedPiece.length != 0) {
      SetValidMove(
        piecesMove[piecesName[board.board[SelectedPiece[0]][SelectedPiece[1]][1]]](
          { ...board, BKpos: turn == "W" ? board.BKpos : reversePosition(board.BKpos) },
          turn,
          SelectedPiece
        )
      );
    }
  }, [SelectedPiece]);
  return (
    <div className="App">
      <div className="control">
        <div
          className="remove"
          onClick={() => {
            if (turnCount.current > 0 && previous.current.length != 0) {
              setBoard(previous.current);
              turnCount--;
              setTurn(turn == "W" ? "B" : "W");
              SelectPiece([]);
              SetValidMove([]);
              SetLastMove([]);
              previous.current = [];
            }
          }}
        >
          Ôi bạn ôi, nước đó tôi đi sai cho tôi đi lại
        </div>
      </div>
      <div className="board">
        {(turn == "W" ? board.board : reverse2DArray(JSON.stringify(board.board))).map((i, iIndex) => (
          <div className="row">
            {iIndex % 2 == 0
              ? i.map((j, jIndex) => (
                  <div
                    className={classnames("point", {
                      Valid: TwoDIncludes(
                        ValidMove,
                        turn == "W" ? [iIndex, jIndex] : reversePosition([iIndex, jIndex])
                      ),
                      W0: jIndex % 2 == 0,
                      B0: jIndex % 2 != 0,
                      LastMove:
                        LastMove.length != 0 &&
                        Length2ArrayEquality(
                          LastMove,
                          turn == "W" ? [iIndex, jIndex] : reversePosition([iIndex, jIndex])
                        ),
                      Selecting:
                        SelectedPiece.length != 0 &&
                        Length2ArrayEquality(
                          SelectedPiece,
                          turn == "W" ? [iIndex, jIndex] : reversePosition([iIndex, jIndex])
                        ),
                    })}
                    key={`${iIndex} ${jIndex}`}
                  >
                    <img
                      src={"/img/pieces/" + (j != "00" ? j : "00") + ".png"}
                      alt={j != "00" ? j : ""}
                      className="piece"
                      onClick={
                        j[0] == turn
                          ? () => {
                              SelectPiece(turn == "W" ? [iIndex, jIndex] : reversePosition([iIndex, jIndex]));
                              SetLastMove([]);
                            }
                          : TwoDIncludes(ValidMove, turn == "W" ? [iIndex, jIndex] : reversePosition([iIndex, jIndex]))
                          ? () => {
                              setBoard((board) => {
                                previous.current = board;

                                return move(
                                  JSON.parse(JSON.stringify(board)),
                                  board.board[SelectedPiece[0]][SelectedPiece[1]],
                                  SelectedPiece,
                                  turn == "W" ? [iIndex, jIndex] : reversePosition([iIndex, jIndex])
                                );
                              });
                              setTurn(turn == "W" ? "B" : "W");
                              turnCount.current += 1;
                              SetValidMove([]);
                              SetLastMove(turn == "W" ? [iIndex, jIndex] : reversePosition([iIndex, jIndex]));
                            }
                          : null
                      }
                    />
                  </div>
                ))
              : i.map((j, jIndex) => (
                  <div
                    className={classnames("point", {
                      Valid: TwoDIncludes(
                        ValidMove,
                        turn == "W" ? [iIndex, jIndex] : reversePosition([iIndex, jIndex])
                      ),
                      W0: jIndex % 2 != 0,
                      B0: jIndex % 2 == 0,
                      LastMove:
                        LastMove.length != 0 &&
                        Length2ArrayEquality(
                          LastMove,
                          turn == "W" ? [iIndex, jIndex] : reversePosition([iIndex, jIndex])
                        ),
                      Selecting:
                        SelectedPiece.length != 0 &&
                        Length2ArrayEquality(
                          SelectedPiece,
                          turn == "W" ? [iIndex, jIndex] : reversePosition([iIndex, jIndex])
                        ),
                    })}
                    key={iIndex + jIndex}
                  >
                    <img
                      src={"/img/pieces/" + (j != "00" ? j : "00") + ".png"}
                      alt={j != "00" ? j : ""}
                      className="piece"
                      onClick={
                        j[0] == turn
                          ? () => {
                              SelectPiece(turn == "W" ? [iIndex, jIndex] : reversePosition([iIndex, jIndex]));
                              SetLastMove([]);
                            }
                          : TwoDIncludes(ValidMove, turn == "W" ? [iIndex, jIndex] : reversePosition([iIndex, jIndex]))
                          ? () => {
                              setBoard((board) => {
                                previous.current = board;
                                return move(
                                  JSON.parse(JSON.stringify(board)),
                                  board.board[SelectedPiece[0]][SelectedPiece[1]],
                                  SelectedPiece,
                                  turn == "W" ? [iIndex, jIndex] : reversePosition([iIndex, jIndex])
                                );
                              });
                              setTurn(turn == "W" ? "B" : "W");
                              turnCount.current += 1;
                              SetValidMove([]);
                              SetLastMove(turn == "W" ? [iIndex, jIndex] : reversePosition([iIndex, jIndex]));
                            }
                          : null
                      }
                    />
                  </div>
                ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
