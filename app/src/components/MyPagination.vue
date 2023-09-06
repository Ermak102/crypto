<template>
  <div class="pagination_form">
    <button @click="prevPage" class="btn" :disabled="isPrevPage">Prev</button>
    <div class="page">{{ page }}</div>
    <button @click="nextPage" class="btn" :disabled="isNextPage">Next</button>
  </div>
</template>

<script>
import { getWindowParams } from "@/helpers/windowLocation";

export default {
  props: {
    tickers: {
      type: Array,
      required: true,
    },
    itemsFromPage: {
      type: Number,
      required: true,
    },
    filter: {
      type: String,
      required: false,
    },
  },
  emits: {
    updateIndexes: {
      type: Array,
    },
  },
  data() {
    return {
      page: 1,
    };
  },
  created() {
    const windowData = getWindowParams();

    if (windowData.page) {
      this.page = parseInt(windowData.page);
    }
  },
  computed: {
    startIndex() {
      return (this.page - 1) * this.itemsFromPage;
    },
    endIndex() {
      return this.page * this.itemsFromPage;
    },
    pageStateOptions() {
      return {
        page: this.page,
        filter: this.filter,
      };
    },
    getSliceTickers() {
      return this.tickers?.slice(this.startIndex, this.endIndex);
    },
    isNextPage() {
      return this.tickers.length <= this.endIndex;
    },
    isPrevPage() {
      return this.page < 2;
    },
  },
  methods: {
    nextPage() {
      this.page += 1;
    },
    prevPage() {
      this.page -= 1;
    },
  },
  watch: {
    pageStateOptions(value) {
      history.pushState(
        null,
        document.title,
        `${window.location.pathname}?page=${value.page}&filter=${value.filter}`
      );
    },
    getSliceTickers(value) {
      this.$emit("updateIndexes", value);
    },
    filter() {
      this.page = 1;
    },
    tickers(value) {
      if (value.length < this.endIndex && this.page > 1) {
        this.page -= 1;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.pagination_form {
  margin-top: 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
