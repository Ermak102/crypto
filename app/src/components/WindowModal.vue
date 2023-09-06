<template>
  <div class="modal" v-if="isOpen" @click="hideForm">
    <div class="modal_wrapper" @click.stop>
      <div class="question">Ваше решение окончательно?</div>
      <div class="question_form">
        <button class="question_btn btn" @click="logout">Да</button>
        <button class="question_btn btn" @click="hideForm">Нет</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  emits: {
    hideForm: {},
  },
  methods: {
    hideForm() {
      this.$emit("hideForm");
    },
    logout() {
      localStorage.clear();
      this.$store.dispatch("check");
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0%;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: rgba(255, 255, 255, 0.5);
  z-index: 5;
}

.modal_wrapper {
  width: 30%;
  padding: 2rem;
  margin: 5rem auto;

  background-color: white;
  box-shadow: 0px 0px 5px 2px rgb(224, 224, 224);
}

.question_form {
  display: flex;
  align-items: center;
}

.question_btn {
  padding: 0.3rem 0.5rem;
  margin-top: 2rem;

  &:first-child {
    margin-right: 1rem;
  }
}
</style>
