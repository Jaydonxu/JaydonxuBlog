// main.ts
import { createApp } from "vue";
import "./style.css";

import { router } from "./router/index";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./assets/style/globel.css";
import "./assets/style/common.css";
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import App from "./App.vue";

const app = createApp(App);

app.use(mavonEditor);
app.use(ElementPlus);
app.use(router);
app.mount("#app");
