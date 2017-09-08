export function makeMove(pos,player) {
    console.log('Selected grid is', pos);

    return (
            {
                type:'MAKE_MOVE',
                pos : pos,
                player:player
            }
    );
};

export function confirmMove(pos,prevMove) {
    console.log('Confirming our move', pos);
    return (
        {
            type:'CONFIRM_MOVE',
            pos:pos,
            prevMove:prevMove
        }
    );
};

export function gameOver(winner, result) {
    console.log('Game over, won by', winner);
    return (
        {
            type: 'GAME_OVER',
            result : result,
            winner:winner
        }
    );
}

export function setName(first_name, last_name) {
    return (
        {
            type: 'SUBMIT_NAME',
            firstname:first_name,
            lastname:last_name
        }
    );
};
