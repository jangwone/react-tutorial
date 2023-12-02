import { useContext } from 'react'
import { createContext, useState } from 'react';
//1. Create a Context
export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext);

//2. Share the create context with other components
export default function AuthProvider({ children }) {

    //3: put some in the context 
    const [isAuthenticated, setAuthenticated] = useState(false)

    function login(username, password) {
        if (username === 'wone' && password === 'dummy') {
            setAuthenticated(true)
            return true
        }
        else {
            setAuthenticated(false)
            return false
        } 
    }

    function logout() {
        setAuthenticated(false)
    }

    return (
        <AuthContext.Provider value={ { isAuthenticated, login, logout} }>
            {children}
        </AuthContext.Provider>
    )
}

