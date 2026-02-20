import type { NavigationGuardNext, RouteLocationNormalizedGeneric } from 'vue-router';
import { useAuthStore } from '../stores/auth.store';

const isAuthenticatedGuard = async (
  to: RouteLocationNormalizedGeneric,
  from: RouteLocationNormalizedGeneric,
  next: NavigationGuardNext,
) => {
    const authStore = useAuthStore();
  
    const { isAuthenticated, checkUser } = authStore;
  
    await checkUser();

    console.log(isAuthenticated);
  
    if ( isAuthenticated ) {
      return next();
    }
  
    return next({ name: 'home' });
};

export default isAuthenticatedGuard;
