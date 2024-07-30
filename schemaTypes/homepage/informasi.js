import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'informasi',
  title: 'Informasi Klinik',
  type: 'document',
  fields: [
    defineField({
      name: 'lokasi',
      title: 'Lokasi',
      type: 'text',
    }),
    defineField({
      name: 'jamOperasional',
      title: 'Jam Operasional',
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
            },
            {
              name: 'jamBuka',
              type: 'string',
              title: 'Jam Buka',
              fieldset: 'details',
            },
          ],
          preview: {
            select: {
              title: 'hari',
              subtitle: 'jamBuka',
            },
            
        }
        },
      ],
    }),
    defineField({
      name: 'kontak',
      title: 'Kontak Kami (No Telepon)',
      type: 'string',
    }),
    defineField({
        name: 'jadwalPraktek',
        title: 'Jadwal Praktek Dokter',
        type: 'text',
      }),
  ],
})
