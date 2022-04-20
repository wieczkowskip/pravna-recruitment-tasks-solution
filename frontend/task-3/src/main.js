import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import TheButton from "./components/ui/TheButton.vue";
import CharacterItem from "./components/CharacterItem.vue";
const app = createApp(App);
app.use(store);
app.use(router);

app.component("TheButton", TheButton);
app.component("CharacterItem", CharacterItem);
app.mount("#app");
