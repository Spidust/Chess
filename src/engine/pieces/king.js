import noCheck from "../helpers/noCheck";
import isChecking from './../helpers/isChecking';

export default function King(board, team, pos) {
    const valid = [];
    const b = board.board;

    /*
    |=||_||_|
    |_||_||_|
    |_||_||_|
    */
    if (pos[0] - 1 >= 0 && pos[1] - 1 >= 0) {
        if (
            b[pos[0] - 1][pos[1] - 1][0] != team &&
            noCheck(board, team + "K", [pos[0] - 1,pos[1] - 1], pos, [pos[0] - 1,pos[1] - 1])
        ) {
            valid.push([pos[0] - 1, pos[1] - 1]);
        }
    }
    /*
    |_||=||_|
    |_||_||_|
    |_||_||_|
    */
    if (pos[0] - 1 >= 0) {
        if (
            b[pos[0] - 1][pos[1]][0] != team &&
            noCheck(board, team + "K", [pos[0] - 1,pos[1]], pos, [pos[0] - 1,pos[1]])
        ) {
            valid.push([pos[0] - 1, pos[1]]);
        }
    }
    /*
    |_||_||=|
    |_||_||_|
    |_||_||_|
    */
    if (pos[0] - 1 >= 0 && pos[1] + 1 <= 7) {
        if (
            b[pos[0] - 1][pos[1] + 1][0] != team &&
            noCheck(board, team + "K", [pos[0] - 1, pos[1] + 1], pos, [pos[0] - 1, pos[1] + 1])
        ) {
            valid.push([pos[0] - 1, pos[1] + 1]);
        }
    }

    /*
    |_||_||_|
    |_||_||=|
    |_||_||_|
    */
    if (pos[1] + 1 <= 7) {
        if (
            b[pos[0]][pos[1] + 1][0] != team &&
            noCheck(board, team + "K", [pos[0], pos[1] + 1], pos, [pos[0], pos[1] + 1])
        ) {
            valid.push([pos[0], pos[1] + 1]);
        }
    }

    /*
    |_||_||_|
    |_||_||_|
    |_||_||=|
    */
    if (pos[0] + 1 <= 7 && pos[1] + 1 <= 7) {
        if (
            b[pos[0] + 1][pos[1] + 1][0] != team &&
            noCheck(board, team + "K", [pos[0] + 1, pos[1] + 1], pos, [pos[0] + 1, pos[1] + 1])
        ) {
            valid.push([pos[0] + 1, pos[1] + 1]);
        }
    }

    /*
    |_||_||_|
    |_||_||_|
    |_||=||_|
    */
    if (pos[0] + 1 <= 7) {
        if (
            b[pos[0] + 1][pos[1]][0] != team &&
            noCheck(board, team + "K", [pos[0] + 1, pos[1]], pos, [pos[0] + 1, pos[1]])
        ) {
            valid.push([pos[0] + 1, pos[1]]);
        }
    }

    /*
    |_||_||_|
    |_||_||_|
    |=||_||_|
    */
    if (pos[0] + 1 <= 7 && pos[1] - 1 >= 0) {
        if (
            b[pos[0] + 1][pos[1] - 1][0] != team &&
            noCheck(board, team + "K", [pos[0] + 1,pos[1] - 1], pos, [pos[0] + 1,pos[1] - 1])
        ) {
            valid.push([pos[0] + 1, pos[1] - 1]);
        }
    }

    /*
    |_||_||_|
    |=||_||_|
    |_||_||_|
    */
    if (pos[1] - 1 >= 0) {
        if (
            b[pos[0]][pos[1] - 1][0] != team &&
            noCheck(board, team + "K", [pos[0], pos[1] - 1], pos, [pos[0], pos[1] - 1])
        ) {
            valid.push([pos[0], pos[1] - 1]);
        }
    }

    //castle
    if(board[team+'castle'] && !isChecking(board.board, team, pos)) {
        const t = team == "W" ? 7 : 0;
        if(board[team+'Kside']) {
            //check King side castle
            if(b[t][5] == '00' && b[t][6] == '00' && !isChecking(board.board, team, [t, 5] && !isChecking(board.board, team, [t, 6]))) {
                valid.push([t, 6])
            }
        } 
        if(board[team+'Qside']) {
            //check King side castle
            if(b[t][3] == '00' && b[t][2] == '00' && b[t][1] ==0 && !isChecking(board.board, team, [t, 3]) && !isChecking(board.board, team, [t, 2]) && !isChecking(board.board, team, [t, 1])) {
                valid.push([t, 2])
            }
        }
    }
    return valid;
};
