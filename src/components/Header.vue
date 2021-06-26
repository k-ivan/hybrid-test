<template>
  <header class="header">
    <div class="header__container">
      <div class="header__brand">
        <svg
          width="30"
          height="30"
          viewBox="0 0 28 32"
          fill="#fff"
        >
          <path
            d="M0 0h28l-2.546 28.75-11.486 3.25-11.42-3.25-2.548-28.75zM9.374 13l-0.31-3.624 13.412 0.004 0.308-3.496-17.568-0.004 0.93 10.68h12.168l-0.434 4.568-3.88 1.072-3.94-1.080-0.25-2.812h-3.48l0.44 5.56 7.23 1.932 7.172-1.924 0.992-10.876h-12.79z"
          />
        </svg>
      </div>
      <nav class="header__nav">
        <ul class="header__nav-list">
          <li
            v-for="link in links"
            :key="link.title"
            class="header__nav-item"
          >
            <RouterLink
              class="header__nav-link"
              :to="link.href"
              exact
            >
              {{ link.title }}
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      navbarShown: false,
      links: [
        {
          title: 'Home',
          href: { name: 'Home' }
        },
        {
          title: 'Dashboard',
          href: { name: 'Dasboard' }
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  padding: 20px;
  color: #fff;
  background-image: linear-gradient(to right, rgba(24, 74, 182, 0.9), #d14c4a);
}
.header__container {
  display: flex;
  align-items: center;
  max-width: 1024px;
  margin: auto;
}
.header__brand {
  margin-right: 50px;
}
.header__nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding-left: 0;
}
.header__nav-item {
  margin-right: 5px;
}
.header__nav-link {
  display: block;
  padding: 8px 14px;
  color: currentColor;
  border-radius: 4px;
  text-decoration: none;
  outline: none;

  &:hover,
  &:focus,
  &.active {
    text-decoration: none;
    background-color: rgba(255,255,255, .1);
  }
  &.active {
    background-color: rgba(255,255,255, .05);
  }
}
</style>
