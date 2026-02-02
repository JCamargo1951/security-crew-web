import api, { getCsrfCookie } from "@/axios";
import type { AuthResponse, User } from "../interfaces";
import { isAxiosError } from "axios";

export const loginAction = async (email: string, password: string) : Promise<{ok: boolean, user?: User | null, message?: string}> => {
    try {
        await getCsrfCookie();
        const { data } = await api.post<AuthResponse>('/login', {
            email,
            password
        });

        return {
            ok: true,
            user: data.user,
            message: "Inicio de sesión exitoso",
        };
    } catch (error) {
        if (isAxiosError(error) && error.response?.status) {
            return {
                ok: false,
                user: null,
                message: "Credenciales inválidas",
            };
        }
        console.error({ error });
        throw new Error("Error en el servidor, intente más tarde." + {error});
    }
};