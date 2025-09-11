import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api", // adjust if your backend runs on another port
});

// Example: attach token if you later add auth
// API.interceptors.request.use((req) => {
//   const token = localStorage.getItem("token");
//   if (token) req.headers.Authorization = `Bearer ${token}`;
//   return req;
// });

export default API;
