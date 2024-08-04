import React from 'react'
import Image from 'next/image';
import logo from './assets/logo.svg';
import Link from 'next/link';


const Footer = async (props) => {

    const {departemen, layanan} = props

    const navigations = [
        {
            "name":"Layanan Kami",
            "href":"/#department"
        },
        {
            "name":"Tentang Kami",
            "href":"/tentang-kami"
        },
    ]

  return (
        <div className="w-full xl:h-[601px] lg:h-[550px] 2md:h-[480px] h-[520px] flex justify-center lg:pt-[65px] pt-[40px] pb-[88px] xl:gap-0 gap-[5%] 2md:gap-0 2md:flex-row flex-col bg-[#9D5C00] text-[#F6F6F6] font-raleway xl:text-[15px] lg:text-[11px] xs:text-[9.6px] text-[8px] font-normal tracking-[1.2px]">

            <div className="xl:w-[531px] lg:w-[500px] w-full 2md:h-full flex flex-col xl:px-[80px] sm:px-[80px] xs:px-[50px] px-[30px] justify-between 2md:mx-0 mx-auto 2md:gap-0 gap-[20px]"> {/*w-[35%] */}
                <div className="flex items-center 2md:gap-[10px] gap-[5px] relative 2md:left-[-18px] left-[-10px]">
                    <div className=""><Image width={0} height={0} sizes='100vw' className="xl:w-[133px] 2md:w-[106.4px] w-[60px]" src={logo} alt="idk" /></div>
                    <h2 className="font-extrabold xl:text-[20px] 2md:text-[18px] text-[15px] relative 2md:top-[7px] top-[2px]">SUNRISE MEDIKA</h2>
                </div>
                

                <h2 className="w-full tracking-[1.1px] 2md:leading-[25px] leading-[15px]">Klinik Sunrise Medika hadir melayani Anda dan keluarga dengan kemudahan akses pelayanan kesehatan medis.</h2>
                <div className="2md:w-[315px] w-full md:h-auto flex 2md:flex-col 2md:justify-between gap-[15px]">
                    <Link href="https://wa.me/628112681977" passHref><div className="flex 2md:gap-[10px] gap-[5px] items-center cursor-pointer"><ion-icon name="call-outline" class="xl:text-[25px] text-[20px] font-medium"></ion-icon><p>0819-5812-7981</p></div></Link>
                    <Link href="https://www.instagram.com/kliniksunrisemedika_/" passHref><div className="flex 2md:gap-[10px] gap-[7px] items-center cursor-pointer"><ion-icon name="logo-instagram" class="xl:text-[25px] text-[20px] font-medium"></ion-icon><p>@kliniksunrisemedika_</p></div></Link>
                </div>
                <div className="2md:block hidden">
                    <h3 className="font-black mb-[17px]">Temui Dokter Kami Sekarang!</h3>
                    <div className="flex gap-[19px]">
                        <Link href="https://wa.me/628112681977" passHref><button className="xl:w-[167px] xl:h-[50px] w-[133.6px] h-[40px] flex items-center justify-center tracking-[0.6px] font-semibold bg-[#F6F6F6] rounded-[20px] shadow-button-tw text-[#503129]">Daftar Sekarang</button></Link>
                        <Link href="" passHref><button className="xl:w-[199px] xl:h-[50px] w-[133.6px] h-[40px] flex items-center justify-center tracking-[0.6px] font-semibold bg-transparent rounded-[20px] border-white border-[3px]">Lihat Jadwal Praktek</button></Link>
                    </div>
                </div>
            </div>

            <div className="xl:w-[910px] 2md:w-auto w-full 2md:mx-0 mx-auto flex 2md:pt-[30px] xl:pl-[90px] 2md:gap-[40px] lg:gap-[50px] gap-[10px] justify-normal sm:px-[80px] 2md:pr-[50px] 2md:pl-0 xs:px-[50px] px-[30px] md:mt-0 mt-[15px] cursor-pointer"> {/*w-[60%]*/}

                <div className="flex flex-col 2md:gap-[17px] gap-[10px] 2md:w-[100px] lg:w-auto w-[136px]">
                    <p className="font-black text-[#FFFFFF]">Departemen</p>
                    {departemen?.map((content,index) => 
                        <Link key={index} href={"/departemen-kami/"+content.href}><p  className="font-normal text-[#F6F6F6]">{content.name}</p></Link>
                    )}        
                </div>

                <div className="flex flex-col 2md:gap-[17px] gap-[10px] 2md:w-[100px] lg:w-auto w-[136px] relative lg:left-[14px] ">
                    <p className="font-black text-[#FFFFFF]">Layanan Lainnya</p>
                    {layanan?.map((content,index) => 
                         <Link key={index} href={"/layanan-kami/"+content.href}><p key={index} className="font-normal text-[#F6F6F6]">{content.name}</p></Link>
                    )}        
                </div>

                <div className="flex flex-col 2md:gap-[17px] gap-[10px] 2md:w-[100px] lg:w-auto w-[136px]">
                    <p className="font-black text-[#FFFFFF]">Navigation</p>
                    {navigations.map((content,index) =>
                        <Link key={index} href={content.href}><p className="font-normal text-[#F6F6F6]">{content.name}</p></Link>
                    )}   

                    <div className="2md:hidden block mt-[10px]">
                        <h3 className="font-black mb-[5px]">Temui Dokter Kami Sekarang!</h3>
                        <div className="flex flex-col gap-[10px]">
                        <Link href="https://wa.me/628112681977" passHref><button className="w-full h-[30px] flex items-center justify-center tracking-[0.4px] font-semibold bg-[#F6F6F6] rounded-[10px] shadow-button-tw text-[#503129]">Daftar Sekarang</button></Link>
                        <Link href="" passHref><button className="w-full h-[30px] flex items-center justify-center tracking-[0.4px] font-semibold bg-transparent rounded-[10px] border-white border-[1px]">Jadwal Praktek</button></Link>
                    </div>
                </div>

                </div>

            </div>
        </div>
  )
}

export default Footer
