import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'departemen',
  title: 'Departemen',
  type: 'document',
  fields: [
    defineField({
      name: 'namaDepartemen',
      title: 'Nama Departemen',
      type: 'string',
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'namaDepartemen',
        maxLength: 200, // will be ignored if slugify is set
        slugify: input => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .slice(0, 200)
      }
    }),
    defineField({
      name: 'dokter',
      title: 'Dokter',
      type: 'array',
      of: [{type: 'reference', to: {type: 'dokter'}}],
    }),
    defineField({
      name: 'syaratKetentuan',
      title: 'Syarat & Ketentuan',
      type: 'array',
      of: [{type: 'block'}]


    }),
  
  ],
  preview: {
    select: {
      title: 'namaDepartemen',
      media: 'icon',
    },
  },

 
})
