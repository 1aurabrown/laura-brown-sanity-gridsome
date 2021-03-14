<template>
  <tr class="project-card">
    <td>
      <h3 class="project-card__title">{{ project.title }}
      <sup class="small project-card__wip" v-if="project.inProgress === true">WIP</sup>
      </h3>
      <g-link v-if="project.url" class="project-card__link" :to="project.url">Link</g-link>
    </td>
    <td class="project-card__role small">{{ project.role }}
      <g-link v-if="project.url" aria-hidden="true" class="project-card__link" :to="project.url">Link</g-link>
    </td>
  </tr>
</template>

<script>
import BlockContent from '~/components/BlockContent'

export default {
  components: {
    BlockContent
  },
  props: {
    project: Object
  }
}
</script>

<style lang="scss">
.project-card {
  td {
    position: relative;
    vertical-align: middle;
  }
  border-bottom: 1px solid var(--border-color);
  &__content {
    width: 100%;
    // display: flex;
    // align-items: center;
  }
  &__title {
    white-space: nowrap;
    width: auto;
    padding: .8em 0;
  }
  &__role {
    white-space: nowrap;
    width: 8em;
    padding-left: 1em;
  }

  &__title {
    margin: 0;
  }

  &__link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    overflow: hidden;
    text-indent: -9999px;
    z-index: 0;
  }
}
</style>
