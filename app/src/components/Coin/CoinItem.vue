<template>
  <div class="coin">
    <div class="coin_wrapper">
      <div class="coin_name">{{ ticker.name }} - USD</div>
      <div class="coin_value">{{ ticker.price }}</div>
      <div class="button_wrapper" @click.prevent="deleteTicker(ticker)">
        <button class="coin_delete">
          <img src="@/assets/img/delete.png" alt="" />
          Удалить
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ticker: {
      type: Object,
      required: true,
    },
  },
  emits: {
    removeTicker: {
      type: String,
    },
  },
  setup(props, { emit }) {
    const deleteTicker = (ticker) => emit("removeTicker", ticker);

    return { deleteTicker };
  },
};
</script>

<style lang="scss" scoped>
.coin {
  margin: 1rem;
  text-align: center;
  width: 28%;

  &:hover {
    .coin_wrapper {
      box-shadow: 0px 3px 3px -1px black;
    }
  }
}

.coin_wrapper {
  padding-top: 1rem;
  box-shadow: 0px 1px 2px -1px black;

  transition: 0.3s ease-in-out;
}

.coin_name {
  font-size: 1.2rem;
  opacity: 0.8;
  text-transform: uppercase;
  margin-bottom: 2rem;
}

.coin_value {
  font-size: 1.8rem;
  font-weight: 700;
}

.button_wrapper {
  width: 100%;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: rgb(155, 155, 155);
    filter: invert(1);

    .coin_delete {
      font-weight: 600;
    }
  }
}

.coin_delete {
  display: flex;
  align-items: center;
  margin: 4rem auto 0 auto;
  line-height: 3rem;
  background-color: transparent;
  border: none;
  font-size: 1.1rem;
  transition: 0.3s ease-in-out;

  img {
    max-width: 22px;
    padding-right: 0.56rem;
  }
}
</style>
