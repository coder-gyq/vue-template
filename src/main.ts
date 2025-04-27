import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import i18n from "./locale";
import router from "./router";
import { createPinia } from "pinia";
import "./main.css";

const app = createApp(App);

app.use(createPinia());

app.use(router);

app.use(i18n);

app.use(ElementPlus);

app.mount("#app");
