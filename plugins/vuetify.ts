import { createVuetify } from "vuetify";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    theme: {
      defaultTheme: LIGHT_THEME,
      themes: {
        light,
        dark,
      },
    },
  });

  app.vueApp.use(vuetify);
});
