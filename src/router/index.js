import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import frontend from "../views/frontend.vue";
import backend from "../views/backend.vue";
import devOps from "../views/devOps.vue";
import videos from "../views/videos.vue";
import webDevelopment from "../views/webDevelopment.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/webDevelopment",
    name: "webDevelopment",
    component: webDevelopment
  },
  {
    path: "/videos",
    name: "videos",
    component: videos
  },
  {
    path: "/webDevelopment/frontend",
    name: "frontend",
    component: frontend
  },
  {
    path: "/webDevelopment/backend",
    name: "backend",
    component: backend
  },
  {
    path: "/webDevelopment/devOps",
    name: "devOps",
    component: devOps
  }
];

const router = new VueRouter({
  routes
});

export default router;
