import { getCsrfCookie, spa } from "@/axios";
import type { User } from "../interfaces";
import { isAxiosError } from "axios";
import unwrap from "@/modules/common/helpers/unwrap-data.helper";
import { getUserAction } from "./get-user.action";

export const loginAction = async (email: string, password: string): Promise<{ ok: boolean, user?: User | null, message?: string }> => {
    try {

        await getCsrfCookie();

        await unwrap(spa.post('/login', {
            email,
            password
        }));

        const data = await getUserAction();

        return {
            ok: true,
            user: data.user,
            message: "Inicio de sesión exitoso",
        };
    } catch (error) {
        console.log(error);
        if (isAxiosError(error) && error.response?.status) {

            if (isAxiosError(error) && error.response?.status === 422) {
                return {
                    ok: false,
                    message: "Credenciales inválidas",
                };
            }

            if (isAxiosError(error) && error.response?.status === 401) {
                return {
                    ok: false,
                    message: "No autenticado",
                };
            }
        }

        throw new Error("SERVER ERROR");
    }
};