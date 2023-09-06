<template>
  <div class="modal" v-if="isOpen" @click="hideForm">
    <div class="modal_wrapper" @click.stop>
      <div class="icons_list">
        <div
          class="icon_wrapper"
          v-for="image in images"
          :key="image"
          @click="onSelected(image)"
        >
          <img v-bind:src="image" alt="" />
        </div>
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
    updateUserImage: {
      type: String,
    },
  },
  data() {
    return {
      images: {
        1: "http://localhost:5000/1.png",
        2: "http://localhost:5000/2.png",
        3: "http://localhost:5000/3.png",
        4: "http://localhost:5000/4.png",
        5: "http://localhost:5000/5.png",
        6: "http://localhost:5000/6.png",
      },
      selectedImage: "",
    };
  },
  methods: {
    hideForm() {
      this.$emit("hideForm");
    },
    onSelected(image) {
      this.selectedImage = image;
      this.$emit("updateUserImage", image);
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
  width: 50%;
  padding: 2rem;
  margin: 10rem auto;

  background-color: white;
  box-shadow: 0px 0px 5px 2px rgb(224, 224, 224);
}

.icons_list {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}

.icon_wrapper {
  width: 28%;
  padding: 1rem;
  text-align: center;

  transition: 0.2s ease-in-out;

  &:hover {
    background-color: rgb(240, 239, 239);
  }

  img {
    max-width: 60%;
  }
}
</style>
