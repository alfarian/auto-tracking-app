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
import firebase from 'firebase';

Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyDjCBMXC1uYcop8Lu1Kskq2SZl2iLV_Gqs",
  authDomain: "auto-tracking-system-d78b2.firebaseapp.com",
  databaseURL: "https://auto-tracking-system-d78b2.firebaseio.com",
  projectId: "auto-tracking-system-d78b2",
  storageBucket: "auto-tracking-system-d78b2.appspot.com",
  messagingSenderId: "798310569803",
  appId: "1:798310569803:web:4d18561762ede28ac53ace",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.use(Argon);
new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
