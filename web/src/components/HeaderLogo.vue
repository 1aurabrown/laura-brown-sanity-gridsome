<template>
  <g-link class="logo" to="/">
    <h1 class="h1 logo__text">{{ $static.siteSettings.title }}</h1>
  </g-link>
</template>

<static-query>
query {
  siteSettings: sanitySiteSettings(id: "siteSettings") {
    title
    description
  }
}
</static-query>

<style lang="scss">
.logo {
  text-decoration: none;
  color: var(--body-color) !important;
  font-size: 0.9em;
  &__text {
    margin: 0
  }

  &__image {
    vertical-align: middle;
    border-radius: 99px;
    height: 40px;
    width: 40px;
    margin-right: 0.5em;
  }
}
</style>
