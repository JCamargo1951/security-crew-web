import type { NavigationGuardNext, RouteLocationNormalizedGeneric } from 'vue-router';

const isAuthenticatedGuard = (
  to: RouteLocationNormalizedGeneric,
  from: RouteLocationNormalizedGeneric,
  next: NavigationGuardNext,
) => {
  return next();
};

export default isAuthenticatedGuard;
