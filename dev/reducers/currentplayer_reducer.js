export default function(state='human', action) {
    console.log('in currentPlayer reducer action type', action.type, 'action.player', action.player)
    switch (action.type) {
        case 'MAKE_MOVE':
            if (action.player === 'computer') return 'human';
            break;
        case 'CONFIRM_MOVE':
            return 'computer';
            break;
    }
    return state;
}
