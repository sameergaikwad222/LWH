import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import dashboard from "../views/dashboard.vue";
import frontend from "../views/frontend.vue";
import backend from "../views/backend.vue";
import devOps from "../views/devOps.vue";
import dataScience from "../views/dataScience.vue";
import videos from "../views/videos.vue";
import courseVideos from "../views/courseVideos.vue";
import webDevelopment from "../views/webDevelopment.vue";
import machineLearning from "../views/machineLearning.vue";
import programming from "../views/programming.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: dashboard
  },
  {
    path: "/webDevelopment",
    name: "webDevelopment",
    component: webDevelopment
  },
  {
    path: "/machineLearning",
    name: "machineLearning",
    component: machineLearning
  },
  {
    path: "/programming",
    name: "programming",
    component: programming
  },
  {
    path: "/videos",
    name: "videos",
    component: videos
  },
  {
    path: "/videos/:course",
    name: "courseVideos",
    component: courseVideos
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
  },
  {
    path: "/machineLearning/dataScience",
    name: "dataScience",
    component: dataScience
  }
];

const router = new VueRouter({
  routes
});

export default router;
