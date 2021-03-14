export default {
  name: 'infoModule',
  type: 'document',
  title: 'Information',
  __experimental_actions: ['update',  'create', 'delete',  'publish'],
  fields: [
    {
      name: 'sections',
      type: 'array',
      title: 'Sections',
      of: [{ type: 'infoSection' }],
      options: {
        editModal: 'fullscreen',
      }
    }
  ]
}
