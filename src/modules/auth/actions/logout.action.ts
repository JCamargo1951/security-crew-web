import { getCsrfCookie, spa } from "@/axios";
import unwrap from "@/modules/common/helpers/unwrap.helper";

export const logoutAction = async (): Promise<{ ok: boolean }> => {
    try {
        await getCsrfCookie();
        await unwrap(spa.post('logout'));
        return { ok: true }
    } catch (error) {
        return { ok: false }
    }
};