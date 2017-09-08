
export default function(state = Array.apply(null,Array(25)).map(()=>{}), action) {
    console.log ('action.type', action.type , 'action.player', action.player, 'action.prevMove', action.prevMove, 'action.pos', action.pos );
    switch (action.type) {
        case 'MAKE_MOVE':
            return state.map((item,index) => {
                    if(index === action.pos) {
                        if (action.player === 'human')
                            return 'X';
                        else return 'O';
                    }
                    else {
                        return item;
                    }
                }
            );
        case 'CONFIRM_MOVE':
            if (action.pos !== action.prevMove) {
                return state.map((item,index) => {
                    if(index === action.pos) return 'X';
                    if(index === action.prevMove) return undefined;
                    return item;
                });
            }
    }
    return state;
}
