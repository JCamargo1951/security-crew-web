import axios, { AxiosError, type InternalAxiosRequestConfig } from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api/v1", 
  withCredentials: true,            
  withXSRFToken: true,           
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
});

export const authSession = axios.create({
  baseURL: "http://localhost:8000", 
  withCredentials: true,            
  withXSRFToken: true,           
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
});
/**
 * Obtener cookie CSRF de Laravel Sanctum
 */
export const getCsrfCookie = () => authSession.get("/sanctum/csrf-cookie");


/**
 * Interceptor de respuestas
 */
api.interceptors.response.use(
  response => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };

    if (error.response?.status === 419 && !originalRequest._retry) {
      originalRequest._retry = true;
      await getCsrfCookie();
      return api(originalRequest);
    }

    if (error.response?.status === 401) {
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default api;
