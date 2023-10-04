<template>
  <div class="bg-primary h-100 d-flex align-center">
    <VImg src="images/logo.png" class="d-flex align-center justify-center" height="100px"> </VImg>
    <VFooter app bottom color="primary" class="d-flex justify-center" padless fixed>
      <VSheet class="text-center font-weight-bold w-full pb-5 bg-transparent text-white"> ساخته شده در گلیچ </VSheet>
    </VFooter>
  </div>
</template>

<script setup>
const router = useRouter();
setTimeout(() => {
  fetchUser();
}, 3000);

async function fetchUser() {
  if (localStorage.getItem('token') !== 'null') {
    router.push({ path: '/home' });
  } else {
    router.push({ path: '/login' });
  }
}
</script>
