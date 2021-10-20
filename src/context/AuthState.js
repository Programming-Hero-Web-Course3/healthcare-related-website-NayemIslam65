import {createContext, useReducer} from "react";
import AuthReducer from "./AuthReducer";

const initialState = {
    user: {
        username: 'anonymous_user',
        isAuthenticated: false
    }
}

export const AuthContext = createContext(initialState)
export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState)

    function loginUser(username) {
        dispatch({
            type: 'LOGIN',
            payload: username
        })
    }

    function logoutUser() {
        dispatch({
            type: 'LOGOUT'
        })
    }

    return (
        <AuthContext.Provider value={{
            currentUser: state.user,
            loginUser,
            logoutUser
        }}>
            {children}
        </AuthContext.Provider>
    )
}