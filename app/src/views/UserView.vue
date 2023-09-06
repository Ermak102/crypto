<template>
  <section class="user">
    <user-info />
    <hr class="line" />
    <coin-form />
    <hr class="line" />
    <CoinGraph />
  </section>
</template>

<script>
import UserInfo from "@/components/UserInfo.vue";
import CoinForm from "@/components/Coin/CoinForm.vue";
export default {
  components: { UserInfo, CoinForm },
};
</script>

<style lang="scss" scoped></style>
