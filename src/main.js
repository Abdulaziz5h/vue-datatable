import Vue from "vue";
import App from "./App.vue";
import VueCompositionAPI from "@vue/composition-api";

Vue.use(VueCompositionAPI);
require("./assets/global.scss");
Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount("#app");