import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home";
import AddPost from "../components/Posts/AddPost";
import Posts from "../components/Posts/Posts";
import Profile from "../components/Auth/Profile";
import Signin from "../components/Auth/Signin";
import Signup from "../components/Auth/Signup";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/posts",
    name: "Posts",
    component: Posts
  },
  {
    path: "/posts/add",
    name: "AddPost",
    component: AddPost
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
