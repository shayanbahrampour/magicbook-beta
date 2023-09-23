<template>
  <div v-if="items.length && !loading" class="h-full d-flex flex-column py-3 px-4">
    <VCard
      class="rounded-xl card-read-shadow mb-4 d-flex align-center justify-center"
      height="50"
      width="50"
      @click="this.$router.go(-1)"
      ><v-icon size="18" color="primary">fa-solid fa-arrow-left</v-icon></VCard
    >
    <VCard
      class="rounded-xl card-read-shadow d-flex flex-column justify-center align-center"
      elevation="10"
      height="80%"
    >
      <span class="mx-10 f-18 mt-6 text-center rtl">{{ items[counter].text }}</span>
      <v-img
        v-if="items[counter].image"
        :src="items[counter].image"
        class="d-flex align-center mt-auto justify-center rounded-xl mt-4"
        width="100%"
        max-height="300"
        cover
      >
      </v-img>
    </VCard>
    <div class="d-flex justify-space-between mt-5">
      <VCard
        class="rounded-xl d-flex align-center justify-center card-read-shadow px-4"
        height="50"
        width="45%"
        @click="nextPage()"
        ><v-icon class="mr-2" size="18" color="primary">fa-solid fa-arrow-left</v-icon
        ><span class="text-primary">صفحه‌ی بعد</span></VCard
      ><VCard
        class="rounded-xl d-flex align-center justify-center card-read-shadow px-4"
        height="50"
        width="45%"
        @click="prevPage()"
        ><span class="text-primary">صفحه‌ی قبل</span
        ><v-icon class="ml-2" size="18" color="primary">fa-solid fa-arrow-right</v-icon></VCard
      >
    </div>
  </div>
  <VSkeletonLoader v-if="loading" class="ma-4"></VSkeletonLoader>
</template>

<script setup>
const axios = useNuxtApp().$axios;
import { VSkeletonLoader } from 'vuetify/labs/VSkeletonLoader';
import { useRoute } from 'vue-router';
const route = useRoute();
let items = ref([]);
let counter = ref(0);
let loading = ref(true);
async function fetchData() {
  try {
    const response = await axios.get(`/${route.params.id}.json`);
    items.value = Object.values(response.data);
    loading.value = false;
  } catch (error) {
    loading.value = false;
    console.error('Error:', error);
  }
}

function prevPage() {
  if (counter.value !== 0) counter.value--;
}
function nextPage() {
  if (counter.value !== items.value.length - 1) counter.value++;
}
fetchData();
</script>
