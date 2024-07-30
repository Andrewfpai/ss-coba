
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
          }`
  );
}

export async function getInformation() {
  return client.fetch(
    groq`*[_type == "informasi"][0]{
    lokasi,
    "jamBuka": jamOperasional[],
    kontak,
    jadwalPraktek}`
  );
}

export async function getUsp() {
  return client.fetch(
    groq`*[_type == "usp"][0]`
  );
}

export async function getGallery(){
  return client.fetch(
    groq`*[_type == "gallery"]{
    'caption':image{caption},
    'src':image.asset->url
}`
  );
}


export async function getFaq(){
  return client.fetch(
    groq`*[_type == "faq"]{
          pertanyaan, 
          jawaban
          }`
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
            
          },
          'icon': icon.asset->url,
          syaratKetentuan
          }`
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
          }`
  );
}

export async function getPromo(){
  return client.fetch(
    groq`*[_type == "promo"][0]{
         images[]{'poster':asset->url, caption}
       
          }`
  );
}

// Dokter

export async function getDokter() {
  return client.fetch(
    groq`*[_type == "dokter"]{
          'name':nama,
          'spesialis':jenisDokter,
          'icon': icon.asset->url,
          'foto': foto.asset->url,
          'caption': foto.caption
          }`
  );
}

// Tentang Kami

export async function getTentangKami() {
  return client.fetch(
    groq`*[_type == "tentangKami"][0]{
          visi,
          misi,
          'illustrasi':illustrasi.asset->url,
          }`
  );
}



