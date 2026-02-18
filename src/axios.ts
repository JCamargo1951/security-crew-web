import axios, { AxiosError, type InternalAxiosRequestConfig } from "axios";
import useLocalStorage from "./modules/common/composables/use-local-storage";
import { AuthStatus } from "./modules/auth/interfaces";
import { useRouter } from "vue-router";

const { data: user, removeItem: removeUser } = useLocalStorage('auth_user', null);
const { data: authStatus, removeItem: removeStatus } = useLocalStorage(
    'auth_status', 
    AuthStatus.UNAUTHENTICATED
);

const router = useRouter();

const api = axios.create({
  baseURL: "http://localhost:8000/api/v1", 
  withCredentials: true,            
  withXSRFToken: true,           
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
});

export const spa = axios.create({
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
export const getCsrfCookie = () => spa.get("/sanctum/csrf-cookie");


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
      console.warn("Sesión expirada o no autenticado");
      removeUser();
      removeStatus();
      router.replace({
        name: 'home'
      });
    }

    if (error.response?.status === 403) {
      console.warn("No tienes permisos para esta acción");

      // vista forbideen

      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      console.error("Error de red o servidor caído");
      return Promise.reject(error);
    }

    const status = error.response.status;

    if (error.response?.status === 401) {
        console.warn("Sesión expirada o no autenticado");
        removeUser();
        removeStatus();
        router.replace({
          name: 'home'
        });
    }

    if (status === 403) {
      console.warn("No tienes permisos para esta acción");

      // vista forbideen

      return Promise.reject(error);
    }

    if (status >= 500) {
      console.error("Error del servidor");

      // Mostrar toast global, modal, etc.
      // showGlobalError("Ocurrió un error inesperado");

      return Promise.reject(error);
    }

    // ❗ Dejamos pasar otros errores (400, 404, 422, etc.)
    return Promise.reject(error);
  }
);

export default api;
