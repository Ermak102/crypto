<template>
  <section class="reg">
    <div class="reg_wrapper">
      <form class="reg_form">
        <h3 class="reg_title">Регистрация</h3>
        <input
          type="email"
          placeholder="Email"
          class="reg_input"
          v-model="email"
          :class="{
            valid: correctEmail && email.length > 0,
            invalid: email.length > 0 && !correctEmail,
          }"
        />
        <validation-error v-if="isSubmitting" :error="errors" />
        <validation-error
          v-if="email.length > 0 && !correctEmail"
          :error="'Email не корректный, добавьте @'"
        />
        <input
          type="password"
          placeholder="Password"
          class="reg_input"
          v-model="password"
        />
        <validation-error
          v-if="password.length < 5 && password.length > 0"
          :error="'Пароль должен содержать > 5 символов'"
        />
        <input
          type="password"
          placeholder="Repeat password"
          class="reg_input"
          v-model="repeatPassword"
          :class="{
            valid: passwordsIdentity && password.length > 0,
            invalid: password.length > 0 && !passwordsIdentity,
          }"
        />
        <validation-error
          v-if="password.length > 0 && !passwordsIdentity"
          :error="'Пароли не совпадают'"
        />
        <button
          class="reg_button"
          :disabled="!isCorrectForm"
          @click.prevent="registration"
        >
          Зарегистрироваться
        </button>
      </form>
      <div class="reg_info">
        <div class="reg_info_wrapper">
          <div class="reg_info_title">Приветствуем Вас!</div>
          <div class="reg_info_content">
            Присоединяйся и получи возможность отслеживать курс своей
            криптовалюты
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ValidationError from "../components/ValidationError.vue";
import { mapState } from "vuex";

export default {
  components: { ValidationError },
  data() {
    return {
      email: "",
      password: "",
      repeatPassword: "",
      isSubmitting: false,
    };
  },
  methods: {
    registration() {
      this.$store
        .dispatch("registration", {
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.$router.push({ name: "home" });
        });

      this.isSubmitting = true;
    },
  },
  computed: {
    ...mapState({
      errors: (state) => state.auth.errors,
    }),
    passwordsIdentity() {
      return this.password === this.repeatPassword;
    },
    correctEmail() {
      return (
        this.email.split("").filter((char) => {
          if (char === "@") return true;
        }).length > 0
      );
    },
    isCorrectForm() {
      return (
        this.email.length > 2 &&
        this.password.length >= 5 &&
        this.correctEmail &&
        this.passwordsIdentity
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.reg {
  height: 100vh;
  background-color: #080710;
}

.reg_wrapper {
  width: 800px;
  height: max-content;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  display: flex;
  background: linear-gradient(to right, rgba(255, 255, 255, 0.13) 48%, #64befa);
  border-radius: 10px;
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
}

.reg_form {
  display: flex;
  flex-direction: column;
  width: 48%;
  padding: 1rem 2rem;
}

.reg_title {
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
  color: #fff;
  margin-bottom: 1.2rem;
}

.reg_input {
  box-sizing: border-box;
  outline: none;
  border: none;
  padding: 1rem 1rem;

  width: 100%;
  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 3px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 300;

  color: #fff;

  transition: 0.3s ease-in-out;

  &::placeholder {
    color: #fff;
  }

  &.valid {
    border: 1px solid rgb(75, 250, 75);

    &:hover,
    &:focus {
      box-shadow: 0px 0px 0px 1.4px rgb(0, 255, 115);
    }
  }

  &.invalid {
    border: 1px solid rgb(250, 87, 75);

    &:hover,
    &:focus {
      box-shadow: 0px 0px 0px 1.4px rgb(255, 0, 0);
    }
  }

  &:hover,
  &:focus {
    box-shadow: 0px 0px 0px 1.4px #fff;
  }
}

.reg_button {
  margin-top: 50px;
  width: 80%;
  outline: none;
  border: none;
  color: #080710;
  padding: 15px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  margin: 50px auto;
  display: block;
  box-shadow: 0 0 40px 40px #3498db inset, 0 0 0 0 #3498db;
  background-color: transparent;
  transition: 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;
    color: #fff;
  }

  &:disabled {
    opacity: 0.5;

    &:hover {
      color: #000;
      box-shadow: 0 0 40px 40px #3498db inset, 0 0 0 0 #3498db;
    }
  }
}

.reg_info {
  width: 48%;
  margin-left: 1rem;
  min-height: 100%;
  background-color: #46aff5;
  border-radius: 0px 10px 10px 0px;
  padding: 0 2rem;
  margin-top: 0.04rem;
}

.reg_info_wrapper {
  padding: 0rem 1rem;
  height: 100%;
  color: #373737;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-self: center;
  text-align: center;
}

.reg_info_title {
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  color: #fff;
  margin-bottom: 1rem;
}

.reg_info_content {
  font-size: 1.1rem;
}
</style>
