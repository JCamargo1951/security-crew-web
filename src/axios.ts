import axios, { AxiosError, type InternalAxiosRequestConfig } from "axios";

const api = axios.create({
  baseURL: "https://127.0.0.1:8000", // 👈 dominio raíz (IMPORTANTE)
  withCredentials: true,            // 👈 necesario para cookies de sesión
  withXSRFToken: true,              // 👈 axios 1.6+ maneja XSRF automático
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
});

/**
 * Obtener cookie CSRF de Laravel Sanctum
 * SOLO se necesita antes del login o si expira (419)
 */
export const getCsrfCookie = () => api.get("/sanctum/csrf-cookie");


/**
 * Interceptor de respuestas
 */
api.interceptors.response.use(
  response => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };

    // 🔁 Si el CSRF expiró (error 419), pedir nueva cookie y reintentar
    if (error.response?.status === 419 && !originalRequest._retry) {
      originalRequest._retry = true;
      await getCsrfCookie();
      return api(originalRequest);
    }

    // 🔐 Si la sesión expiró o no está autenticado
    if (error.response?.status === 401) {
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default api;
