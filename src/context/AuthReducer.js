const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGOUT':
            return {
                ...state,
                user: {
                    username: 'anonymous_user',
                    isAuthenticated: false
                }
            }
        case 'LOGIN':
            return {
                ...state,
                user: {
                    username: action.payload,
                    isAuthenticated: true
                }
            }
        default:
            return state
    }
}

export default reducer