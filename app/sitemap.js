// pages/sitemap.xml.js

import { getDepartemen, getLayanan } from '@/sanity/sanity.query';



export default async function siteMap() {

    return [
              {
                url: 'https://sunrisemedika.com',
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 1,
              },
              ...(await getDepartemen()).map((departemen) => ({
                url: `https:/sunrisemedika.com/departemen/${departemen.href}`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.8,
              })),
              ...(await getLayanan()).map((layanan) => ({
                url: `https:/sunrisemedika.com/layanan/${layanan.href}`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.8,
              })),

            ]
}


// export default function Sitemap() {
//     return [
//       {
//         url: 'https://acme.com',
//         lastModified: new Date(),
//         changeFrequency: 'yearly',
//         priority: 1,
//       },
//       {
//         url: 'https://acme.com/about',
//         lastModified: new Date(),
//         changeFrequency: 'monthly',
//         priority: 0.8,
//       },
//       {
//         url: 'https://acme.com/blog',
//         lastModified: new Date(),
//         changeFrequency: 'weekly',
//         priority: 0.5,
//       },
//     ]
//   }