import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main";
// import User from "../views/User";
// import home from "../views/home";
// import mall from "../views/mall";
// import pageOne from "../views/other/pageOne";
// import pageTwo from "../views/other/pageTwo";
import Login from "../views/Login/login";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
    redirect: '/home',
    children: [
      /* {
        path: "/home",
        name: "home",
        component: home
      },
      {
        path: "/user",
        name: "user",
        component: User,
      },
      {
        path: "/mall",
        name: "mall",
        component: mall,
      },
      {
        path: "/page1",
        name: "page1",
        component: pageOne,
      },
      {
        path: "/page2",
        name: "page2",
        component: pageTwo,
      }, */
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
