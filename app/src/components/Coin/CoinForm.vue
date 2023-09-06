<template>
  <section class="coin_form">
    <div class="container">
      <div class="add_form">
        <input
          class="input coin_input"
          placeholder="ТИКЕР"
          v-model="ticker"
          @keydown.enter="addTicker"
        />
        <button class="btn coin_add" @click.prevent="addTicker">
          Добавить
        </button>
      </div>
      <div class="errors">
        {{ errors }}
      </div>

      <coin-list
        v-if="tickers.length > 0"
        :tickers="tickers"
        @removeTicker="deleteTicker"
        @onSelectedTicker="setSelectedTicker"
      />
      <div class="not_found" v-else>Пока нет добавленных тикеров</div>

      <coin-graph :currentTicker="selectedTicker" v-if="isSelectedTicker" />
    </div>
  </section>
</template>

<script>
import CoinList from "./CoinList.vue";
import { getCoin } from "@/api/coin";
import CoinGraph from "../Graph/CoinGraph.vue";

export default {
  components: { CoinList, CoinGraph },
  data() {
    return {
      tickers: [],
      ticker: "",
      storageKey: "tickersList",
      errors: "",
      selectedTicker: "",
      isSelectedTicker: false,
    };
  },
  created() {
    const tickersData = localStorage.getItem(this.storageKey);

    if (tickersData) {
      this.tickers = JSON.parse(tickersData);
    }

    setInterval(this.loadTicker, 1000);
  },
  methods: {
    setSelectedTicker(ticker) {
      this.selectedTicker = ticker;
      this.isSelectedTicker = true;
    },
    addTicker() {
      if (this.ticker === "") {
        return;
      }

      const currentTicker = {
        name: this.ticker.toUpperCase(),
        price: "-",
      };

      if (this.isDuplicateTicker(currentTicker.name)) {
        this.errors = "Такой тикер уже есть!";
        return;
      }

      this.tickers = [...this.tickers, currentTicker];
      this.loadTicker();
      this.ticker = "";
      this.errors = "";
    },
    deleteTicker(ticker) {
      this.tickers = this.tickers.filter((value) => {
        if (value.name !== ticker) {
          return value;
        }
      });

      this.selectedTicker = "";
    },
    async loadTicker() {
      if (this.tickers.length <= 0) {
        return;
      }

      const tickerData = await getCoin(
        this.tickers.map((ticker) => ticker.name)
      );

      this.tickers.map((item) => {
        const price = tickerData[item.name];
        item.price = price ?? "-";
      });
    },
    isDuplicateTicker(tickerName) {
      const checkRepeat = this.tickers.filter((ticker) => {
        console.log(ticker.name);
        if (ticker.name === tickerName) return true;
      });

      return checkRepeat.length > 0;
    },
  },
  watch: {
    tickers() {
      localStorage.setItem(this.storageKey, JSON.stringify(this.tickers));
    },
  },
};
</script>

<style lang="scss" scoped>
.coin_form {
  padding-bottom: 5rem;
}

.add_form {
  display: flex;
  align-items: center;
}

.coin_input {
  text-transform: uppercase;
}

.not_found {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-top: 8rem;
}

.errors {
  margin-top: 0.65rem;
  padding-left: 1rem;
  color: red;
  font-weight: bold;
  font-size: 0.8rem;
}
</style>
