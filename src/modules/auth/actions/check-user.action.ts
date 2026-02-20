import api from "@/axios";
import type { User } from "../interfaces";
import { isAxiosError } from "axios";
import unwrapData from "@/modules/common/helpers/unwrap-data.helper";
import type { ApiResponse } from "@/modules/common/interfaces";

const checkUserAction = async (): Promise<{ok: boolean, user?: User}> => {
    try {
        const data = await unwrapData(api.get<ApiResponse<{auth: boolean, user: User}>>('/check_user'));
        if(!data.auth){
            return { ok: false }
        }
        return { ok: true, user: data.user }
    } catch (error) {
        if (isAxiosError(error)) {
            return { ok: false }
        }
        return { ok: false }
    }
}

export default checkUserAction;