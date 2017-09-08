export default function(state=null, action) {
    switch (action.type) {
        case 'MAKE_MOVE':
            if (action.player === 'computer') return null;
            else return action.pos;
        case 'CONFIRM_MOVE':
            return null;
    }
    return state;
}
