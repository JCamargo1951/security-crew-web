import type { NavigationGuardNext, RouteLocationNormalizedGeneric } from 'vue-router';
import { useAuthStore } from '../stores/auth.store';

const isNotAuthenticatedGuard = async (
  to: RouteLocationNormalizedGeneric,
  from: RouteLocationNormalizedGeneric,
  next: NavigationGuardNext,
) => {
  const authStore = useAuthStore();

  const { isAuthenticated, checkUser, loading } = authStore;
  const data = await checkUser();

  if (isAuthenticated && data.ok) {
    return next({ name: 'home' });
  }
  
  return next();
};

export default isNotAuthenticatedGuard;
