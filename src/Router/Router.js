
import {createRouter, createWebHistory} from "vue-router";
import NavBar from "../components/Navigation/NavBar.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
    {
      path: "/",
      name:"navbar",
      component: NavBar
    }
  ]
})


export default router



