const initialState = {
    error: false,
    buttons: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ON_ERROR':
            return {
                ...state,
                error: true
            };
        case 'SELECT_BUTTONS':
            return {
                ...state,
                buttons: action.payload
            };
        default:
            return state;
    }
}

export default reducer;