import isChecking from './isChecking';
import move from './move';
export default function noCheck(board, pieces, pos, before, after) {
    board = JSON.parse(JSON.stringify(board));
    return !isChecking(move(board, pieces, before, after), pieces[0], pos);
};
