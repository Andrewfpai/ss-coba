
import { groq } from "next-sanity";
import client from "./sanity.client";

// Homepage

export async function getHeading() {
  return client.fetch(
    groq`*[_type == "heading"][0]{
          title,
          subtitle,
          'illustration':illustration.asset->url,
          'caption':illustration.caption
          }`,{},{
            cache: process.env.NODE_ENV === "development" ? "no-store" : "force-cache",
            next: {tags: ['heading']}
          }
  );
}

export async function getInformation() {
  return client.fetch(
    groq`*[_type == "informasi"][0]{
    lokasi,
    "jamBuka": jamOperasional[],
    kontak,
    jadwalPraktek}`,{},{
      cache: process.env.NODE_ENV === "development" ? "no-store" : "force-cache",
      next: {tags: ['informasi']}
    }
  );
}

export async function getUsp() {
  return client.fetch(
    groq`*[_type == "usp"][0]{
"icon1":usp1.icon.asset->url,
  "icon2":usp2.icon.asset->url,
  "icon3":usp3.icon.asset->url,
  ...
}`,{},{
      cache: process.env.NODE_ENV === "development" ? "no-store" : "force-cache",
      next: {tags: ['usp']}
    }
  );
}

export async function getGallery(){
  return client.fetch(
    groq`*[_type == "gallery"]{
    'caption':image{caption},
    'src':image.asset->url
}`,{},{
  cache: process.env.NODE_ENV === "development" ? "no-store" : "force-cache",
  next: {tags: ['gallery']}
}
  );
}


export async function getFaq(){
  return client.fetch(
    groq`*[_type == "faq"]{
          pertanyaan, 
          jawaban
          }`,{},{
            cache: process.env.NODE_ENV === "development" ? "no-store" : "force-cache",
            next: {tags: ['faq']}
          }
  );
}


// Layanan & Departemen


export async function getDepartemen(){
  return client.fetch(
    groq`*[_type == "departemen"]{
          'name':namaDepartemen,
          'href':slug.current,
          dokter[]->{
            nama, 
            jenisDokter,
            "jadwalPraktek": jadwalPraktek[],
            'foto': foto.asset->url,
            'caption': foto.caption,
            'foto_custom':foto
          },
          'icon': icon.asset->url,
          syaratKetentuan
          }`,{},{
            cache: process.env.NODE_ENV === "development" ? "no-store" : "force-cache",
            next: {tags: ['departemen']}
          }
  );
}
export async function getLayanan(){
  return client.fetch(
    groq`*[_type == "layanan"]{
          'name':namaLayanan,
          'href':slug.current,
          'isPromo':PROMO,
          'icon': icon.asset->url,
          syaratKetentuan
          }`,{},{
            cache: process.env.NODE_ENV === "development" ? "no-store" : "force-cache",
            next: {tags: ['layanan']}
          }
  );
}

export async function getPromo(){
  return client.fetch(
    groq`*[_type == "promo"][0]{
         images[]{'poster':asset->url, caption}
       
          }`,{},{
            cache: process.env.NODE_ENV === "development" ? "no-store" : "force-cache",
            next: {tags: ['promo']}
          }
  );
}

// Dokter

export async function getDokter() {
  return client.fetch(
    groq`*[_type == "dokter"]{
          'name':nama,
          'spesialis':jenisDokter,
          'icon': icon.asset->url,
          
          'caption': foto.caption,
          foto
          } `,{},{
            cache: process.env.NODE_ENV === "development" ? "no-store" : "force-cache",
            next: {tags: ['dokter']}
          }
  );
}

export const getDokter2 = groq`*[_type == "dokter"]{
          'name':nama,
          'spesialis':jenisDokter,
          'icon': icon.asset->url,
          'foto': foto.asset->url,
          'caption': foto.caption
          } `;


// Tentang Kami

export async function getTentangKami() {
  return client.fetch(
    groq`*[_type == "tentangKami"][0]{
          visi,
          misi,
          'illustrasi':illustrasi.asset->url,
          }`,{},{
            cache: process.env.NODE_ENV === "development" ? "no-store" : "force-cache",
            next: {tags: ['tentangKami']}
          }
  );
}



