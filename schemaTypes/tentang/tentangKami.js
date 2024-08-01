import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'tentangKami',
  title: 'Tentang Kami',
  type: 'document',
  fields: [
    defineField({
      name: 'visi',
      title: 'Visi',
      type: 'array',
      of: [{type: 'block'}]
    }),
    defineField({
      name: 'misi',
      title: 'Misi',
      type: 'array',
      of: [{type: 'block'}]
    }),
    defineField({
      name: 'illustrasi',
      title: 'Illustrasi',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    
  ],
  preview: {
    select: {
      title: 'visi',
      media: 'illustrasi',

    },
    
  },
})
