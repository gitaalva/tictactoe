import _ from 'lodash';
const COMPUTER_TOKEN = 'O';
const PLAYER_TOKEN = 'X';

class AI {
    isGameOver(board) {
        // all the 5 rows horizontlly
        for (var row=0; row < 5; row++) {
            var first = board[(5*row)];
            let count = 0;
            if (first !== undefined) {
                for (i=1; i<5; ++i) {
                    if (board[row*5+i] !== first) break;
                    ++count;
                }
            }
            if (count == 4) return first;
        }

        // all the 5 rows vertically
        for (var col=0; col < 5; col++) {
            var first = board[(col)];
            let count = 0;
            if (first !== undefined) {
                for (i=1; i<5; ++i) {
                    if (board[i*5+col] !== first) break;
                    ++count;
                }
            }
            if (count == 4) return first;
        }

        // top left bottom right
        if (board[0] !== undefined) {
            if ((board[6] === board[0]) && (board[12] === board[0]) && (board[18] === board[0]) && (board[24] === board[0]))
                return board[0];
        }

        //top right bottom left
        if (board[4] !== undefined) {
            if ((board[8] === board[4]) && (board[12] === board[4]) && (board[16] === board[4]) && (board[20] === board[4]))
                return board[4];
        }

        for (var i=0; i < 25; ++i) {
            if (board[i] === undefined) return false; // implies the game is still remaining;
        }

        return null; // this implies tie
    }

    minMax(newGrid, depth, player) {
        const gameState = this.isGameOver(newGrid);
        if (gameState == false) {
            const values = [];
            for (var i=0; i<25; ++i) {
                if (newGrid[i] !== undefined) continue;
                const gridCopy = _.cloneDeep(newGrid);
                gridCopy[i] = PLAYER_TOKEN;
                const value = this.minMax(gridCopy, depth+1, (player === PLAYER_TOKEN) ? COMPUTER_TOKEN : PLAYER_TOKEN);
                values.push({
                    cost : value,
                    cell : i
                });
            }

            if (player === COMPUTER_TOKEN) {
                let max = values[0];
                for (var i=1; i < values.length; i++) {
                    if (values[i].cost > max.cost) {
                        max = values[i];
                    }
                }
                if (depth === 0) {
                    return max.cell;
                } else {
                    return max.cost;
                }
            } else {
                let min = values[0];
                for (var i=1; i < values.length; i++) {
                    if (values[i].cost < min.cost) {
                        min = values[i];
                    }
                }
                if (depth === 0) {
                    return min.cell;
                } else {
                    return min.cost;
                }
            }
        } else if (gameState === null) {
            return 0;
        } else if (gameState === PLAYER_TOKEN) {
            return depth-25;
        } else if (gameState === COMPUTER_TOKEN) {
            return 25-depth;
        }
    }

    moveAI(board) {
        return this.minMax(board,0,COMPUTER_TOKEN);
    }

    naiveAI(board) {
        var i=0;
        var length = board.length;
        for (; i < length; ++i) {
            if (board[i] === undefined) break;
        }
        return i;
    }

};

export default AI;
