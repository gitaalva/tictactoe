export default function(state=null, action) {
    switch (action.type) {
        case 'MAKE_MOVE':
            return (action.player == 'human' ?  'human':'computer');
    }
    return state;
}
