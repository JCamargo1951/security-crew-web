import { getCsrfCookie, spa } from "@/axios";
import unwrap from "@/modules/common/helpers/unwrap-data.helper";
import { isAxiosError } from "axios";
import { getUserAction } from "./get-user.action";
import type { User } from "../interfaces";

export const registerAction = async (name: string, email: string, password: string, passwordConfirmation: string): Promise<{ ok: boolean, errors?: Record<string, string[]>, message?: string, user?: User }> => {
    try {
        await getCsrfCookie();

        await unwrap(spa.post('/register', {
            name: name,
            email: email,
            password: password,
            password_confirmation: passwordConfirmation,
        }));

        const data = await getUserAction();

        return {
            ok: true,
            message: 'Usuario registrado',
            user: data.user,
        };
    } catch (error) {
        if (isAxiosError(error) && error.response?.status === 422) {
            console.log(error.response)
            return {
                ok: false,
                errors: error.response.data.errors,
                message: error.response.data.message
            }
        }
        if (isAxiosError(error) && error.response?.status === 400) {
            return {
                ok: false,
                message: error.response.data.message,
            }
        }
        throw new Error('SERVER ERROR');
    }
}

export default registerAction;