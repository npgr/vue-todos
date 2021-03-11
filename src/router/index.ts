import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/Home.vue";
import TodoList from "@/views/TodoList.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/help",
    name: "Home",
    component: Home
  },
  {
    path: "/",
    name: "TodoList",
    component: TodoList
  },
  {
    path: "/about",
    name: "About",
    //component: About
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
