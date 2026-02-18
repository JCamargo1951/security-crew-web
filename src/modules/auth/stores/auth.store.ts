import { AuthStatus, type User } from "../interfaces";
import { computed, ref } from "vue";
import { getUserAction, loginAction } from "../actions";
import { defineStore } from "pinia";
import registerAction from "../actions/register.action";
import { logoutAction } from "../actions/logout.action";
import useLocalStorage from "@/modules/common/composables/use-local-storage";

export const useAuthStore = defineStore('auth', () => {
    const { data: user, removeItem: removeUser } = useLocalStorage('auth_user', null);
    const { data: authStatus, removeItem: removeStatus } = useLocalStorage(
        'auth_status', 
        AuthStatus.UNAUTHENTICATED
    );
    const loading = ref<boolean>(false);

    const login = async (email: string, password: string): Promise<{ ok: boolean, message?: string }> => {
        loading.value = true;

        try {
            const data = await loginAction(email, password);
            if (!data.ok) {
                authStatus.value = AuthStatus.UNAUTHENTICATED;
                return { ok: false, message: data.message };
            }
            user.value = data.user || null;
            authStatus.value = AuthStatus.AUTHENTICATED;
            return { ok: true, message: data.message };
        } catch (err) {
            user.value = null;
            authStatus.value = AuthStatus.UNAUTHENTICATED;
            return { ok: false };
        } finally {
            loading.value = false;
        }
    };

    const register = async (name: string, email: string, password: string, passwordConfirmation: string): Promise<{ ok: boolean, errors?: Record<string, string[]>, message?: string }> => {
        loading.value = true;

        try {
            const data = await registerAction(name, email, password, passwordConfirmation);
            if (!data.ok) {
                authStatus.value = AuthStatus.UNAUTHENTICATED;
                return { ok: false, errors: data.errors, message: data.message };
            }
            user.value = data.user || null;
            authStatus.value = AuthStatus.AUTHENTICATED;
            return { ok: true, message: data.message };

        } catch (err) {
            user.value = null;
            authStatus.value = AuthStatus.UNAUTHENTICATED;
            return { ok: false };
        } finally {
            loading.value = false;
        }
    };

    const logout = async (): Promise<{ ok: boolean }>  => {
        loading.value = true;

        try {
            const data = await logoutAction();
            if (!data.ok) {
                return { ok: false };
            }
            removeUser();
            removeStatus();
            return { ok: true };
        } catch (error) {
            return { ok: false };
        } finally {
            loading.value = false;
        }
    }

    const checkUser = async (): Promise<{ ok: boolean, user?: User }> => {
        loading.value = true;
        try {
            const data = await getUserAction();
            if (!data.ok) {
                return { ok: false };
            }
            return { ok: true, user: data.user };
        } catch (error) {
            return { ok: false };
        } finally {
            loading.value = false;
        }
    }

    return {
        user,
        loading,

        // Getters
        isPending: computed(() => authStatus.value === AuthStatus.PENDING),
        isAuthenticated: computed(() => authStatus.value === AuthStatus.AUTHENTICATED),
        isUnAuthenticated: computed(() => authStatus.value === AuthStatus.UNAUTHENTICATED),
        name: computed(() => user.value?.name || ''),
        email: computed(() => user.value?.email || ''),

        // Actions
        login,
        register,
        logout,
        checkUser,
    };
});
