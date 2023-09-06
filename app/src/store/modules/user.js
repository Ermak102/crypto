const state = {
  currentImage: "http://localhost:5000/admin_user_man.png",
};

export const mutationTypes = {
  setUserImage: "[user] setUserImage",
};

const mutations = {
  [mutationTypes.setUserImage]: (state, image) => {
    state.currentImage = image;
  },
};

export const gettersTypes = {
  getCurrentUserImage: "[user] getCurrentUserImage",
};

const getters = {
  [gettersTypes.getCurrentUserImage]: (state) => {
    return state.currentImage;
  },
};

export default {
  state,
  mutations,
  getters,
};
