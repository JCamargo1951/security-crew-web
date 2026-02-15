<template>
  <nav class="sticky top-0 z-50 w-full bg-black border-b-2 border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
    <div class="h-1 w-full bg-gradient-to-r from-transparent via-magenta-500 to-transparent opacity-50"></div>

    <div class="max-w-screen-xl mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        
        <div class="flex-shrink-0">
          <RouterLink :to="{ name: 'home' }" class="relative group flex items-center gap-3">
            <div class="relative">
              <div class="absolute -inset-1 bg-cyan-500 blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
              <div class="relative p-2 bg-black border border-cyan-500 clip-path-polygon">
                <svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
            </div>
            <span class="text-2xl font-black tracking-tighter text-white uppercase italic">
              SEC<span class="text-cyan-400">URITY</span><span class="text-magenta-500 group-hover:animate-pulse">_CREW</span>
            </span>
          </RouterLink>
        </div>

        <div class="hidden lg:flex lg:items-center space-x-1">
          <template v-for="link in links" :key="link.label">
            <RouterLink
              v-if="link.auth"
              :to="{ name: link.route, params: link.param }"
              class="relative px-4 py-1 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-cyan-400 transition-all duration-200 before:content-['>'] before:mr-2 before:opacity-0 hover:before:opacity-100"
              active-class="text-cyan-400 bg-cyan-500/10 border-r-2 border-cyan-500"
            >
              {{ link.label }}
            </RouterLink>
          </template>
        </div>

        <div class="flex items-center gap-4">
          <div v-if="!isAuthenticated" class="hidden sm:flex items-center gap-4">
            <RouterLink
              :to="{ name: 'login' }"
              class="text-xs font-bold uppercase tracking-widest text-magenta-500 hover:text-magenta-400 transition-colors"
            >
              // Acceder
            </RouterLink>
            
            <RouterLink
              :to="{ name: 'register' }"
              class="relative px-6 py-2 overflow-hidden group bg-cyan-500 text-black font-black uppercase text-xs tracking-tighter hover:bg-white transition-colors [clip-path:polygon(10%_0,100%_0,100%_70%,90%_100%,0_100%,0%_30%)]"
            >
              <span class="relative z-10">Registrar_ID</span>
              <div class="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </RouterLink>
          </div>

          <div v-else class="flex items-center gap-4 border-l border-gray-800 pl-4">
            <div class="text-right hidden sm:block">
              <p class="text-[10px] text-gray-500 uppercase leading-none">User_Active</p>
              <p class="text-sm font-mono text-cyan-400">{{ user?.name }}</p>
            </div>
            
            <button
              @click="onLogout"
              class="group relative p-2 border border-red-500/50 hover:bg-red-500/20 transition-all"
            >
              <div class="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-10 blur-sm"></div>
              <svg class="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/modules/auth/stores/auth.store';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

interface Link {
  label: string;
  route?: string;
  param?: Record<string, string | number>;
  auth?: boolean;
}

const authStore = useAuthStore();
const router = useRouter();

const { logout } = authStore;
const { loading, isAuthenticated, user } = storeToRefs(authStore);

const links = computed<Link[]>(() => [
  {
    label: 'Inicio',
    route: 'home',
    auth: true,
  },
  {
    label: 'Mis Links',
    route: 'links.dashboard',
    auth: isAuthenticated.value,
  },
]);

const onLogout = async () => {
  const data = await logout();
  if (!data.ok) {
    router.replace({ name: 'login' });
  }
  router.replace({ name: 'home' });
};
</script>

<style scoped>

.clip-path-polygon {
  clip-path: polygon(20% 0%, 100% 0%, 100% 80%, 80% 100%, 0% 100%, 0% 20%);
}

.text-magenta-500 {
  color: #ff00ff;
}
</style>



