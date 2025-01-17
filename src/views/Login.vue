<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="login">
            <div>
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="email" required />
            </div>
            <div>
                <label for="password">Password:</label>
                <input type="password" id="password" v-model="password" required />
            </div>
            <button type="submit">Login</button>
        </form>
        <button @click="signInWithGoogle">Login with Google</button>
        <button @click="signInWithFacebook">Login with Facebook</button>
        <p>Don't have an account? <router-link to="/register">Register</router-link></p>
    </div>
</template>

<script>
import {
    auth,
    GoogleAuthProvider,
    FacebookAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
} from '../firebase';

export default {
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        async login() {
            try {
                await signInWithEmailAndPassword(auth, this.email, this.password);
                this.$router.push('/home');
            } catch (error) {
                alert(error.message);
            }
        },
        async signInWithGoogle() {
            const provider = new GoogleAuthProvider();
            try {
                await signInWithPopup(auth, provider);
                this.$router.push('/home');
            } catch (error) {
                if (error.code === 'auth/popup-blocked') {
                    // Fallback to redirect if popup is blocked
                    await signInWithRedirect(auth, provider);
                } else {
                    console.error(error);
                    alert(error.message);
                }
            }
        },
        async signInWithFacebook() {
            const provider = new FacebookAuthProvider();
            try {
                await signInWithPopup(auth, provider);
                this.$router.push('/home');
            } catch (error) {
                alert(error.message);
            }
        },
    },
};
</script>