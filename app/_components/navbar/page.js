import NavbarClient from "@/app/_components/navbar/navbar.client.js";

import { getDepartemen, getLayanan } from "@/sanity/sanity.query";


export default async function Navbar(){


    const departemen = await getDepartemen()
    const layanan = await getLayanan()

    return (
      <>
        <NavbarClient department={departemen} layanan={layanan}/>
      </>
    )
    
   }

 

