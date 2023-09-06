<template>
  <section class="graph">
    <div v-if="!isError">
      <Line :data="getGraphDate" />
    </div>
    <div v-if="isError" class="error">Данных по данной валюте нет.</div>
  </section>
</template>

<script>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "vue-chartjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default {
  components: {
    Line,
  },
  props: {
    currentTicker: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      coinData: {
        labels: [],
        prices: [],
      },
      isError: false,
    };
  },
  computed: {
    getGraphDate() {
      return {
        labels: this.coinData.labels,
        datasets: [
          {
            label: this.currentTicker,
            backgroundColor: this.getRandomColor(),
            data: this.coinData.prices,
          },
        ],
      };
    },
  },
  created() {
    this.fetchHistoryDataTicker();
  },
  methods: {
    async fetchHistoryDataTicker() {
      try {
        const fetchData = await fetch(
          `https://min-api.cryptocompare.com/data/v2/histominute?fsym=${this.currentTicker}&tsym=USD&limit=20`
        ).then((data) => data.json());

        const data = fetchData.Data.Data;

        this.coinData.labels = data.map((item) =>
          this.convertUnixToTime(item.time)
        );

        this.coinData.prices = data.map((item) => item.close);

        this.isError = false;
      } catch (e) {
        this.isError = true;
      }
    },
    convertUnixToTime(unix) {
      const date = new Date(unix * 1000);

      const hours = date.getHours();
      const minutes = date.getMinutes();

      return hours + ":" + minutes;
    },
    getRandomColor() {
      var letters = "0123456789ABCDEF";
      var color = "#";
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    },
  },
  watch: {
    currentTicker() {
      this.fetchHistoryDataTicker();
    },
  },
};
</script>

<style lang="scss" scoped>
.graph {
  margin: 5rem 0rem;
}

.error {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
}
</style>
