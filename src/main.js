import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { firebaseApp } from "./firebase.js";
import { VueFire } from "vuefire";

createApp(App).mount("#app");

const app = createApp(App);
app.use(VueFire, {
  // imported above but could also just be created here
  firebaseApp,
  modules: [],
});
