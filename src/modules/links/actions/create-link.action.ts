import api from "@/axios";
import type { Link } from "../interfaces";
import type { ApiResponse } from "@/modules/common/interfaces";
import { isAxiosError } from "axios";
import unwrapData from "@/modules/common/helpers/unwrap-data.helper";

const createLinkAction = async (link: Link, userId: string): Promise<{ ok: boolean; error?: string; link?: Link }> => {

    const payload = {
        title: link.title,
        url: link.url,
        shortener_url: link.shortener_url,
        visibility: link.visibility,
        expires_at: link.expires_at,
        user_id: userId,
    };

    try {
        const data = await unwrapData(api.post<ApiResponse<Link>>("/links", payload));
        
        return {
            ok: true,
            link: data,
        }
    } catch (error) {
        if(isAxiosError(error)) {
            return {
                ok: false,
                error: error.response?.data?.message || "Error al crear el link",
            }
        }

        return {
            ok: false,
            error: "Error inesperado",
        }
    }


}

export default createLinkAction;