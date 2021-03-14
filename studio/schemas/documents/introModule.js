export default {
  name: 'introModule',
  type: 'document',
  title: 'Intro Module',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Body'
    }
  ]
}
