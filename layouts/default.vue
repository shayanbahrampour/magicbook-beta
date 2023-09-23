<template>
  <VApp>
    <VMain>
      <v-app-bar :class="`d-flex px-4`" :height="60" app color="primary" dense fixed
        ><v-img alt="" contain src="/images/logo.png" max-width="40"
      /></v-app-bar>
      <slot />
      <BottomNavigation />
    </VMain>
  </VApp>
</template>

<script setup>
import BottomNavigation from '~/components/bottom/BottomNavigation';
</script>
