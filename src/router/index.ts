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
    path: "/todos",
    name: "TodoList",
    component: TodoList
  },
  {
    path: "/todos/new",
    name: "NewTodo",
    component: () => import("../views/EditTodo.vue")
  },
  {
    path: "/todos/:id",
    name: "EditTodo",
    component: () => import("../views/EditTodo.vue")
  },
  { path: "*", redirect: "/todos" }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
