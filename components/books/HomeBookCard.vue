<template>
  <div class="red-text mb-6">
    <VCard
      class="rounded-xl d-flex align-center card-box-shadow justify-end pl-2"
      min-height="180"
      :to="`/read/${item.id}`"
    >
      <div class="d-flex flex-column rtl">
        <h4 class="f-18 text-wrap">{{ item.title }}</h4>

        <h4 class="mb-2 font-weight-regular">{{ item.author }}</h4>
        <span class="f-14 mb-4" style="opacity: 0.8">{{ item.description }}</span>
        <div class="d-flex flex-wrap">
          <v-chip v-for="(tag, i) in tags" :key="i" class="ml-2 mb-2" color="primary" label max-width="100">
            {{ tag }}
          </v-chip>
        </div>
      </div>
      <v-img
        :src="item.cover"
        class="d-flex align-center justify-center ml-4 rounded-xl"
        min-width="140"
        height="200"
        cover
      >
      </v-img>
    </VCard>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    default: () => ({})
  },
  tags: {
    type: Array,
    default: () => []
  }
});

let tags = ref([]);
async function fetchData() {
  try {
    if (props.item.tags) {
      tags = Object.values(props.item.tags);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}
fetchData();
</script>
