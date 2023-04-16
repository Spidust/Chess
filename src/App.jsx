import { useState, useEffect } from "react";
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

function excuteMove(selectedPiece, board, pos, setBoard) {
    setBoard();
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
    const [selectedPiece, selectPiece] = useState([]);
    const [validMove, setValidMove] = useState([]);
    let turnCount = 1;
    useEffect(() => {
        if (selectedPiece.length != 0) {
            console.log(
                piecesMove[
                    piecesName[
                        board.board[selectedPiece[0]][selectedPiece[1]][1]
                    ]
                ](board, turn, selectedPiece)
            );
            setValidMove(
                piecesMove[
                    piecesName[
                        board.board[selectedPiece[0]][selectedPiece[1]][1]
                    ]
                ](board, turn, selectedPiece)
            );
        }
    }, [selectedPiece]);
    return (
        <div className="App">
            <div className="board">
                {(turn == "W"
                    ? board.board
                    : reverse2DArray(JSON.stringify(board.board))
                ).map((i, iIndex) => (
                    <div className="row">
                        {iIndex % 2 == 0
                            ? i.map((j, jIndex) => (
                                  <div
                                      className={classnames("point", {
                                          Valid: TwoDIncludes(
                                              validMove,
                                              turn == "W"
                                                  ? [iIndex, jIndex]
                                                  : reversePosition([
                                                        iIndex,
                                                        jIndex,
                                                    ])
                                          ),
                                          W0: jIndex % 2 == 0,
                                          B0: jIndex % 2 != 0,
                                      })}
                                      key={`${iIndex} ${jIndex}`}
                                  >
                                      <img
                                          src={
                                              "/img/pieces/" +
                                              (j != "00" ? j : "") +
                                              ".png"
                                          }
                                          alt={j != "00" ? j : ""}
                                          className="piece"
                                          onClick={
                                              j[0] == turn
                                                  ? () => {
                                                        selectPiece(
                                                            turn == "W"
                                                                ? [
                                                                      iIndex,
                                                                      jIndex,
                                                                  ]
                                                                : reversePosition(
                                                                      [
                                                                          iIndex,
                                                                          jIndex,
                                                                      ]
                                                                  )
                                                        );
                                                    }
                                                  : TwoDIncludes(
                                                        validMove,
                                                        turn == "W"
                                                            ? [iIndex, jIndex]
                                                            : reversePosition([
                                                                  iIndex,
                                                                  jIndex,
                                                              ])
                                                    )
                                                  ? () => {
                                                        setBoard(
                                                            move(
                                                                board,
                                                                board.board[
                                                                    selectedPiece[0]
                                                                ][
                                                                    selectedPiece[1]
                                                                ],
                                                                selectedPiece,
                                                                turn == "W"
                                                                    ? [
                                                                          iIndex,
                                                                          jIndex,
                                                                      ]
                                                                    : reversePosition(
                                                                          [
                                                                              iIndex,
                                                                              jIndex,
                                                                          ]
                                                                      )
                                                            )
                                                        );

                                                        setTurn(
                                                            turn == "W"
                                                                ? "B"
                                                                : "W"
                                                        );
                                                        turnCount += 1;
                                                        selectPiece([]);
                                                        setValidMove([]);
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
                                              validMove,
                                              turn == "W"
                                                  ? [iIndex, jIndex]
                                                  : reversePosition([
                                                        iIndex,
                                                        jIndex,
                                                    ])
                                          ),
                                          W0: jIndex % 2 != 0,
                                          B0: jIndex % 2 == 0,
                                      })}
                                      key={iIndex + jIndex}
                                  >
                                      <img
                                          src={
                                              "/img/pieces/" +
                                              (j != "00" ? j : "") +
                                              ".png"
                                          }
                                          alt={j != "00" ? j : ""}
                                          className="piece"
                                          onClick={
                                              j[0] == turn
                                                  ? () => {
                                                        selectPiece(
                                                            turn == "W"
                                                                ? [
                                                                      iIndex,
                                                                      jIndex,
                                                                  ]
                                                                : reversePosition(
                                                                      [
                                                                          iIndex,
                                                                          jIndex,
                                                                      ]
                                                                  )
                                                        );
                                                    }
                                                  : TwoDIncludes(
                                                        validMove,
                                                        turn == "W"
                                                            ? [iIndex, jIndex]
                                                            : reversePosition([
                                                                  iIndex,
                                                                  jIndex,
                                                              ])
                                                    )
                                                  ? () => {
                                                        setBoard(
                                                            move(
                                                                board,
                                                                board.board[
                                                                    selectedPiece[0]
                                                                ][
                                                                    selectedPiece[1]
                                                                ],
                                                                selectedPiece,
                                                                turn == "W"
                                                                    ? [
                                                                          iIndex,
                                                                          jIndex,
                                                                      ]
                                                                    : reversePosition(
                                                                          [
                                                                              iIndex,
                                                                              jIndex,
                                                                          ]
                                                                      )
                                                            )
                                                        );
                                                        setTurn(
                                                            turn == "W"
                                                                ? "B"
                                                                : "W"
                                                        );
                                                        turnCount += 1;
                                                        selectPiece([]);
                                                        setValidMove([]);
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
