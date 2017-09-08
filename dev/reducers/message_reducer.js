export default function(state="Please enter your name", action) {
    switch (action.type) {
        case 'MAKE_MOVE':
            return (action.player == 'human' ?  'YOU HAVE 3 seconds to change your move':'Your Turn');
        case 'CONFIRM_MOVE':
            return 'Computer Turn';
        case 'GAME_OVER':
            if (action.result === 'tie') return 'TIE';
            else {
                return action.winner + ' WINS';
            }

    }
    return state;
}
