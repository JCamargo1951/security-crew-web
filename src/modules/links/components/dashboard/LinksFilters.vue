<template>
    <div class="mt-6 md:flex md:items-center md:justify-between">
            <div
                class="inline-flex overflow-hidden bg-white border divide-x rounded-lg dark:bg-gray-900 rtl:flex-row-reverse dark:border-gray-700 dark:divide-gray-700"
            >
                <button
                  v-for="option in filterOptions"
                    :key="option.value"
                    @click="model = option.value"
                    :class="[
                        'px-5 py-2 text-xs font-medium transition-colors duration-200 sm:text-sm',
                        model === option.value 
                            ? 'bg-gray-100 dark:bg-gray-800 text-blue-600' 
                            : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                    ]"
                >
                    {{ option.label }}
                </button>
            </div>

            <div class="relative flex items-center mt-4 md:mt-0">
                <span class="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </span>

                <input type="text" placeholder="Buscar"
                    class="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
            </div>
        </div>
</template>

<script setup lang="ts">
    const model = defineModel<string>({ default: 'all' });

    const filterOptions = [
        { label: 'Todos', value: 'all' },
        { label: 'Públicos', value: 'public' },
        { label: 'Privados', value: 'private' },
    ];
</script>