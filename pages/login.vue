<template>
  <div class="bg-primary h-full py-6 px-10 d-flex flex-column align-end justify-center">
    <div class="d-flex flex-column justify-center rtl f-30 w-full">
      <h4 class="mb-6 f-20">به مجیک‌بوک خوش‌آمدید</h4>
      <v-text-field v-model="creds.email" label="ایمیل" variant="solo-filled"></v-text-field
      ><v-text-field v-model="creds.password" label="رمز عبور" type="password" variant="solo-filled"></v-text-field>
      <v-text-field label="تکرار رمز عبور" type="password" variant="solo-filled"></v-text-field>
      <v-card class="d-flex align-center justify-center" height="60" @click="registerUser()"
        ><span class="f-16 font-weight-bold">ثبت نام</span></v-card
      >

      <div class="d-flex align-center justify-space-between w-full mt-10">
        <VCard
          class="rounded-xl card-read-shadow mb-4 d-flex align-center justify-center"
          height="80"
          width="80"
          @click="registerUserGoogle()"
          ><v-icon size="30" color="primary">fa-brands fa-google</v-icon></VCard
        >
        <VCard class="rounded-xl card-read-shadow mb-4 d-flex align-center justify-center" height="80" width="80"
          ><v-icon size="30" color="primary">fa-brands fa-facebook</v-icon></VCard
        >
        <VCard class="rounded-xl card-read-shadow mb-4 d-flex align-center justify-center" height="80" width="80"
          ><v-icon size="30" color="primary">fa-brands fa-apple</v-icon></VCard
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
definePageMeta({
  layout: 'empty'
});
const creds = reactive({
  email: '',
  password: ''
});

const nuxtApp = useNuxtApp();
async function registerUser() {
  try {
    const { user } = await createUserWithEmailAndPassword(nuxtApp.$auth, creds.email, creds.password);
    const token = user.accessToken;
    nuxtApp.$auth.setToken(token);
    localStorage.setItem('token', token);
    this.$router.push('/home');
  } catch (error) {
    if (error instanceof Error) {
    }
  } finally {
    this.$router.push('/home');
  }
}

async function registerUserGoogle() {
  try {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(nuxtApp.$auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    nuxtApp.$auth.setToken(token);
    localStorage.setItem('token', token);
    this.$router.push('/home');
  } catch (error) {
    if (error instanceof Error) {
    }
  }
}
</script>
