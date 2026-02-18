import type { NavigationGuardNext, RouteLocationNormalizedGeneric } from 'vue-router';
import { useAuthStore } from '../stores/auth.store';

const isNotAuthenticatedGuard = async (
  to: RouteLocationNormalizedGeneric,
  from: RouteLocationNormalizedGeneric,
  next: NavigationGuardNext,
) => {
  const authStore = useAuthStore();

  const { isAuthenticated } = authStore;

  if ( isAuthenticated ) {
    return next();
  }

  return next({ name: 'home' });
};

export default isNotAuthenticatedGuard;
