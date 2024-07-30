// pages/faq.js
"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import BlockContent from '@sanity/block-content-to-react';
import arrow from './assets/arrow.svg';
import './style.css';

import PortableTextRenderer from '@/app/_components/portableText/PortableTextRenderer';


const FAQS = (props) => {
  const letters = ["F", "A", "Q", "s"];

  return (
    <div className="h-auto w-[90%] mx-auto max-w-[1650px] lg:text-[14px] sm:text-[13px] text-[11px] font-raleway text-[#503129] flex gap-[2em] mt-[-200px] pb-[150px] tracking-[1.1px] font-medium">
      {/* {console.log("faq",faq)} */}
      <div className="faq-container bg-[#F6F6F6] w-[85%] flex flex-col rounded-[15px] pl-[3.5%] pr-[5.5%] pt-[1.5em] pb-[2.5em]">
        {props.faq.map((item, index) => (
          <div key={index} className="title-container mt-[1.21em]">
            <input className="title-btn hidden" type="checkbox" id={"title-btn" + index} />
            <label className="title gap-[1.07em] pt-[2.71em] pb-[1.5em] flex items-center" htmlFor={"title-btn" + index}>
              <div className="bg-[#FF9704] w-[0.714em] h-[2.857em]"></div>
              <div className="w-[90%] ">{item?.pertanyaan}</div>
              <div className="size-[1.714em] rounded-full bg-[#FF9704] flex justify-center items-center my-auto">
                <Image width={0} height={0} sizes='100vw' className="arrow-image w-[0.8em] relative left-[0.05em]" src={arrow} alt="Arrow Icon Sunrise Medika" />
              </div>
            </label>
            <div className="text bg-[#E7E7E7] rounded-[15px] font-semibold ">
            <PortableTextRenderer value={item?.jawaban} />

              {/* <BlockContent blocks={item?.jawaban} serializers={serializers} /> */}
            </div>
            
          </div>
        ))}
      </div>

      <div className="font-extrabold text-[4.7em] h-[300px] flex flex-col justify-center relative bottom-[20px] w-[10%] my-auto">
        {letters.map((letter, index) => (
          <div key={index} className="h-[1em]">{letter}</div>
        ))}
      </div>
    </div>
  );
};

export default FAQS;
