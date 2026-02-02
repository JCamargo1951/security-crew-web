import { AuthStatus, type User } from "../interfaces"; 
import { computed, ref } from "vue"; 
import { loginAction } from "../actions";
import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth', () => {
    const user = ref<User | null>(null);
    const loading = ref<boolean>(false);
    const error = ref<string | null>(null);
    const authStatus = ref<AuthStatus>(AuthStatus.PENDING);

    const login = async (email: string, password: string) : Promise<boolean> => {
        loading.value = true;
        error.value = null;

        try {
            const data = await loginAction(email, password);
            if(!data.ok){
                authStatus.value = AuthStatus.UNAUTHENTICATED;
                error.value = data.message || null;
                return false;
            }
            user.value = data.user || null;
            authStatus.value = AuthStatus.AUTHENTICATED;
            return true;
        } catch (err) {
            user.value = null;
            authStatus.value = AuthStatus.UNAUTHENTICATED;
            return false;
        } finally {
            loading.value = false;
        }
    };

    return {
        user,
        loading,
        error,

        // Getters
        isPending: computed(() => authStatus.value === AuthStatus.PENDING),
        isAuthenticated: computed(() => authStatus.value === AuthStatus.AUTHENTICATED),
        name: computed(() => user.value?.name || ''),
        email: computed(() => user.value?.email || ''),

        // Actions
        login,
    };
});
