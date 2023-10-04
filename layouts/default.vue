<template>
  <VApp>
    <VMain>
      <v-app-bar :class="`d-flex px-6 align-end`" height="60" app color="primary" dense fixed>
        <v-card class="bg-transparent" elevation="0" @click="logout()"
          ><v-icon color="white">fa-solid fa-right-from-bracket</v-icon></v-card
        >
        <v-spacer /><v-img alt="" contain src="/images/logo.png" max-width="40"
      /></v-app-bar>
      <slot />
      <BottomNavigation />
    </VMain>
  </VApp>
</template>

<script setup>
import BottomNavigation from '~/components/bottom/BottomNavigation';

const router = useRouter();

async function logout() {
  try {
    localStorage.setItem('token', null);
  } catch (error) {
    if (error instanceof Error) {
      // handle error
    }
  } finally {
    router.push({ path: '/login' });
  }
}
</script>
