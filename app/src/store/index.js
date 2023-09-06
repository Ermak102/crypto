import { createStore } from "vuex";
import user from "@/store/modules/user";
import auth from "@/store/modules/auth";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { user, auth },
});
