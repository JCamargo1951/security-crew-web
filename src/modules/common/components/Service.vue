<template>
    <section class="bg-white dark:bg-gray-900">
        <div class="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
            <h2
                class="uppercase mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
                Servicios
            </h2>

            <ul class="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 text-sm text-gray-100">
                <ListItem 
                v-for="service in services"
                    :key="service.name"
                    :icon="service.icon"
                    :label="service.name"
                ></ListItem>
            </ul>
        </div>
    </section>
</template>

<script lang="ts" setup>
import ListItem from './ui/ListItem.vue';

interface Service {
    name: string,
    icon?: string,
}

const services: readonly Service[] = [
    { name: 'Acortador de links', icon: '🔗' },
    { name: 'Links con contraseña', icon: '🔐' },
    { name: 'Links expirables', icon: '⏱' },
    { name: 'Estadísticas', icon: '📊' },
];
</script>