import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8080",
});

//Reponse to preflight request doesn't pass access control check  (error)
export const returnHelloWorldBean = (username) =>
  apiClient.get(`/test/path/${username}`,{
    headers: { 
      Authorization:'Basic d29uZTpkdW1teQ=='
    }
  });

export const executeBasicAuthenticationService 
= (token) =>apiClient.get(`/basicauth`,{
    headers: { 
      Authorization:token
    }
  });
