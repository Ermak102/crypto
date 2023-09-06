<template>
  <div class="user_info">
    <div class="container">
      <div class="user_info_wrapper">
        <div class="avatar">
          <div class="avatar_wrapper">
            <div class="avatar_image">
              <img :src="userImage" alt="" />
            </div>
          </div>
          <button class="avatar_btn btn" @click.prevent="changeStateModalImage">
            Выбрать аватар
          </button>
        </div>
        <div class="user">
          <div class="user_name">Ваш логин: {{ userName }}</div>
          <div class="user_exit">
            <button class="exit_btn" @click.prevent="changeStateModalWindow">
              Выйти из аккаунта
            </button>
          </div>
        </div>
      </div>
      <choose-image
        :isOpen="isOpenModalImage"
        @hideForm="changeStateModalImage"
        @updateUserImage="changeUserImage"
      />
      <window-modal :isOpen="isExit" @hideForm="changeStateModalWindow" />
    </div>
  </div>
</template>

<script>
import { gettersTypes, mutationTypes } from "@/store/modules/user";
import { mapGetters, mapMutations, mapState } from "vuex";
import ChooseImage from "./ChooseImage.vue";
import WindowModal from "./WindowModal.vue";
export default {
  components: { ChooseImage, WindowModal },
  data() {
    return {
      isOpenModalImage: false,
      isExit: false,
      storageKey: "userImage",
    };
  },
  computed: {
    ...mapGetters({
      userImage: gettersTypes.getCurrentUserImage,
    }),
    ...mapState({
      userName: (state) => state.auth.currentUser,
    }),
  },
  methods: {
    ...mapMutations({
      setUserImage: mutationTypes.setUserImage,
    }),
    changeStateModalImage() {
      this.isOpenModalImage = !this.isOpenModalImage;
    },
    changeStateModalWindow() {
      this.isExit = !this.isExit;
    },
    changeUserImage(newImage) {
      this.setUserImage(newImage);
      this.changeStateModalImage();
    },
  },
  watch: {
    userImage(value) {
      localStorage.setItem(this.storageKey, value);
    },
  },
};
</script>

<style lang="scss" scoped>
.user_info {
  margin-top: 5rem;
}

.user_info_wrapper {
  display: flex;
  justify-content: space-around;
  align-content: center;
  position: relative;
}

.avatar {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.avatar_wrapper {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  width: 10rem;
  height: 10rem;
  overflow: hidden;
  border-radius: 50%;
  margin-bottom: 2rem;
}

.avatar_image {
  width: 100%;

  img {
    max-width: 100%;
  }
}

.user {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.user_name {
  font-size: 1.2rem;
  font-weight: 600;
}

.currencies_title {
  font-size: 1rem;
  font-weight: 600;
}

.currencies {
  margin-top: 1rem;
  padding-left: 1rem;
}

.exit_btn {
  background-color: rgb(250, 91, 91);
  border: none;
  padding: 0.6rem 0.8rem;
  font-size: 0.75rem;
  font-weight: 600;
  margin-top: 1rem;

  transition: 0.2s ease-in-out;
  &:hover {
    background-color: red;
  }
}
</style>
