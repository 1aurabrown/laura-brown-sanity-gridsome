import S from '@sanity/desk-tool/structure-builder'
import { MdSettings } from 'react-icons/md'

const hiddenDocTypes = listItem =>
  !['infoModule', 'project', 'introModule', 'siteSettings'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),


      S.listItem()
        .title('Introduction')
        .child(
          S.editor()
            .id('introModule')
            .schemaType('introModule')
            .documentId('introModule')
            .title('Intro Module')
        ),

        S.listItem()
        .title('Information')
        .child(
          S.editor()
            .id('infoModule')
            .schemaType('infoModule')
            .documentId('infoModule')
            .title('Info Blocks')
        ),
      S.listItem()
        .title('Projects')
        .schemaType('project')
        .child(S.documentTypeList('project').title('Projects')),

      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
