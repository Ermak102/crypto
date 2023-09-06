<template>
  <section class="home">
    <div class="banner">
      <div class="container">
        <div class="banner_wrapper">
          <div class="banner_info">
            <div class="banner_title">Инвестиции будущего</div>
            <div class="banner_subtitle">
              В ноябре 2021 года общая капитализация крипторынка превысила 3
              трлн $. Десять токенов показали более чем стократную доходность.
            </div>
            <button class="banner_btn" @click="joinToPage">
              Присоединиться
            </button>
          </div>
        </div>
      </div>
      <section class="mini_banner">
        <div class="mini_banner_wrapper">
          <div class="mini_banner_title">Начните путь инвестора с нами</div>
          <div class="mini_banner_info">
            <div class="mini_banner_subtitle">
              Отслеживайте текущий курс Ваших валют
            </div>
            <button class="banner_btn" @click="joinToPage">Отслеживать</button>
          </div>
        </div>
      </section>
    </div>
    <section class="coin section_bg">
      <div class="container">
        <div class="coin_title title">Что такое КРИПТОВАЛЮТА?</div>
        <div class="content">
          <div class="image_wrapper">
            <img src="@/assets/img/home/image1_03.jpg" alt="" />
          </div>
          <div class="coin_info">
            <div class="coin_info_main text_main">
              Криптовалюта-это набор двоичных данных, который предназначен для
              обмена, в котором отдельные записи о владении монетами хранятся в
              базе данных, которая использует сильную криптографию для защиты
              записей транзакций, контроля создания дополнительных монет и
              проверки передачи права собственности на монеты.
            </div>
            <div class="coin_info_submain">
              Криптовалюта создается помощью математических вычислений и
              представляет собой сгенерированный компьютером код. Выпускается
              блоками, связанными между собой последовательным хешированием.
              Такой процесс называется майнингом, а те, кто этим занимается –
              майнерами. Таким образом эта валюта выпускается и хранится
              децентрализовано.
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="income section_bg">
      <div class="container">
        <div class="income_title title">В чем перспективы?</div>
        <div class="income_wrapper">
          <div class="income_content">
            <div class="income_main_text text_main">
              Наличные деньги теряют свою востребованность, а цифровые,
              наоборот, получают все большее распространение. От этого
              выигрывают криптовалюты, которые в последние годы приносит
              значительно больше прибыли, чем традиционные активы.
            </div>
            <ul class="income_list">
              <li class="income_item">Анонимность</li>
              <li class="income_item">Децентрализация</li>
              <li class="income_item">
                Отсутствие государственного регулирования
              </li>
              <li class="income_item">
                Отсутствие единого выпускающего центра
              </li>
              <li class="income_item">
                Система одноранговая, то есть все участники имеют равные права
              </li>
            </ul>
          </div>
          <div class="income_graph">
            <img src="@/assets/img/home/graph_07.png" alt="" />
          </div>
        </div>
      </div>
    </section>
    <section class="graph section_bg">
      <div class="container">
        <div class="graph_title title">
          Следите за большим набором данных на графике
        </div>
        <div class="content">
          <div class="image_wrapper">
            <img src="@/assets/img/home/graph_11.jpg" alt="" />
          </div>
          <div class="graph_info">
            <div class="text_main">
              Теханализ – ключевой инструмент в арсенале криптотрейдеров.
              Используя анализ графиков криптовалюты, мы можем проследить тренд,
              предположить, куда пойдет цена: вверх или вниз. И, самое главное,
              – найти точки входа в самые выгодные сделки
            </div>
            <div class="coin_info_submain">
              Вы сможете проводить анализ рынка и наблюдать за торгами с нами
            </div>
          </div>
        </div>
      </div>
    </section>
    <app-footer />
  </section>
</template>

<script>
import AppFooter from "../components/AppFooter.vue";
import { mapState } from "vuex";

export default {
  components: { AppFooter },
  computed: {
    ...mapState({
      isLoggedIn: (state) => state.auth.isLoggedIn,
    }),
  },
  methods: {
    joinToPage() {
      if (this.isLoggedIn) {
        this.$router.push({ name: "user" });
        return;
      }

      this.$router.push({ name: "login" });
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
}

.section_bg {
  background-color: #1e124f;
}

.content {
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.image_wrapper {
  width: 40%;

  img {
    max-width: 100%;
    height: auto;
  }
}

.title {
  font-size: 3rem;
  padding-bottom: 2rem;
  text-align: center;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 3px;
    width: 8%;
    margin: 0 auto;
    background: linear-gradient(
      to right,
      rgb(44, 241, 209),
      rgba(0, 174, 255, 0.308)
    );
  }
}

.text_main {
  font-weight: 500;
  line-height: 2rem;
  font-size: 1.25rem;
  letter-spacing: 2px;
}

.banner {
  position: relative;
  background-image: url("../assets/img/home/top-bg_01.jpg");
  background-position-x: center;
  background-position-y: inherit;
  height: 50rem;
  width: 100%;
  color: #fff;

  .container {
    height: 100%;
  }

  .banner_wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    height: 100%;
  }

  .banner_info {
    max-width: 50%;
  }

  .banner_title {
    font-size: inherit;
    font-weight: 600;
    font-size: 3rem;
    line-height: 4rem;
    position: relative;
    padding-bottom: 2rem;

    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      height: 3px;
      width: 12%;
      background: linear-gradient(
        to right,
        rgb(44, 241, 209),
        rgba(0, 174, 255, 0.308)
      );
    }
  }

  .banner_subtitle {
    font-size: 1.25rem;
    margin: 3rem 0rem;
  }

  .banner_btn {
    display: inline-block;
    vertical-align: top;
    max-width: 100%;
    padding: 1rem 3rem;
    background-image: linear-gradient(
      to right,
      #603cab 0,
      #f15a91 51%,
      #603cab 100%
    );
    text-transform: uppercase;
    background-color: transparent;
    background-size: 200%;
    border: none;
    background-repeat: none;
    border-radius: 1rem;
    box-shadow: 0px 8px 20px 0px rgb(96 60 171 / 50%);
    transition: 0.4s ease-in-out;
    color: #fff;
    font-weight: 600;

    &:hover {
      background-position: right center;
    }
  }
}

.mini_banner {
  position: absolute;
  bottom: -5%;
  left: 0;
  right: 0;
  width: 100%;

  .mini_banner_wrapper {
    max-width: 60%;
    margin: 0 auto;
    padding: 1.5rem 2.5rem;
    background: linear-gradient(135deg, #020381 0%, #2874fc 100%);
    box-shadow: 0px 10px 20px 0px rgb(0 0 0 / 25%);
  }

  .mini_banner_title {
    color: #00ffe9;
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .mini_banner_info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .mini_banner_subtitle {
    font-size: 1.2rem;
  }
}

.coin {
  padding-top: 10rem;
  color: #fff;

  .coin_content {
    margin-top: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .coin_image_wrapper {
    width: 40%;

    img {
      max-width: 100%;
      height: auto;
    }
  }

  .coin_info {
    width: 50%;
  }

  .coin_info_main {
    margin-bottom: 2rem;
  }

  .coin_info_submain {
    font-weight: 400;
    line-height: 1.4rem;
    letter-spacing: 1px;
  }
}

.income {
  padding-top: 8rem;
  color: #fff;

  .income_wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 4rem;
  }

  .income_content {
    width: 45%;
  }

  .income_graph {
    width: 45%;
  }

  .income_list {
    margin-top: 2rem;
    padding-left: 1rem;
    list-style: none;
    display: flex;
    flex-direction: column;
  }

  .income_item {
    position: relative;
    margin-bottom: 2rem;
    padding-left: 2rem;

    &:before {
      content: "";
      position: absolute;
      left: 0px;
      top: 3px;
      display: inline-block;
      width: 5px;
      height: 10px;
      border: solid rgb(0, 255, 179);
      border-width: 0 5px 5px 0;
      transform: rotate(45deg);
    }
  }
}

.graph {
  padding-top: 10rem;
  padding-bottom: 5rem;
  color: #fff;

  .graph_info {
    width: 50%;
  }

  .text_main {
    margin-bottom: 2rem;
  }
}
</style>
