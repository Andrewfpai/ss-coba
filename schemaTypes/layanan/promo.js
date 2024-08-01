import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'promo',
  title: 'Poster Promosi',
  type: 'document',
  fields: [
    defineField({
      name: 'images',
      title: 'Silahkan Masukkan Poster Promosi, Maksimal 2 Poster',
      type: 'array',
      of: [
        {
          type: 'image',
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
              validation: rule => rule.required(),
            },
            {
              name: 'attribution',
              type: 'string',
              title: 'Attribution',
            },
          ],
        },
      ],
      validation: rule => rule.max(2),
    }),
  ],
  preview: {
    select: {
      title: 'images.0.caption',  // Select the caption of the first image
      media: 'images.0',          // Select the first image for the media preview
    },
    prepare({ title, media }) {
      return {
        title: title || 'No caption', // Use the caption as the title, fallback to 'No caption'
        media: media                  // Display the image
      }
    }
  },
})
