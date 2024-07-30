
import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'heading',
    title: 'Heading',
    type: 'document',
    fields: [
      defineType({
        name: 'title',
        title: 'Heading For Website',
        type: 'string'
      }),
      defineType({
        name: 'subtitle',
        title: 'Subtitle',
        type: 'text'
      }),
      defineField({
        name: 'illustration',
        title: 'Illustration',
        type: 'image',
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
              validation: rule => rule.required()
            },
          
          ]
          
        ,
      }),
    ]
  })