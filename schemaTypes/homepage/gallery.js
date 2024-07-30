import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Gambar Klinik',
      type: 'image',
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          validation: rule => rule.required()
        },
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        }
      ],
    }),
  ],
  preview: {
    select: {
      title: 'image.caption',  // Select the caption from the image field
      media: 'image',          // Select the image itself for the media preview
    },
    prepare({ title, media }) {
      return {
        title: title || 'No caption', // Use the caption as the title, fallback to 'No caption'
        media: media                  // Display the image
      }
    }
  },
})
