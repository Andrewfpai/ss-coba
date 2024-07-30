import Services from './layanan'
import { getLayanan, getPromo, getDepartemen } from '@/sanity/sanity.query';
import Navbar from "@/app/_components/navbar/page.js";
import Footer from "@/app/_components/footer/page.js";



export async function generateMetadata({ params}) {
    

    const layanan = await getLayanan()


    const matchingLayanan = layanan?.find((layanan)=>{
      return layanan?.href?.toLowerCase() === params?.layanan?.toLowerCase()
    })

    return {
      title: `${matchingLayanan?.name} | Sunrise Medika`,
      description: `${matchingLayanan?.name} dari Sunrise Medika hadir untuk melayani Anda dan keluarga.`
      
    }
  }

  

export default async function Page({params}){

  const layanan = await getLayanan()
  const departemen = await getDepartemen()
  const promo = await getPromo()
  

    return (
      <>
        <Navbar/>
          <Services params={params} layanan={layanan} promo={promo} departemen={departemen} />
        <Footer/>
      </>
    )
    
   }

 

