<template>
    <div>
        <h1>Register</h1>
        <form @submit.prevent="register">
            <div>
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="email" required />
            </div>
            <div>
                <label for="password">Password:</label>
                <input type="password" id="password" v-model="password" required />
            </div>
            <button type="submit">Register</button>
        </form>
        <button @click="signInWithGoogle">Sign up with Google</button>
        <button @click="signInWithFacebook">Sign up with Facebook</button>
        <p>Already have an account? <router-link to="/">Login</router-link></p>
    </div>
</template>

<script>
import {
    auth,
    GoogleAuthProvider,
    FacebookAuthProvider,
    signInWithPopup,
    createUserWithEmailAndPassword,
} from '../firebase';

export default {
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        async register() {
            try {
                await createUserWithEmailAndPassword(auth, this.email, this.password);
                alert('Registration successful!');
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
                alert(error.message);
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