import type { NavigationGuardNext, RouteLocationNormalizedGeneric } from 'vue-router';
import { useAuthStore } from '../stores/auth.store';

const isNotAuthenticatedGuard = async (
  to: RouteLocationNormalizedGeneric,
  from: RouteLocationNormalizedGeneric,
  next: NavigationGuardNext,
) => {
  const authStore = useAuthStore();

  const { checkUser } = authStore;
  const { ok } = await checkUser();

  if (ok) {
    return next({ path: from.fullPath });
  }
  
  return next();
};

export default isNotAuthenticatedGuard;
