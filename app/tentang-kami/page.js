
import Navbar from "@/app/_components/navbar/page.js";
import Footer from "@/app/_components/footer/page.js";
import AboutClient from './about.client';


import {getDepartemen, getLayanan, getDokter, getInformation, getTentangKami } from '@/sanity/sanity.query';


export const metadata = {
  title: 'Tentang Kami | Sunrise Medika',
  description: 'Klinik Sunrise Medika bertujuan untuk melayani masyarakat dan memastikan Anda mendapatkan pelayanan terbaik'
}

export default async function About(){

    const departemen = await getDepartemen()
    const layanan = await getLayanan()
    const dokter = await getDokter()
    const information = await getInformation()
    const tentangKami = await getTentangKami()

    return (
      <>
        <Navbar departemen={departemen} layanan={layanan}/>
          <AboutClient dokter={dokter} information={information} tentangKami={tentangKami}/>
        <Footer departemen={departemen} layanan={layanan}/>
      </>
    )
    
   }

 

