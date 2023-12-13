import { useContext } from 'react'
import { createContext, useState } from 'react';
//1. Create a Context
export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext);

//2. Share the create context with other components
export default function AuthProvider({ children }) {

    //3: put some in the context 
    const [isAuthenticated, setAuthenticated] = useState(false)

    const [username, setUsername] = useState(null)

    function login(username, password) {
        if (username === 'wone' && password === 'dummy') {
            setAuthenticated(true)
            setUsername(username)
            return true
        }
        else {
            setAuthenticated(false)
            setUsername(null)
            return false
        } 
    }

    function logout() {
        setAuthenticated(false)
    }

    return (
        <AuthContext.Provider value={ { isAuthenticated, login, logout, username} }>
            {children}
        </AuthContext.Provider>
    )
}

