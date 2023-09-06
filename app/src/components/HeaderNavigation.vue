<template>
  <nav class="navigation">
    <div class="container">
      <div class="navigation_wrapper">
        <div class="navigation_logo">
          <router-link
            class="link"
            :to="{ name: 'home' }"
            active-class="active"
          >
            <img src="@/assets/logo.png" alt="logo"
          /></router-link>
        </div>
        <div class="navigation_links">
          <router-link class="link" :to="{ name: 'home' }" active-class="active"
            >Домашняя страница</router-link
          >
          <router-link class="link" :to="{ name: 'ar' }" active-class="active"
            >Интересное</router-link
          >
          <router-link
            v-if="isLoggedIn"
            class="link"
            :to="{ name: 'user' }"
            active-class="active"
          >
            <div class="user">
              <img :src="currentImage" alt="" />
            </div>
          </router-link>
          <router-link
            class="link"
            :to="{ name: 'login' }"
            active-class="active"
          >
            <div class="user login">
              <img src="@/assets/img/login.png" alt="" />
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<script>
import { gettersTypes, mutationTypes } from "@/store/modules/user";
import { mapGetters, mapMutations, mapState } from "vuex";

export default {
  computed: {
    ...mapGetters({
      currentImage: gettersTypes.getCurrentUserImage,
    }),
    ...mapState({
      isLoggedIn: (state) => state.auth.isLoggedIn,
    }),
  },
  methods: {
    ...mapMutations({
      setUserImage: mutationTypes.setUserImage,
    }),
  },
};
</script>

<style lang="scss" scoped>
$link_color: rgb(11, 206, 255);

.navigation {
  width: 100%;
  box-shadow: 0px 0px 5px 2px rgb(141, 141, 141);
}

.navigation_wrapper {
  padding: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navigation_logo {
  width: 32px;

  img {
    max-width: 100%;
    transition: 0.3s ease-in-out;

    &:hover {
      filter: hue-rotate(45deg);
    }
  }
}

.navigation_links {
  display: flex;
  justify-content: space-around;
  align-items: center;

  .link {
    font-size: 1.2rem;
    color: #000;
    text-decoration: none;

    transition: 0.3s ease-in-out;

    &:hover {
      color: $link_color;
    }

    &.active {
      color: $link_color;
    }
  }

  .link:not(:first-child) {
    padding-left: 2rem;
  }

  .login {
    img {
      transition: 0.3s ease-in-out;

      &:hover {
        filter: hue-rotate(60deg);
      }
    }
  }

  .active {
    .user {
      border: 1px solid rgb(0, 183, 255);
      border-radius: 50%;
      background-color: rgb(0, 183, 255);
    }
  }

  .user {
    width: 32px;
    height: 32px;
    transition: 0.8s ease-in-out;

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
}
</style>
