import noCheck from "../helpers/noCheck";

export default function Pawn(board, team, pos) {
    let valid = [];
    const b = board.board;
    if (pos[0] == (team == "W" ? 6 : 1)) {
        if (
            b[pos[0] + (team == "W" ? -1 : +1)][pos[1]] == '00' && 
            b[pos[0] + (team == "W" ? -2 : +2)][pos[1]] == "00" &&
            noCheck(board, team + "P", board[team + "Kpos"], pos, [
                pos[0] + (team == "W" ? -2 : 2),
                pos[1],
            ])
        ) {
            valid.push([pos[0] + (team == "W" ? -2 : 2), pos[1]]);
        }
    }

    if (team == "W" ? pos[0] >= 2 : pos[0] <= 6) {
        if (
            b[pos[0] + (team == "W" ? -1 : 1)][pos[1]] == "00" &&
            noCheck(board, team + "P", board[team + "Kpos"], pos, [
                pos[0] + (team == "W" ? -1 : 1),
                pos[1],
            ])
        ) {
            valid.push([pos[0] + (team == "W" ? -1 : 1), pos[1]]);
        }

        if (
            (team == "W" ? pos[0] - 1 >= 0 : pos[0] + 1 <= 7) &&
            pos[1] + 1 <= 7
        ) {
            if (
                b[pos[0] + (team == "W" ? -1 : +1)][pos[1] + 1][0] != team &&
                b[pos[0] + (team == "W" ? -1 : +1)][pos[1] + 1][0] != "0" &&
                noCheck(board, team + "P", board[team + "Kpos"], pos, [
                    pos[0] + (team == "W" ? -1 : +1),
                    pos[1] + 1,
                ])
            ) {
                valid.push([pos[0] + (team == "W" ? -1 : +1), pos[1] + 1]);
            }
        }

        if (
            (team == "W" ? pos[0] - 1 >= 0 : pos[0] + 1 <= 7) &&
            pos[1] - 1 >= 0
        ) {
            if (
                b[pos[0] + (team == "W" ? -1 : +1)][pos[1] - 1][0] != team &&
                b[pos[0] + (team == "W" ? -1 : 1)][pos[1] - 1][0] != "0" &&
                noCheck(board, team + "P", board[team + "Kpos"], pos, [
                    pos[0] + (team == "W" ? -1 : +1),
                    pos[1] - 1,
                ])
            ) {
                console.log('take2')
                valid.push([pos[0] + (team == "W" ? -1 : +1), pos[1] - 1]);
            }
        }
    }

    return valid;
}
