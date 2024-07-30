import NavbarClient from "@/app/_components/navbar/navbar.client.js";



export default async function Navbar(props){


    const {departemen, layanan} = props
    

    return (
      <>
        <NavbarClient department={departemen} layanan={layanan}/>
      </>
    )
    
   }

 

