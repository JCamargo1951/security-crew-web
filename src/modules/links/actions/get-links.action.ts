import api from "@/axios";
import type { Link } from "../interfaces";
import { isAxiosError } from "axios";
import type { ApiResponse } from "@/modules/common/interfaces";
import unwrapFull from "@/modules/common/helpers/unwrap-full.helper";

export const getLinks = async (): Promise<{ ok: boolean, links?: Link[], message?: string }> => {
    try {
        const res = await unwrapFull(api.get<ApiResponse<Link[]>>("/links"));
        return {
            links: res.data,
            ok: true,
        };
    } catch (error) {
        if (!isAxiosError(error)) {
            throw Error('SERVER ERROR');
        }

        if (error.response?.status === 401) {
            return {
                ok: false,
                message: 'Usuario no autenticado'
            };
        }

        if (error.response?.status === 403) {
            return {
                ok: false,
                message: 'Usuario no puede ver este recurso'
            };
        }

        return { ok: false };
    }
}