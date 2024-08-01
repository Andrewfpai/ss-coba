"use client"

import Image from 'next/image';
import Link from 'next/link';
import icon from './assets/microscope.svg';

import './style.css';

// import SAMPLE from '../components/heading/assets/heading-illustration.jpg';
import { useState, useEffect } from 'react';
import { getDokter, getInformation, getTentangKami } from '@/sanity/sanity.query';
// import {SanityImageComponent} from '@/sanity/sanity.image'
// import { SanityImage } from "sanity-image"
import { urlFor } from '@/sanity/sanity.client';
import {getCroppedImageSrc} from '@/sanity/sanity.image'

import locationIcon from '../_components/information/assets/location-icon.png'
import hourIcon from '../_components/information/assets/hour-icon.png'
import callIcon from '../_components/information/assets/call-icon.png'
import arrowIcon from '../_components/information/assets/arrow.png'
import PortableTextRenderer from '@/app/_components/portableText/PortableTextRenderer';





export default function AboutClient(props){
  
  const {dokter, information, tentangKami} = props

      const [boxPerRow, setBoxPerRow] = useState(0);
      const [finalAddition, setFinalAddition] = useState(0);

  
      useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth > 1375 && window.innerWidth <= 1735) {
            setBoxPerRow(4);
          } else if (window.innerWidth <= 1375) {
            setBoxPerRow(3);
          } else {
            setBoxPerRow(5);
          }
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

      useEffect(() => {
        // console.log(boxPerRow, dokter.length)
        if (dokter.length % boxPerRow != 0) {
          setFinalAddition(boxPerRow - (dokter.length % boxPerRow))
        }
        
        // console.log(finalAddition)
      }, [boxPerRow, dokter.length, finalAddition])


    return(
        <div className="flex flex-col mx-auto font-raleway lg:text-[24px] md:text-[16px] text-[13px] pb-[70px] lg:pb-[150px]">
            {/* {console.log(tentangKami)} */}
            <div className="flex flex-col md:flex-row max-w-[1650px] w-[90%] mx-auto justify-between mt-[160px] md:mt-[220px] md:space-x-[4.51%]">
                <div className="flex-1 md:w-1/2 p-6 pb-8 md:p-[2.5%] border-mainBrown border-[3px] rounded-[15px] relative  pt-6  max-w-full order-2 md:order-1">
                    <h2 className="text-lg lg:text-2xl 2xl:text-3xl font-extrabold text-mainBrown leading-[30px] tracking-[0.95px] bg-white p-3 absolute -top-[30px] lg:-top-[32px] left-[11.3%] ">Visi dan Misi</h2>
            
                        <div className='font-medium leading-5 md:!leading-7 text-xs md:text-sm lg:text-base tracking-[0.30px] xs:tracking-[0.95px] md:tracking-[0.30px] lg:tracking-[0.95px]'>
                          <div className='px-6 pb-6 md:px-[5.35%] '><PortableTextRenderer value={tentangKami?.visi} /></div>
                          <div className='p-6 md:p-[5.35%] bg-[#E7E7E7] rounded-[15px]'><PortableTextRenderer value={tentangKami?.misi} /></div>
                        </div>
              
                          
                        
                      
                    
                </div>
                {/* <p className='leading-5 tracking-[0.30px] xs:tracking-[0.95px] md:tracking-[0.30px] lg:tracking-[0.95px] font-medium text-xs lg:text-[1em]'>Silahkan klik tombol dibawah ini untuk melihat jadwal praktek dokter klinik kami. Untuk pertanyaan atau pembuatan janji konsultasi lebih lanjut, silahkan hubungi kami.</p> */}

                <div className='flex flex-1 w-full md:w-1/2 order-1 md:order-2 mb-[50px] md:mb-0 max-w-[607px]'>
                    {tentangKami.illustrasi?<Image priority width={0} height={0} sizes='100vw' className='w-[607px] rounded-[15px] object-cover object-center shadow-image-cc h-[250px] md:h-auto' src={tentangKami?.illustrasi} alt={'Illustrasi Tentang Kami'}/>:null}
                </div>

            </div>
            

            <div className=''>

              <div className="h-[0.75em] w-full bg-[#FF9704] mt-[120px] mb-[2.08em]"></div>
              
              <div className='max-w-[1650px] w-[90%] mx-auto'>

                <div className='flex flex-row items-center mt-14 md:mt-24 mb-[40px]'>
                    <span className="border-l-[8px] md:border-l-[10px] h-[30px] md:h-[40px] border-mainOrange"></span>
                    <h2 className='text-mainBrown text-lg md:text-2xl font-extrabold ml-3 md:ml-6 tracking-[0.95px]'>Dokter Kami</h2>
                </div>

                <div className="our-doctors-container flex flex-wrap justify-between gap-[20px] gap-y-[2.834em]">
                  {dokter?.map((doctor, index) => 
                    <div key={index} className=" w-[12.33em] h-[18.75em] shadow-button-tw rounded-[15px] relative ">
                      <div className="img-container w-full h-[63.56%] flex shadow-image-dokter-cc rounded-[15px]">
                        {/* {console.log(doctor.foto2)} */}
                        {/* {dokter?<Image priority width={0} height={0} sizes='100vw' src={urlFor(doctor?.foto2).width().url()} className='w-full object-cover rounded-t-[15px] ' alt={doctor?.name+"- Sunrise Medika"}/>:null} */}
                        {dokter?<Image priority width={0} height={0} sizes='100vw' src={getCroppedImageSrc(doctor?.foto)} className='w-full object-cover rounded-t-[15px] shadow-image-dokter-cc relative z-0' alt={doctor?.name+"- Sunrise Medika"}/>:null}
                        {/* {dokter?<Image priority width={0} height={0} sizes='100vw' src={doctor?.foto1} className='w-full object-cover rounded-t-[15px] ' alt={doctor?.name+"- Sunrise Medika"}/>:null} */}
                        
                        {/* <SanityImage id={dokter?.name} hotspot={dokter?.foto?.hotspot} crop={dokter?.foto?.crop}/> */}
                      </div>

                      <div className="z-50 w-full h-[36.44%] bg-[#FFE97B] rounded-b-[15px] shadow-button-outside-tw flex flex-col items-center tracking-[0.033em] py-[1em] ">
                        <div className="mb-[0.7em] w-[1.3em] ">
                          {doctor.icon?<Image priority width={0} height={0} sizes='100vw' className="w-full" src={doctor?.icon} alt={"Icon "+doctor?.name} />:null}
                          
                        </div>
                        <h3 className="text-[0.6667em] text-[#503129] font-bold mb-[0.15em] text-center">{doctor.name}</h3>
                        <h4 className="text-[0.583em] text-[#C7A700] font-medium text-center">{doctor.spesialis}</h4>
                        
                      </div>
                    </div>
                  )}


                  {Array.from({ length: finalAddition }, (_, index) => (
                    <div key={index} className=" w-[12.33em] h-[0]">
                            
                    </div>
                  ))}

                </div>
              </div>
              </div>


            <div className='max-w-[1650px] w-[90%] mx-auto'>
              <div className='flex flex-row items-center mt-14 md:mt-24 mb-4 md:mb-8'>
                  <span className="border-l-[8px] md:border-l-[10px] h-[30px] md:h-[40px] border-mainOrange"></span>
                  <h2 className='text-mainBrown text-lg md:text-2xl font-extrabold ml-3 md:ml-6 tracking-[0.95px]'>Kontak Kami</h2>
              </div>

              
              <div className='flex flex-col lg:flex-row justify-between  gap-[3.11%] font-raleway '>
                  
                  {/* LEFT SECTION */}
                  <div className='bg-[#F6F6F6] rounded-[10px] md:bg-none md:border-mainBrown md:border-[3px] md:rounded-[15px] relative mb-6 lg:mb-0 px-8 pr-5 lg:pr-[2.8%] lg:px-[3.74%] py-6 lg:py-10 w-full lg:max-w-[58.8%] drop-shadow-cc'>
                      

                      {/* Lokasi */}
                      <div className='flex flex-row justify-between items-center space-x-[4.20%] text-sm md:bg-[#BDBDBD]/30 rounded-[15px] p-4 lg:py-4 lg:pl-5 lg:pr-12 lg:-ml-5 -ml-4 hover:bg-mainGray/60 hover:cursor-pointer'>
                          <div className='flex flex-col'>
                              <div className='flex flex-row items-center gap-4 '>
                                  <Image width={0} height={0} sizes='100vw' src={locationIcon} alt='Location Icon'/>
                                  <h3 className='font-semibold text-mainBrown tracking-[0.95px] text-[1em]'>Lokasi</h3>
                              </div>
                              <p className='text-xs tracking-[0.30px] xs:tracking-[0.95px] md:tracking-[0.30px] lg:tracking-[0.95px] lg:text-[1em] leading-5  font-medium mt-2 lg:mt-4 ml-10 lg:ml-0'>{information?.lokasi}</p>
                          </div>

                          
                              <Image width={0} height={0} sizes='100vw' className='w-6 h-6'src={arrowIcon} alt='Arrow Icon'/>
                          
                          
                          
                      </div>

                      <div className='flex flex-col lg:flex-row leading-5 tracking-[0.95px] text-sm lg:space-x-[19.86%] mt-3 lg:mt-9'>

                          {/* JAM OPERASIONAL */}
                          <div className='flex flex-col'>
                              <div className='flex flex-row items-center gap-4'>
                                  <Image width={0} height={0} sizes='100vw' src={hourIcon} alt='Clock Icon'/>
                                  <h3 className='font-semibold text-mainBrown tracking-[0.95px]'>Jam Operasional</h3>
                              </div>

                              <div className='flex flex-row text-xs lg:text-[1em]  leading-5 tracking-[0.30px] xs:tracking-[0.95px] md:tracking-[0.30px] lg:tracking-[0.95px] space-x-12 ml-10 lg:ml-0 font-medium mt-2 lg:mt-4'>
                                  <div className='flex flex-col space-y-[1.05%]'>
                                  {information?.jamBuka?.map((jamBuka, index)=>{
                                        return <div key={index}>{jamBuka?.hari}</div>
                                      })}
                                  </div>
                                  <div className='flex flex-col space-y-[1.05%]'>
                                  {information?.jamBuka?.map((jamBuka, index)=>{
                                        return <div key={index}>{jamBuka?.jamBuka}</div>
                                      })}
                                  </div>
                              </div>
                          </div>

                          {/* KONTAK KAMI */}
                          <div className='flex flex-col tracking-[0.30px] xs:tracking-[0.95px] md:tracking-[0.30px] lg:tracking-[0.95px] leading-5 mt-3 lg:mt-0'>
                              <div className='flex flex-row items-center gap-4'>
                                  <Image width={0} height={0} sizes='100vw' src={callIcon} alt='Call Icon'/>
                                  
                                  <h3 className='font-semibold text-mainBrown '>Kontak Kami</h3>
                              </div>

                              <div className='font-medium text-xs lg:text-[1em] mt-2 lg:mt-4 ml-10'>{information?.kontak}</div>
                          </div>

                      </div>



                  </div>

                  <div className='border-mainBrown border-[3px] rounded-[15px] relative px-8 lg:px-[3.74%] pt-10 pb-14 lg:pt-16 lg:pb-[3.74%] w-full lg:max-w-[38.16%] mt-8 lg:mt-0'>
                      <h2 className='text-lg lg:text-2xl font-extrabold text-mainBrown leading-[30px] tracking-[0.95px] bg-white p-3 absolute -top-[30px] lg:-top-[32px] left-[5.30%] lg:left-[8.15%] '>Jadwal Praktek Dokter</h2>

                      <div className='flex flex-col text-sm'>
                          
                          <p className='leading-5 tracking-[0.30px] xs:tracking-[0.95px] md:tracking-[0.30px] lg:tracking-[0.95px] font-medium text-xs lg:text-[1em]'>{information?.jadwalPraktek}</p>
                          
                          <div className='flex flex-row mt-5 lg:mt-8'>

                          <button className="text-xs lg:text-[1em] font-semibold px-[20px] py-[10px] lg:px-[30px] lg:py-3 border-[3px] border-mainBrown rounded-[10px] lg:rounded-[20px]  hover:shadow-button-tw hover:text-mainBrown/70 hover:border-transparent ease-out duration-300">Lihat Jadwal</button>
                              
                          <Link href="https://wa.me/628112681977" passHref><button className="text-xs lg:text-[1em] font-semibold px-[20px] py-[10px] lg:px-[30px] lg:py-3 border-none bg-none hover:text-orangeBrown">Hubungi Kami</button></Link>
                          </div>

                      </div>

                  </div>
              </div>
              </div>


        </div>
    )
}