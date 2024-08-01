

import {Raleway, Radio_Canada} from "next/font/google"
import "./globals.css";
import Navbar from "./_components/navbar/page.js";
import Footer from "./_components/footer/page.js";
import Script from 'next/script';
import waIcon from '@/public/wa-icon.png';
import Image from 'next/image';
import Link from 'next/link';
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'



const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable:'--raleway',
})

const radioCanada = Radio_Canada({
  subsets: ['latin'],
  display: 'swap',
  variable:'--radioCanada',
})


export const metadata = {
  title: {
    default: "Sunrise Medika | Pelayanan Klinik dan Laboratorium Kesehatan",
    
  },
  description: 'Sunrise Medika menyediakan fasilitas kesehatan terdekat dan kemudahan akses pelayanan medis untuk masyarakat',
  authors:"Sunrise Medika",
  keywords: [
    "Sunrise Medika",
    "Klinik kesehatan",
    "Fasilitas kesehatan",
    "Pelayanan medis",
    "Laboratorium kesehatan"
  ]
}


export default function RootLayout({ children }) {


  return (
    <html lang="en" className={`${raleway.variable} ${radioCanada.variable}`}>
      <head>
        {/*ionicons*/}
        <Script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"/>
        <Script noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"/>

        {/*Google Analytic*/}

        <Script 
        strategy="afterInteractive" 
        src="https://www.googletagmanager.com/gtag/js?id=" id='measurement-id'
        />

        

      </head>
      <body className="relative">
        
        {children}
        <Link href="https://wa.me/628112681977" passHref><Image priority={true} className="wa-icon xs:w-[80px] w-[65px] fixed bottom-[50px] right-[20px] z-[500]" src={waIcon} alt="Whatsapp Icon - Sunrise Medika"/></Link>
        
        <GoogleAnalytics gaId="G-J3HYDS9C6T" />
        <GoogleTagManager gtmId="GTM-W5N6LLQJ" />
      </body>
    </html>
  );
}


