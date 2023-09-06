import authApi from "@/api/auth/authApi";

const state = {
  isLoggedIn: false,
  errors: null,
  currentUser: "",
};

const getters = {
  getEmail(state) {
    return state.email;
  },
  getError(state) {
    return state.errors;
  },
  getIsLogged(state) {
    return state.isLoggedIn;
  },
};

const mutations = {
  start(state) {
    state.currentUser = "";
    state.errors = "";
    state.isLoggedIn = false;
  },

  success(state, data) {
    state.currentUser = data;
    state.errors = "";
    state.isLoggedIn = true;
  },

  failed(state, data) {
    state.errors = data;
  },
};

const actions = {
  registration(context, data) {
    return new Promise((resolve) => {
      context.commit("start");
      authApi
        .registration(data.email, data.password)
        .then((response) => {
          context.commit("success", response.email);
          resolve(response);
        })
        .catch((error) => {
          context.commit("failed", error.response.data.message);
        });
    });
  },

  login(context, data) {
    return new Promise((resolve) => {
      context.commit("start");
      authApi
        .login(data.email, data.password)
        .then((response) => {
          context.commit("success", response.email);
          resolve(response);
        })
        .catch((error) => {
          context.commit("failed", error.response.data.message);
        });
    });
  },

  check(context) {
    return new Promise((resolve) => {
      context.commit("start");
      authApi
        .checkAuthorization()
        .then((response) => {
          context.commit("success", response.email);
          resolve(response);
        })
        .catch((error) => {
          context.commit("failed", error.response.data.message);
        });
    });
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
