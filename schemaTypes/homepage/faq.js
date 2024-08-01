import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({
      name: 'pertanyaan',
      title: 'Pertanyaan',
      type: 'string',
    }),
    defineField({
      name: 'jawaban',
      title: 'Jawaban',
      type: 'blockContent',
    }),
   
  ],
})
