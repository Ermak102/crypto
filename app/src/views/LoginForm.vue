<template>
  <div class="login">
    <div class="background">
      <div class="shape"></div>
      <div class="shape"></div>
    </div>
    <form>
      <h3>Вход</h3>

      <label for="username">Логин</label>
      <input type="text" placeholder="Email" v-model="email" />
      <validation-error v-if="errors && isSubmitting" :error="errors" />

      <label for="password">Пароль</label>
      <input type="password" placeholder="Password" v-model="password" />

      <button type="submit" @click.prevent="authorization">Войти</button>

      <div class="link_wrapper">
        <router-link class="link" :to="{ name: 'reg' }" active-class="active"
          >Еще не зарегистрировали аккаунт?</router-link
        >
      </div>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ValidationError from "@/components/ValidationError.vue";

export default {
  components: { ValidationError },
  data() {
    return {
      email: "",
      password: "",
      isSubmitting: false,
    };
  },
  methods: {
    authorization() {
      this.$store
        .dispatch("login", {
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
  },
};
</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  background-color: #080710;
}

.link_wrapper {
  text-align: center;

  .link {
    text-decoration: none;
    opacity: 0.6;
    transition: 0.2s ease-in-out;

    &:hover {
      opacity: 1;
    }
  }
}

.background {
  width: 430px;
  height: 520px;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
}
.background .shape {
  height: 200px;
  width: 200px;
  position: absolute;
  border-radius: 50%;
}
.shape:first-child {
  background: linear-gradient(#1845ad, #23a2f6);
  left: -100px;
  top: -120px;
}
.shape:last-child {
  background: linear-gradient(to right, #ff512f, #f09819);
  right: -100px;
  bottom: -120px;
}
form {
  height: 420px;
  width: 400px;
  background-color: rgba(255, 255, 255, 0.13);
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 50px 35px;
}
form * {
  font-family: "Poppins", sans-serif;
  color: #ffffff;
  letter-spacing: 0.5px;
  outline: none;
  border: none;
}
form h3 {
  font-size: 32px;
  font-weight: 500;
  line-height: 42px;
  text-align: center;
}

label {
  display: block;
  margin-top: 30px;
  font-size: 16px;
  font-weight: 500;
}
input {
  width: 100%;
  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 3px;
  margin-top: 8px;
  padding: 20px 10px;
  font-size: 14px;
  font-weight: 300;

  transition: 0.3s ease-in-out;

  &:hover,
  &:focus {
    box-shadow: 0px 0px 0px 1.4px #fff;
  }
}
::placeholder {
  color: #e5e5e5;
}

button {
  margin-top: 50px;
  width: 80%;
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
}
</style>
