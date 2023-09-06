<template>
  <div class="coins">
    <div class="filter_form">
      <input
        class="input filter_input"
        placeholder="Поиск..."
        v-model="filter"
      />
    </div>
    <div class="coin_list">
      <coin-item
        v-for="ticker in sliceTickers"
        :key="ticker"
        :ticker="ticker"
        @removeTicker="$emit('removeTicker', ticker.name)"
        @click="onSelectedTicker(ticker)"
      />
    </div>

    <my-pagination
      :filter="filter"
      :itemsFromPage="coinFromPage"
      :tickers="filteredTickers"
      @updateIndexes="getSliceTickers"
    />
  </div>
</template>

<script>
import CoinItem from "./CoinItem.vue";
import MyPagination from "@/components/MyPagination.vue";
import { getWindowParams } from "@/helpers/windowLocation";

export default {
  components: { CoinItem, MyPagination },
  props: {
    tickers: {
      type: Array,
      required: true,
    },
  },
  emits: {
    onSelectedTicker: {
      type: String,
    },
  },
  data() {
    return {
      filter: "",
      coinFromPage: 3,
      sliceTickers: [],
      selectedTicker: "",
    };
  },
  created() {
    const windowData = getWindowParams();

    if (windowData.filter) {
      this.filter = windowData.filter;
    }

    this.sliceTickers = this.filteredTickers.slice(0, this.coinFromPage);
  },
  methods: {
    getSliceTickers(value) {
      this.sliceTickers = value;
    },
    onSelectedTicker(ticker) {
      this.$emit("onSelectedTicker", ticker.name);
    },
  },
  computed: {
    filteredTickers() {
      return this.tickers.filter((ticker) => {
        return ticker.name?.toLowerCase().includes(this.filter?.toLowerCase());
      });
    },
  },
  watch: {
    tickers() {
      this.filter = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.coin_list {
  margin-top: 3rem;

  display: flex;
  flex-wrap: wrap;
}

.filter_form {
  margin-top: 3rem;
  display: flex;
  justify-content: flex-end;
}

.filter_input {
  border: none;

  &:focus {
    box-shadow: -7px 9px 0px -8px rgb(2, 175, 255);
  }
}
</style>
