export const myStructure = (S) =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Homepage')
        .child(
          S.list()
            .title('Homepage Components')
            .items([
              S.listItem()
                .title('Heading')
                .child(S.document().schemaType('heading').documentId('heading')),
              S.listItem()
                .title('Unique Selling Point')
                .child(S.document().schemaType('usp').documentId('usp')),
              S.listItem()
                .title('Informasi Klinik')
                .child(S.document().schemaType('informasi').documentId('informasi')),
              S.listItem()
                .title('Galeri Klinik')
                .child(S.documentTypeList('gallery').title('Galeri')),
              S.listItem()
                .title('FAQ')
                .child(S.documentTypeList('faq').title('FAQ')),
            ])
        ),
      S.listItem()
        .title('Layanan Kami')
        .child(
          S.list()
            .title('Layanan Kami')
            .items([
              S.listItem()
                .title('Layanan')
                .child(S.documentTypeList('layanan').title('layanan')),
              S.listItem()
                .title('Poster Promosi')
                .child(S.document().schemaType('promo').documentId('promo')),
              
            ])
        ),
        

      ...S.documentTypeListItems().filter(
        (listItem) => !['heading', 'usp', 'informasi', 'gallery', 'faq', 'layanan', 'promo', 'tentangKami'].includes(listItem.getId())
      ),
      S.listItem()
        .title('Tentang Kami')
    
          .child(S.document().schemaType('tentangKami').documentId('tentangKami')),
    ]);
