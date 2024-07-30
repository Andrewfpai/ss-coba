export default {
    name: 'usp',
    title: 'Usp',
    type: 'document',
    fields: [
      {
        title: 'Kelebihan 1',
        name: 'usp1',
        type: 'object',
        fieldsets: [
          {
            name: 'details',
            options: { columns: 2 },
          },
        ],
        fields: [
          {
            name: 'judul',
            type: 'string',
            title: 'Judul Singkat',
            fieldset: 'details',
          },
          {
            name: 'deskripsi',
            type: 'string',
            title: 'Deskripsi Singkat',
            fieldset: 'details',
          },
          {
            name: 'icon',
            title: 'Icon',
            type: 'image',
            options: {
              hotspot: true,
            },
          },
        ],
      },
      {
        title: 'Kelebihan 2',
        name: 'usp2',
        type: 'object',
        fieldsets: [
          {
            name: 'details',
            options: { columns: 2},
          },
        ],
        fields: [
          {
            name: 'judul',
            type: 'string',
            title: 'Judul Singkat',
            fieldset: 'details',
          },
          {
            name: 'deskripsi',
            type: 'string',
            title: 'Deskripsi Singkat',
            fieldset: 'details',
          },
          {
            name: 'icon',
            title: 'Icon',
            type: 'image',
            options: {
              hotspot: true,
            },
          },
        ],
      },
      {
        title: 'Kelebihan 3',
        name: 'usp3',
        type: 'object',
        fieldsets: [
          {
            name: 'details',
            options: { columns: 2 },
          },
        ],
        fields: [
          {
            name: 'judul',
            type: 'string',
            title: 'Judul Singkat',
            fieldset: 'details',
          },
          {
            name: 'deskripsi',
            type: 'string',
            title: 'Deskripsi Singkat',
            fieldset: 'details',
          },
          {
            name: 'icon',
            title: 'Icon',
            type: 'image',
            options: {
              hotspot: true,
            },
          },
        ],
      },
    ],
  }
  