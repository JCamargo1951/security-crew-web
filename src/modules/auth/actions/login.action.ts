import api, { getCsrfCookie } from "@/axios";

export const loginAction = async (email: string, password: string) => {
    try {
        await getCsrfCookie();
        const response = await api.post('/login', {
            email,
            password
        });
        return response.data;
    } catch (error) {
        throw error; 
    }
};