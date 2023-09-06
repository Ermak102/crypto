<template>
  <header-navigation />
</template>

<script>
import HeaderNavigation from "./components/HeaderNavigation.vue";
import { mapMutations } from "vuex";
import { mutationTypes } from "@/store/modules/user";

export default {
  components: { HeaderNavigation },
  created() {
    this.$store.dispatch("check");
    const userData = localStorage.getItem("userImage");

    if (userData) {
      this.setUserImage(userData);
    }
  },
  methods: {
    ...mapMutations({
      setUserImage: mutationTypes.setUserImage,
    }),
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

#app {
  position: relative;
}

.container {
  max-width: 1060px;
  margin: 0 auto;
  padding: 0 1rem;
}

.btn {
  background-color: transparent;
  border: 1px solid #000;
  font-size: 1rem;
  padding: 0.5rem 0.8rem;

  transition: 0.3s ease-in-out;

  &:hover:not([enabled="enabled"]) {
    background-color: black;
    color: #fff;
  }

  &:disabled {
    color: black;
    opacity: 0.5;
    &:hover {
      background-color: transparent;
    }
  }
}

.input {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  outline: none;
  border: none;
  border-left: 1px solid rgb(206, 205, 205);
  box-shadow: -7px 9px 0px -8px rgb(206, 205, 205);

  transition: 0.3s ease-in-out;

  &:focus {
    box-shadow: -7px 9px 0px -8px rgb(0, 0, 0);
    border-left: 1px solid rgb(0, 0, 0);
  }
}

.line {
  margin: 5rem 0rem;
}
</style>
