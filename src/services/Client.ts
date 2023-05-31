import axios, { type AxiosInstance } from "axios";

const client: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  headers: {
    "Content-type": "application/json",
  },
});

export default client;
