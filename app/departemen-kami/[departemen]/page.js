import Departments from './departemen'

import { getDepartemen, getLayanan, getPromo } from '@/sanity/sanity.query';
import Navbar from "../../_components/navbar/page";
import Footer from "../../_components/footer/page";



export async function generateMetadata({ params, searchParams }, parent) {
    
    const departemen = await getDepartemen()

    const matchingDepartemen = departemen?.find((departemen)=>{
      return departemen?.href?.toLowerCase() === params?.departemen?.toLowerCase()
    })

    return {
      title: `${matchingDepartemen?.name} | Sunrise Medika`,
      description: `${matchingDepartemen?.name} dari Sunrise Medika hadir untuk melayani Anda dan keluarga.`
      
    }
  }

export default async function Page({params}){

  const layanan = await getLayanan()
  const departemen = await getDepartemen()

    return (
      <>
      <Navbar/>
      <Departments params={params} departemen={departemen} layanan={layanan} />
      <Footer/>
      </>
    )
   }