export default function(state=null, action) {
    switch (action.type) {
        case 'SUBMIT_NAME':
            return {
                        first_name:action.firstname,
                        last_name :action.lastname
                    }
    }
    return state;
}
