import About from './about';
import Navbar from "@/app/_components/navbar/page.js";
import Footer from "@/app/_components/footer/page.js";




export const metadata = {
  title: 'Tentang Kami | Sunrise Medika',
  description: 'Klinik Sunrise Medika bertujuan untuk melayani masyarakat dan memastikan Anda mendapatkan pelayanan terbaik'
}

export default function Page(){
    return (
      <>
        <Navbar/>
          <About/>
        <Footer/>
      </>
    )
    
   }

 

