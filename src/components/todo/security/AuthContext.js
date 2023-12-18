import { useContext } from "react";
import { createContext, useState } from "react";
import { executeBasicAuthenticationService } from "../api/HellowWorldApiService";
import { apiClient } from "../api/ApiClient";
//1. Create a Context
export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

//2. Share the create context with other components
export default function AuthProvider({ children }) {
  //3: put some in the context
  const [isAuthenticated, setAuthenticated] = useState(false);

  const [username, setUsername] = useState(null);

  const [token, setToken] = useState(null);

/*
  function login(username, password) {
    if (username === "wone" && password === "dummy") {
      setAuthenticated(true);
      setUsername(username);
      return true;
    } else {
      setAuthenticated(false);
      setUsername(null);
      return false;
    }
  }
*/
  async function login(username, password) {

    const baToken = 'Basic ' + window.btoa( username + ':' + password )

    try {

      const response = await executeBasicAuthenticationService(baToken)

      if (response.status=200) {
        setAuthenticated(true);
        setUsername(username);
        setToken(baToken);

        apiClient.interceptors.request.use(
          (config) => {
            console.log('intercepting and adding a token')
            config.headers.Authorization = baToken
            return config
          }
        )

        return true;
      } else {
        logout() 
        return false;
      }
    } catch (error) {
      logout() 
        return false;
    }
  }

  function logout() {
    setAuthenticated(false);
    setUsername(null);
    setToken(null);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, username, token}}>
      {children}
    </AuthContext.Provider>
  );
}
