
const initialState = {
    loggedIn: false,
};
const authReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'LOGIN':
            return {
                ...state,
                loggedIn: payload,
            };
        default:
            return state;
    }
};

export { authReducer};
