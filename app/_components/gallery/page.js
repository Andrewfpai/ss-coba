"use client"

import React from 'react';
import Image from 'next/image';
import { Autoplay, Navigation, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import arrow from "./assets/arrow.svg"
import "./style.css";


const Gallery = (props) => {

  return (
    <div className="text-[24px] font-raleway sm:h-[850px] xs:h-[700px] h-[600px] bg-[#F0F0F0] mx-auto select-none">

      <div className="h-[0.75em] w-full bg-[#FF9704] mt-[115px] mb-[2.08em] mx-auto"></div>
      <h2 className="font-extrabold text-[#503129] text-center tracking-[1.1px] mb-[2.08em]">Galeri Klinik</h2>

      
    <Swiper className="swiper_container w-[90%] mx-auto max-w-[1650px]" //lg:!scale-100 sm:!scale-[0.8] !scale-[0.7] //lg:!scale-100 sm:!scale-[0.8] xs:!scale-[1]
      spaceBetween={10}
      slidesPerView={'auto'} // 'auto'
      initialSlide={1}

      breakpoints= {{
        // when window width is >= 640px
        640: {
          spaceBetween:10,
          slidesPerView:'auto',
          initialSlide:1,
        },
      }}

    modules={[Autoplay,Navigation, EffectCoverflow]}
    navigation={{
    nextEl:'.swiper-button-next', 
    prevEl:'.swiper-button-prev',
    clickable:true,
    }}
    effect={'coverflow'}
    coverflowEffect={{
        rotate:0,
        stretch:0,
        depth:400,
        modifier:3,
        slideShadows:false,
    }}
    grabCursor={true}
    loop={false} 
    centeredSlides={true}
    >
    
      {props.gallery.map((photo, index) => (
          <SwiperSlide key={index} className="swiper-slide sm:!w-[400px] xs:!w-[300px] !w-[200px]"> {/**/}
            <div className="bg-[#F0F0F0] mx-auto my-auto flex w-full rounded-[17px] justify-center items-center ">
              <Image width={0} height={0} sizes='100vw' src={photo.src} alt="Galeri Sunrise Medika" className="gallery-photo w-[95%] rounded-[17px] object-contain object-center"/>
            </div>
        
          </SwiperSlide>
      ))}

    <div className="slider-controler md:w-[90vw] w-full absolute bottom-[50%] max-w-[1650px] ">
      <div className="flex justify-between lg:px-[10%]"> {/**/}
        <div className="swiper-button-prev z-[300]"><Image width={0} height={0} sizes='100vw' src={arrow} alt="Arrow Icon Sunrise Medika"/></div>
        <div className="swiper-button-next z-[300]"><Image width={0} height={0} sizes='100vw' className="rotate-180" src={arrow} alt="Arrow Icon Sunrise Medika"/></div>
      </div>
    </div>

    </Swiper>
    </div>
  )
}

export default Gallery
