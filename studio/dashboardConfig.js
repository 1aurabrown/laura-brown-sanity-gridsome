export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '604e173fc49ff7b80e0e3a17',
                  title: 'Sanity Studio',
                  name: 'laura-brown-sanity-gridsome-studio',
                  apiId: '32b4c633-72a9-4251-a9a1-8e15985629a4'
                },
                {
                  buildHookId: '604e173f64e22205fd8efc19',
                  title: 'Blog Website',
                  name: 'laura-brown-sanity-gridsome',
                  apiId: '84abe59e-edf5-4562-9c1f-3a3e8c4d6d0a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/1aurabrown/laura-brown-sanity-gridsome',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://laura-brown-sanity-gridsome.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
