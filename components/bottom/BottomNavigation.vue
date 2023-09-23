<template>
    <v-bottom-navigation
      class="bottom-navigation z-6 px-4 pb-4 pt-2 start-0 end-0"
      color="transparent"
      fixed
      height="80"
      width="100%"
    >
      <VCard class="pa-5 w-full d-flex justify-space-between align-center" elevation="0">
        <BottomNavigationLink
          v-for="(item, index) in links"
          :key="index"
          :item="item"
        />
      </VCard>
    </v-bottom-navigation>
  </template>
  
  <script setup>
  import BottomNavigationLink from './BottomNavigationLink.vue';
  const links = ref([
    { title: 'خانه', path: '/home', icon: 'fas fa-house' },
    { title: 'کتابخانه', path: '/home', icon: 'fas fa-clipboard-medical' },
    { title: 'پروفایل', path: '/home', icon: 'fas fa-user' }
  ]);
  </script>
  
  <style scoped>
  .custom-shadow {
    box-shadow: 0 -5px 5px rgba(0, 0, 0, 0.05);
  }
  </style>
  