import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dokter',
  title: 'Dokter',
  type: 'document',
  fields: [
    defineField({
      name: 'nama',
      title: 'Nama',
      type: 'string',
    }),
    defineField({
      name: 'jadwalPraktek',
      title: 'Jadwal Praktek',
      type: 'array',
      of: [
        {
          type: 'object',
          fieldsets: [
            {
              name: 'details',
              options: { columns: 2 },
            },
          ],
          fields: [
            {
              name: 'hari',
              type: 'string',
              title: 'Hari',
              fieldset: 'details',
              initialValue:'Senin-Sabtu'
            },
            {
              name: 'jamPraktek',
              type: 'string',
              title: 'Jam Praktek',
              fieldset: 'details',
              initialValue:'08.00-21.00'
            },
          ],
          preview: {
            select: {
              title: 'hari',
              subtitle: 'jamPraktek',
            },
            
        }
        },
      ],
      
    }),
    defineField({
      name: 'foto',
      title: 'Foto',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    
    defineField({
      name: 'jenisDokter',
      title: 'Jenis Dokter',
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
  ],
  preview: {
    select: {
      title: 'nama',
      subtitle:'jenisDokter',
      media: 'foto',
    },
  },
})
