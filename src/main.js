import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import VueFlags from "@growthbunker/vueflags";
import Konami from "./konami";

Vue.use(VueFlags, { iconPath: "img/flags" });
Vue.config.productionTip = false;

Vue.use(Konami, {
  callback: () => {
    let head = document.head || document.getElementsByTagName("head")[0];
    let style = document.createElement("style");
    style.type = "text/css";
    style.appendChild(
      document.createTextNode(`body {
  cursor: url(data:image/svg+xml;utf8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIxOCIgc3R5bGU9ImZvbnQtc2l6ZToxNHB4Ij48dGV4dCB5PSIxNiI+8J+mhDwvdGV4dD48L3N2Zz4=),
    auto;
}`)
    );
    head.appendChild(style);
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
