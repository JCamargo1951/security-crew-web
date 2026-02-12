import { ref } from "vue";
import type { Link } from "../interfaces";
import { getLinks } from "../actions";

export function useLinks() {
    const links = ref<Link[]>([]);
    const loading = ref(false);
    const message = ref('');
    const error = ref('');

    const fetchLinks = async () => {
        try {
            loading.value = true;
            const data = await getLinks();
            if (!data.ok) {
                message.value = data.message ?? '';
                return;
            }
            links.value = data.links ?? [];
            message.value = data.message ?? '';
        } catch (e) {
            message.value = 'Error de servidor';
            error.value = 'Error de servidor';
        } finally {
            loading.value = false;
        }
    };

    return {
        links,
        message,
        error,
        loading,

        //Actions
        fetchLinks,
    }
}