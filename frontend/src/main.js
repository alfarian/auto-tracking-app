/*!

=========================================================
* Vue Argon Design System - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md)

* Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import "bootstrap/dist/css/bootstrap.min.css";

// import PaperDashboard from "./plugins/paperDashboard";

import { BootstrapVue } from "bootstrap-vue";
Vue.use(BootstrapVue);
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";
import "./registerServiceWorker";
import store from "./store/index";
import firebase from "firebase";

Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyAEhiE2G632tZgdN45Np3oK7MAIAx_5bJ4",
  authDomain: "auto-tracking-app.firebaseapp.com",
  databaseURL: "https://auto-tracking-app.firebaseio.com",
  projectId: "auto-tracking-app",
  storageBucket: "auto-tracking-app.appspot.com",
  messagingSenderId: "1032951300875",
  appId: "1:1032951300875:web:b5c8c25600d2effed9d80e",
  measurementId: "G-5GX9DK05SF",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.use(Argon);
new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
