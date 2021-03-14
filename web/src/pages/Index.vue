<template>
  <Layout :show-logo="true">
    <!-- Author intro -->
    <div class="intro">
      <block-content :blocks="$page.intro._rawBody" />
    </div>

    <div class="container">
      <!-- List projects -->
      <div class="projects">
        <h2 class="h2">Selected Projects</h2>
        <table class="projects__list">
          <tbody>
          <project-card
            v-for="edge in $page.projects.edges"
            :key="edge.node.id"
            :project="edge.node"
            :metadata="$page.metadata"
          />
        </tbody>
        </table>
      </div>

      <div class="info">
        <div class="info__inner">
          <info-section
            v-for="section in $page.info.sections"
            :key="section.title"
            :section="section"
          />
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
{
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }

  intro: sanityIntroModule(id:"introModule") {
    _rawBody
  }

  info: sanityInfoModule(id:"infoModule") {
    sections {
      title
      _rawBody
    }
  }

  projects: allSanityProject(sortBy: "date") {
    edges{
      node{
        role
        url
        inProgress
        date
        title
        slug {
          current
        }
      }
    }
  }
  siteSettings: sanitySiteSettings(id: "siteSettings") {
    title
    description
  }
}

</page-query>


<script>
import ProjectCard from '~/components/ProjectCard'
import BlockContent from '~/components/BlockContent'
import InfoSection from '~/components/InfoSection'

export default {
  name: 'Index',
  components: {
    ProjectCard,
    BlockContent,
    InfoSection
  },
  metaInfo() {
    return {
      title: this.$page.siteSettings.title,
      description: this.$page.siteSettings.description,
      // etc...
    }
  }

}
</script>


<style lang="scss">
  .projects__list {
    margin-top: 1.25rem;
    width: 100%;
    border-top: 1px solid var(--border-color);
  }

  .intro, .projects__list, .info__inner {
    max-width: 600px;
  }

  @media screen and (min-width: 721px) {
    .container {
      display: flex;
      flex-direction: row;
      align-items: flex-start
    }
    .projects, .info {
      flex: 1;
    }
    .projects {
      padding-right: calc(var(--space) / 2);
    }
    .info {
      padding-left: calc(var(--space) / 2);
    }
  }
</style>
