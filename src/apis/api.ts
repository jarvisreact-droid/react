// src/api.ts
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5144/api", // <-- your API base URL
});

// Interceptor to add Bearer token
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token"); // or from redux store

//   if (token && config.headers) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;
// });

// api.interceptors.response.use(
//   (res) => res,
//   (err) => {
//     if (err.response.status === 401) {
//       // redirect to login
//       window.location.href = "/login";
//     }
//     return Promise.reject(err);
//   }
// );

export default api;
