

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import "./style.css";


import PortableTextRenderer from '@/app/_components/portableText/PortableTextRenderer';
import Department from '@/app/_components/department/page';



export default function Services(props){

  const {layanan, promo, params, departemen} = props

  const matchingLayanan = layanan?.find((layanan)=>{
    return layanan?.href?.toLowerCase() === params?.layanan?.toLowerCase()
  })

 

  return (
    <div className="flex flex-col mx-auto font-raleway bg-[#F6F6F6] text-[24px]">
      {/* {console.log("layanan",promo)} */}
        <div className='flex flex-col bg-[rgba(255,233,123,0.42)] py-9 mt-[120px] md:mt-[170px] '>
            {matchingLayanan?<Image width={0} height={0} sizes='100vw' className='sm:w-[60px] w-[20px] mx-auto' src={matchingLayanan?.icon} alt={"Icon "+matchingLayanan?.name}/>:null}
            {matchingLayanan && (
                <h1 className='mt-5 text-center text-lg xs:text-2xl md:text-[32px] text-mainBrown font-bold tracking-[0.95px]'>
                  {matchingLayanan?.name}
                </h1>
                // <h1 className='px-7 py-[10px] text-center text-[32px] text-mainBrown font-bold tracking-[0.95px]'>saraf</h1> 

            )}
            {/* <h1 className='px-7 py-[10px] text-center text-[32px] text-mainBrown font-bold tracking-[0.95px]'>{params.departemen}</h1> */}
        </div>


        <div className="flex flex-col lg:flex-row justify-center flex-wrap mt-[3.458em] mx-auto w-[90%] max-w-[1650px]  space-y-10 lg:space-y-0 ">
            {promo?.images?.map((picture,index) => 
              <div key={index} className=" mx-auto ">
                <Image priority width={0} height={0} sizes='100vw' className="w-[600px] object-contain" src={picture?.poster} alt={picture?.caption} />
              </div>
              
            )}
        </div>

 
        <div className='flex mx-auto w-[80%] max-w-[1650px] mt-20'>
          <div className='flex flex-col justify-around w-full '>
              <div className='flex flex-row items-center'>
                  <span className="border-l-[8px] md:border-l-[10px] h-[30px] md:h-[40px] border-mainOrange"></span>
                  <h2 className='text-mainBrown text-lg md:text-2xl font-extrabold ml-3 md:ml-6 tracking-[0.95px]'>Syarat & Ketentuan</h2>
              </div>

              <div className='bg-[#E7E7E7] p-[25px] mt-10 rounded-[12.91px] text-[12px] md:text-sm'>
                  <div className='p-2 md:px-8 h-[320px] overflow-y-auto custom-scrollbar-cc'>
                      <PortableTextRenderer value={matchingLayanan?.syaratKetentuan} />
                  </div>
              </div>
          </div>
                    
        </div>
          
        <Link href="https://wa.me/628112681977" passHref>
          <button className="consult-now-btn lg:text-[24px] md:text-[20px] text-[16px] flex justify-center items-center w-[13.167em] h-[3.184em] mx-auto mt-[90px] rounded-[30px] shadow-button-tw">
            <div className="text-[0.875em] font-semibold text-[#503129]">Daftar Sekarang</div>
          </button>
        </Link>

        <div className="pt-[2em] mb-[7.29em] text-[#503129] tracking-[1.1px] lg:text-[24px] md:text-[20px] text-[16px] mx-auto w-full">
            <div className="h-[0.75em] w-full bg-[#FF9704] mt-[115px] mb-[3em]"></div>
            <h2 className="mx-auto text-center font-extrabold text-[1em] 2md:mb-[20px] mb-[25px]">Departemen dan Layanan Lainnya</h2>
        
            <Department service={matchingLayanan?.name} departemen={departemen} layanan={layanan}/>              
        
        </div>

    </div>
  )
}

