import {format} from 'date-fns'

export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Titles should be catchy, descriptive, and not too long'
    },
    {
      name: 'url',
      type: 'url',
      title: 'Link'
    },
    {
      name: 'role',
      type: 'string',
      title: 'Role',
      description: 'Project Role'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontends will require a slug to be set to be able to show the post',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'date',
      type: 'date',
      title: 'Project Date',
      description: 'Used for sorting',
      options: {
        dateFormat: 'MMMM YYYY'
      }
    },
    {
      name: 'inProgress',
      type: 'boolean',
      title: 'In Progress',
      default: false,
      options: {
        layout: 'checkbox'
      }
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Body'
    }
  ],
  orderings: [
    {
      name: 'order',
      title: 'Custom  Order',
      by: [
        {
          field: 'order',
          direction: 'asc'
        }
      ]
    },
    {
      name: 'dateAsc',
      title: 'Date new–>old',
      by: [
        {
          field: 'date',
          direction: 'asc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    },
    {
      name: 'dateDesc',
      title: 'Date old->new',
      by: [
        {
          field: 'date',
          direction: 'desc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      role: 'role',
      date: 'date',
      slug: 'slug'
    },
    prepare ({ title = 'No title', date, slug = {} }) {
      const path = `/${slug.current}`
      return {
        title,
        subtitle: path
      }
    }
  }
}
