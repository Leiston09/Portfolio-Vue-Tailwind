import { createApp } from "vue";
//import { createPinia } from "pinia";
import "./assets/CSS/main.css";

import App from "./App.vue";
import i18n from "./locale/i18n";
import router from "./router";

const app = createApp(App);
app.use(i18n);
//app.use(createPinia());
app.use(router);

app.mount("#app");
