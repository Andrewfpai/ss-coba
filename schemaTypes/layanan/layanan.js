import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'layanan',
  title: 'Layanan Kami',
  type: 'document',
  fields: [
    defineField({
      name: 'namaLayanan',
      title: 'Nama Layanan',
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
        source: 'namaLayanan',
        maxLength: 200, // will be ignored if slugify is set
        slugify: input => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .slice(0, 200)
      }
    }),
    defineField({
      name: 'syaratKetentuan',
      title: 'Syarat & Ketentuan',
      type: 'array',
      of: [{type: 'block'}]
    }),
    defineField({
      title: 'Apakah terdapat promo tersedia?',
      name: 'PROMO',
      type: 'boolean'
    })
  ],
  preview: {
    select: {
      title: 'namaLayanan',
      media: 'icon',
      promo: 'PROMO',
    },
    prepare({ title, media, promo }) {
      return {
        title: `${title} ${promo ? '(Promo)' : ''}`,
        media
      }
    }
  },
})
