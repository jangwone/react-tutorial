import { apiClient } from "./ApiClient";

//Reponse to preflight request doesn't pass access control check  (error)
export const returnHelloWorldBean = (username,token) =>
  apiClient.get(`/test/path/${username}`,{
    // headers: { 
    //   Authorization:token
    // }
  }
);

