<template>
  <div class="error">
    <div class="error_title">{{ error }}</div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.error {
  margin-top: 0.65rem;
  padding-left: 0.5rem;
}

.error_title {
  color: red;
  font-weight: 600;
  font-size: 0.75rem;
}
</style>
