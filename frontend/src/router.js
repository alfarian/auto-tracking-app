import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import Components from "./views/Components.vue";
import Login from "../src/views/Login.vue"

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/",
      redirect: "/login",
    },
    {
      path: "/components",
      name: "components",
      components: {
        header: AppHeader,
        default: Components,
      }
    } ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
