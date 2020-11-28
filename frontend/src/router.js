import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import Components from "./views/Components.vue";
import DriverComp from "./views/Driver.vue";
import Login from "../src/views/Login.vue"
import Register from "../src/views/Register.vue"
Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/register-user",
      name: "register",
      component: Register
    },
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
    },
    {
      path: "/driverpage",
      name: "driverpage",
      components: {
        header: AppHeader,
        default: DriverComp,
      }
    }],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
