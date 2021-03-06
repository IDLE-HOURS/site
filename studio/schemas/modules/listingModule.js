export default {
  title: 'Listing Content',
  name: 'listingModule',
  type: 'object',
  // hidden: true,
  fieldsets: [
    {
      name: 'media',
      title: 'Media',
      options: {
        collapsible: true,
        collapsed: true
      }
    },
    {
      name: 'filters',
      title: 'Filters',
      options: {
        collapsible: true,
        collapsed: true
      }
    },
  ],
  fields: [
    {
      name: 'name',
      title: 'Listing Name',
      type: 'string'
    },
    {
      name: 'url',
      title: 'Listing URL',
      type: 'url'
    },
    {
      name: 'location',
      title: 'City and State',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'content.main.name',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'origin',
      type: 'reference',
      to: [{type: 'country' }],
      fieldset: 'filters'
    },
    {
      name: 'material',
      type: 'material',
      fieldset: 'filters'
    },
    {
      name: 'qtys',
      title: 'Qtys',
      type: 'string',
      options: {
        list: [
          { value: 'none', title: 'None' },
          { value: 'low', title: 'Low minimums' },
          { value: 'mixed', title: 'Mixed minimums' },
          { value: 'high', title: 'High minimums' },
          { value: 'inquire', title: 'Inquire' },
        ],
        layout: 'dropdown'
      },
      fieldset: 'filters'
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [ {type: 'reference', to: { type: 'tag' } }],
      fieldset: 'filters'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Dithered Image',
      options: {
        hotspot: true
      },
      fieldset: 'media'
    },
    {
      name: 'originalImage',
      type: 'image',
      title: 'Original Image',
      options: {
        hotspot: true
      },
      fieldset: 'media'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block'
        }
      ]
    }
  ]
}
