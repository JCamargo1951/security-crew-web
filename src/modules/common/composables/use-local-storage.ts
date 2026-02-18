import { ref, watch } from "vue";

const useLocalStorage = (key: string, defaultValue: any) => {

    const getStoredValue = () => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (error) {
            console.warn(`Error leyendo la clave "${key}":`, error);
            return defaultValue;
        }
    };

    const removeItem = () => {
        try {
            window.localStorage.removeItem(key);
            data.value = defaultValue;
        } catch (error) {
            console.error("Error al eliminar el item:", error);
        }
    };

    const data = ref(getStoredValue());

    watch(data, (newValue) => {
        if (newValue === null) {
            window.localStorage.removeItem(key);
        } else {
            window.localStorage.setItem(key, JSON.stringify(newValue));
        }
    }, { deep: true });

    return {
        data,
        getStoredValue,
        removeItem,
    }
};

export default useLocalStorage;