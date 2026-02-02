import { AuthStatus, type User } from "../interfaces"; 
import { computed, ref } from "vue"; 
import { loginAction } from "../actions";
import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth', () => {
    const user = ref<User | null>(null);
    const loading = ref<boolean>(false);
    const error = ref<string | null>(null);
    const authStatus = ref<AuthStatus>(AuthStatus.PENDING);

    const login = async (email: string, password: string) => {
        loading.value = true;
        error.value = null;

        try {
            const loginResponse = await loginAction(email, password);

            if (!loginResponse.ok) {
                error.value = loginResponse.message || 'Login failed';
                authStatus.value = AuthStatus.UNAUTHENTICATED;
                return false;
            }

            user.value = loginResponse.user || null;
            authStatus.value = AuthStatus.AUTHENTICATED;
            return true;

        } catch (err) {
            // console.error({ err });
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
        username: computed(() => user.value?.name || ''),
        email: computed(() => user.value?.email || ''),

        // Actions
        login,
    };
});
