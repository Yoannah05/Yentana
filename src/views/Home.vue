<template>
    <div>
        <h1>Welcome to the Home Page</h1>
        <button @click="logout">Logout</button>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter();

        const logout = () => {
            localStorage.removeItem('isAuthenticated');
            router.push('/');
        };

        return {
            logout,
        };
    },
};
</script>