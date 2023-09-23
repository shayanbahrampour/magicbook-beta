<template>
  <div class="bg-primary h-100 d-flex align-center">
    <VImg src="images/logo.png" class="d-flex align-center justify-center" height="100px"> </VImg>
    <VFooter app bottom color="primary" class="d-flex justify-center" padless fixed>
      <VSheet class="text-center font-weight-bold w-full pb-5 bg-transparent text-white"> ساخته شده در گلیچ </VSheet>
    </VFooter>
    <VDialog v-model="showDialog" fullscreen>
      <AddToHomeScreen @submit="$router.push('/login')" />
    </VDialog>
  </div>
</template>

<script setup>
import AddToHomeScreen from './AddToHomeScreen.vue';
const showDialog = ref(false);
setTimeout(() => {
  showDialog.value = true;
}, 3000);
</script>
