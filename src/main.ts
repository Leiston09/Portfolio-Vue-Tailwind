import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import i18n from "./locale/i18n";

import "./assets/CSS/main.css";

import App from "./App.vue";

const app = createApp(App);
app.use(i18n);
app.use(createPinia());
app.use(router);

app.mount("#app");
