import Vue from "vue"
import Router from "vue-router"

import Home from "@/views/Home"
import Error from "@/views/Error"
import Lista from "@/views/Lista"

Vue.use(Router)

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },

    {
      path: "/Lista",
      name: "lista",
      component: Lista
    },

    {
      path: "*",
      name: "error",
      component: Error
    },
  ]
})