import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Destinations/:country",
    name: "Destinations",
    component: () =>
      import(/* webpackChunkName: "Jamaica" */ '../views/Destinations.vue')

  }
];

const router = new VueRouter({
  routes
});

export default router;
