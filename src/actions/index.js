const onError = () => {
    return {
        type: 'ON_ERROR'
    }
}

const selectBut = (id) => {
    return {
        type: 'SELECT_BUTTONS',
        payload: id
    }
}

export {
    onError,
    selectBut
};