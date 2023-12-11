import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8080",
});

export const returnHelloWorldBean = (username) =>
  apiClient.get(`/test/path/${username}`);
