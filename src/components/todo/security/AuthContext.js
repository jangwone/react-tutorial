import { useContext } from 'react'
import { createContext, useState } from 'react';
//1. Create a Context
export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext);

//2. Share the create context with other components
export default function AuthProvider({ children }) {

    //put some in the context 
    const [number, setNumber] = useState(10)

    setInterval(
        () => setNumber(number+1),10000
    )

    return (
        <AuthContext.Provider value={{ number }}>
            {children}
        </AuthContext.Provider>
    )
}

