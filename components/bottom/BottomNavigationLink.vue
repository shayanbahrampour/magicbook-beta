<template>
  <div class="d-flex flex-column align-center justify-space-between w-full">
    <v-card
      :height="large ? 60 : 36"
      :to="item.path"
      :width="large ? 60 : 36"
      class="d-flex flex-column justify-center align-center pa-1 overflow-hidden"
      color="#eef3fb"
      exact
      flat
    >
      <v-icon :color="'خانه' === item.title ? 'primary' : 'grey'">{{ item.icon }}</v-icon>
    </v-card>
    <span
      :class="['f-11', large ? 'mt-2 font-weight-bold' : 'mt-1', 'خانه' === item.title ? 'text-primary' : undefined]"
      >{{ item.title }}</span
    >
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  item: {
    type: Object,
    default: () => ({})
  },
  large: {
    type: Boolean,
    default: false
  }
});

const route = useRoute();

const emit = defineEmits();
</script>

<style scoped>
.custom-text-color {
  color: rgba(126, 146, 175, 1);
}
</style>
