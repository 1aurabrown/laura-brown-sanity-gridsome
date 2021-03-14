<template>
  <Layout>
    <div class="project-title">
      <h1 class="project-title__text">{{ $page.project.title }}</h1>


    </div>

    <div class="project content-box">
      <block-content
        class="project__content"
        :blocks="$page.project._rawBody"
        v-if="$page.project._rawBody"
      />

      <div class="project__footer">
        <project-tags :project="$page.project" v-if="$page.project" />
      </div>
    </div>

    <div class="project-comments">
      <!-- Add comment widgets here -->
    </div>

  </Layout>
</template>

<script>
import BlockContent from '~/components/BlockContent'

export default {
  components: {
    BlockContent
  },

}
</script>

<page-query>
query Project ($id: ID!) {
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  project: sanityProject (id: $id) {
    title
    date (format: "MMM YYYY")
    _rawBody
  }
}
</page-query>

<style lang="scss">
.project-title {
  padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
  text-align: center;
}

.project {
  &__header {
    width: calc(100% + var(--space) * 2);
    margin-left: calc(var(--space) * -1);
    margin-top: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;

    img {
      width: 100%;
    }

    &:empty {
      display: none;
    }
  }

  &__content {
    h2:first-child {
      margin-top: 0;
    }

    p:first-of-type {
      font-size: 1.2em;
      color: var(--title-color);
    }

    img {
      width: calc(100% + var(--space) * 2);
      margin-left: calc(var(--space) * -1);
      display: block;
      max-width: none;
    }
  }
}

.project-comments {
  padding: calc(var(--space) / 2);

  &:empty {
    display: none;
  }
}

.project-author {
  margin-top: calc(var(--space) / 2);
}
</style>
