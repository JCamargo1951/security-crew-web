import { ref } from "vue";
import type { Link } from "../interfaces";
import { getLinks } from "../actions";
import type { User } from "@/modules/auth/interfaces";
import createLinkAction from "../actions/create-link.action";

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

    const createLink = async (link: Link, user: User) => {
        try {
            loading.value = true;
            const data = await createLinkAction(link, user.id);
            if (!data.ok) {
                message.value = data.error ?? '';
                return;
            }
            links.value.push(data.link!);
            message.value = 'Link creado exitosamente';
        } catch (e) {
            message.value = 'Error de servidor';
            error.value = 'Error de servidor';
        } finally {
            loading.value = false;
        }
    }

    return {
        links,
        message,
        error,
        loading,

        //Actions
        fetchLinks,
        createLink,
    }
}