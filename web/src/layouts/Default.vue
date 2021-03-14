<template>
  <div id="app">
    <header class="header">
      <div class="header__left">
        <header-logo v-if="showLogo" />
      </div>

      <div class="header__right">
        <toggle-theme />
      </div>
    </header>

    <main class="main">
      <slot />
    </main>

    <footer class="footer small">
      Font: Compagnon
    </footer>
  </div>
</template>

<script>
import HeaderLogo from '~/components/HeaderLogo'
import ToggleTheme from '~/components/ToggleTheme'

export default {
  props: {
    showLogo: {
      type: Boolean,
      default: true
    }
  },
  components: {
    HeaderLogo,
    ToggleTheme
  }
}
</script>

<style lang="scss">

body[data-loaded]{
  .header {
    transition: color .6s, background-color .6s;
  }
}
.header {
  background-color: var(--bg-color);
  color: var(--body-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: var(--header-height);
  padding: 0 calc(var(--space));
  z-index: 10;

  position: sticky;
  top: 0;
  width: 100%;


  &__left,
  &__right {
    display: flex;
    align-items: center;
  }

}

.main {
  margin: 0 auto;
  padding: calc(var(--space)/2) calc(var(--space) ) calc(var(--space) *2);
}

.footer {
  text-align: right;
  padding: var(--space);
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  @media screen and (min-width: 721px) {
      padding: calc(var(--space)/2) calc(var(--space));
  }
}
</style>


