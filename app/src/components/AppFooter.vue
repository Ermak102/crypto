<template>
  <footer class="footer">
    <div class="container">
      <div class="footer_wrapper">
        <div class="footer_header">
          <div class="links">
            <router-link class="link_image" :to="{ name: 'home' }">
              <img src="@/assets/logo.png" alt="logo"
            /></router-link>
          </div>
          <div class="navigation_links">
            <router-link class="link" :to="{ name: 'home' }"
              >Домашняя страница</router-link
            >
            <router-link class="link" :to="{ name: 'ar' }" active-class="active"
              >Интересное</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  background: #100736;

  .footer_wrapper {
    padding: 2rem;
  }

  .footer_header {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .link {
    margin-left: 2rem;
    font-size: 1.35rem;
    color: #fff;
    padding-bottom: 0.6rem;
    text-decoration: none;
    position: relative;
    opacity: 0.75;
    transition: 0.3s ease-in-out;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0%;
      height: 2px;
      background: linear-gradient(
        to right,
        rgb(44, 241, 209),
        rgba(0, 174, 255, 0.308)
      );

      transition: 0.5s ease-in-out;
    }

    &:hover {
      opacity: 1;

      &::after {
        width: 100%;
      }
    }
  }

  .link_image {
    img {
      max-width: 64px;
    }
  }
}
</style>
