<template>
  <div class="px-4 pt-2 pb-6">
    <v-chip-group class="rtl mb-2" color="primary" v-model="amenities" multiple selected-class="text-primary">
      <v-chip v-for="(catalog, j) in category" :key="j">{{ catalog }} </v-chip> </v-chip-group
    ><HomeBookCard v-if="!loading" v-for="(item, i) in items" :key="i" :item="item" />
    <VSkeletonLoader v-else></VSkeletonLoader>
  </div>
</template>

<script setup>
import HomeBookCard from '~/components/books/HomeBookCard.vue';
import { VSkeletonLoader } from 'vuetify/labs/VSkeletonLoader';


const axios = useNuxtApp().$axios;
let items = ref([]);
let loading = ref(true);
let amenities = ref([]);
const category = ref(['تاریخی', 'کسب و کار ', 'تک', 'فضا', 'کتاب', 'سیاسی', 'استراتژی']);
async function fetchData() {
  try {
    const response = await axios.get('/books.json');
    items.value = Object.values(response.data);
    loading.value = false;
  } catch (error) {
    loading.value = false;
    console.error('Error:', error);
  }
}



fetchData();
</script>
<script></script>
