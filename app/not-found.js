import React from 'react';
import notFoundIcon from '../public/not-found.svg';
import Image from 'next/image';

const NotFound = () => {
  return (
    <div className="min-h-[600px] h-[100vh] pt-[150px] bg-[#FF9704]">
      <div className="">
        <Image className="w-[60%] max-w-[500px] mx-auto sm:mb-[82px] mb-[50px]" src={notFoundIcon} alt="Page Not Found | Sunrise Medika | Pelayanan Klinik dan Laboratorium Kesehatan"/>
        <h2 className="w-[50%] mx-auto font-raleway font-semibold text-[#FFFFFF] text-center text-[20px] tracking-[1.3px] leading-relaxed">Maaf, halaman yang Anda cari tidak tersedia...</h2>
      </div>
    </div>
  )
}

export default NotFound
