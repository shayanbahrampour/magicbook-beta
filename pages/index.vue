<template>
  <SplashScreen />
</template>

<script setup>
import SplashScreen from '~/components/starter/SplashScreen';
const email = ref('');
const password = ref('');
definePageMeta({
  layout: "empty",
});
const { ruleEmail, rulePassLen, ruleRequired } = useFormRules();
</script>
