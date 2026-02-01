import { ref } from "vue";

interface User {
    id: string;
    name: string;
    email: string;
} 

const user = ref<User | null>(null);
const isAuthenticated = ref<boolean>(false);
const loading = ref<boolean>(false);
const error = ref<string | null>(null);

export const useAuth = () => {
    
}