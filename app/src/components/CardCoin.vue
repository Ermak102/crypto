<template>
  <section class="coins">
    <h1 class="coins_title">Самые популярные криптовалюты!</h1>
    <div class="coins_wrapper">
      <div class="card">
        <div class="card_wrapper">
          <model-viewer
            alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum"
            src="http://localhost:5000/bit_coin.glb"
            ar
            shadow-intensity="1"
            camera-controls
            touch-action="pan-y"
          ></model-viewer>
          <div class="card_title">Биткоин</div>
          <div class="card_info">
            Основателем криптовалюты является кто-то, скрывающийся под
            псевдонимом Сатоши Накамото (Satoshi Nakamoto). Причем вероятнее
            всего это не один человек, а группа людей. Но до сих пор не удалось
            установить, кто конкретно создал Биткоин.
            <br />
            <br />
            День рождения Биткоина — 3 января 2009 года (будь Биткоин человеком,
            он бы был Козерогом по знаку зодиака 😁 ). Именно в этот день был
            сгенерирован первый блок и первые 50 BTC-монет. Вскоре провели
            первую транзакцию с участием битка: 12 января Сатоши Накамото
            отправил Хэлу Финни 10 BTC. А первый обмен Биткоинов на фиатные
            деньги состоялся в сентябре 2009.
          </div>
        </div>
      </div>
      <div class="other_coin">
        <div class="other_wrapper">
          <div class="card">
            <div class="card_wrapper box_none">
              <model-viewer
                alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum"
                src="http://localhost:5000/doge_coin.glb"
                ar
                shadow-intensity="1"
                camera-controls
                touch-action="pan-y"
              ></model-viewer>
              <div class="card_title">DOGE</div>
            </div>
          </div>
          <div class="card">
            <div class="card_wrapper box_none">
              <model-viewer
                alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum"
                src="http://localhost:5000/gods_coin_cryptocurrency.glb"
                ar
                shadow-intensity="1"
                camera-controls
                touch-action="pan-y"
              ></model-viewer>
              <div class="card_title">GODS</div>
            </div>
          </div>
        </div>
        <div class="with_subtitle">
          <div class="other_wrapper">
            <div class="card">
              <div class="card_wrapper box_none">
                <model-viewer
                  alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum"
                  src="http://localhost:5000/ethereum.glb"
                  ar
                  shadow-intensity="1"
                  camera-controls
                  touch-action="pan-y"
                ></model-viewer>
              </div>
            </div>
            <div class="card">
              <div class="card_wrapper box_none">
                <model-viewer
                  alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum"
                  src="http://localhost:5000/ethereum_coin.glb"
                  ar
                  shadow-intensity="1"
                  camera-controls
                  touch-action="pan-y"
                ></model-viewer>
              </div>
            </div>
          </div>
          <div class="total_title card_title">Ethereum</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.coins {
  margin-top: 5rem;
}

.other_wrapper {
  display: flex;
  box-shadow: 0px 0px 5px 2px rgb(207, 207, 207);
  max-width: 578px;
  border-radius: 1rem;
}

.coins_wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.other_coin {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 65%;

  .card {
    width: 45%;
  }
}

.coins_title {
  text-align: center;
  margin-bottom: 10rem;
}

.card {
  width: 30%;
}

.coins {
  .double_card {
    width: 100%;
    margin-top: 1rem;
  }

  .card_wrapper {
    margin: 0;
  }
}

.with_subtitle {
  box-shadow: 0px 0px 5px 2px rgb(207, 207, 207);
  border-radius: 1rem;
  margin-top: 3.5rem;

  .other_wrapper {
    box-shadow: none;
  }
}

.card_wrapper {
  box-shadow: 0px 0px 5px 2px rgb(207, 207, 207);
  border-radius: 1rem;
  padding: 1rem;

  &:first-child {
    width: 300px;
    max-height: 100%;
    text-align: center;
  }
}

.box_none {
  box-shadow: none;
}

.double_valuts_wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.double_card_wrapper {
  box-shadow: 0px 0px 5px 2px rgb(207, 207, 207);
  border-radius: 1rem;
  padding: 1rem;
}

.viewers_wrapper {
  display: flex;
  flex-direction: column;
}

.card_title {
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  margin: 2rem 0rem;
}

.card_info {
  .space {
    margin: 1rem 0rem;
  }
}
</style>
