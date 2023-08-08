import Vue, { createApp } from "vue";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.min.css";

// 생성한 뷰 라우터 받아오기
import router from "./router/index.js";

// axios 추가
import axios from "axios";

const app = createApp(App);

// axios 통신
app.config.globalProperties.$axios = axios;

// 라우터 사용
app.use(router);

// mount
app.mount("#app");
