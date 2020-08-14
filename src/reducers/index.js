const initialState = {
    error: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ON_ERROR':
            return {
                ...state,
                error: true
            };
        default:
            return state;
    }
}

export default reducer;