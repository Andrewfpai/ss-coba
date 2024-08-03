"use client"

import React , {useState,useEffect, useRef} from 'react';
import Logo from './assets/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import './style.css'
import { usePathname } from 'next/navigation';
import brainIcon from "./assets/brain--medical-health-brain.svg"

const NavbarClient = (props) => {

    const {department, layanan} = props

    let routes = [
        {
            "name":"Home",
            "href":"/"
        },
        {
            "name":"Layanan Kami",
            "href":["/departemen-kami", "/layanan-kami"],
        },
        {
            "name":"Tentang Kami",
            "href":"/tentang-kami"
        },
    ]

    const [isSwitch, setIsSwitch] = useState(false);

    const handleResize = () => {
      if (window.innerWidth <= 974) {
        setIsSwitch(true);
      } else {
        setIsSwitch(false);
      }
    };

    if (isSwitch) {
        let temp = routes[1];
        routes[1] = routes[2];
        routes[2] = temp;
    }

    useEffect(() => {
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    const pathname = usePathname(); //represent the pathname of each page

    const [isChecked, setIsChecked] = useState(false);
    const checkboxRef = useRef(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (checkboxRef.current && !checkboxRef.current.contains(event.target) && !dropdownRef.current.contains(event.target)) {
              setIsChecked(false);
            } 
          };

        document.addEventListener('mousedown', handleClickOutside);
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);

    const handleCheckbox = (event) => {
        setIsChecked(event.target.checked);
    }


    return (
          <div className="mother-navbar fixed w-full z-[100] 2md:min-h-[120px] sm:h-auto h-[80px] header border-2 bg-[#F0F0F0] "> {/*max-w-[1650px] 2md:min-h-[120px]*/}    
     
            <nav className="w-full min-h-[120px] flex items-center" >
                <div className="w-full 2md:flex justify-between max-h-[120px] 2md:my-auto items-center 2md:px-[50px]">

                    <Link href="/">
                      <div className="flex items-center text-[#503129] sm:gap-[20px] gap-[10px] flex-shrink-0 2md:mr-[30px] 2md:ml-0 2md:static relative sm:top-[24px] sm:ml-[50px] top-[15px] ml-[20px] cursor-pointer">
                          <Image width={0} height={0} sizes='100vw' src={Logo} className='2md:size-[85px] sm:size-[65px] size-[45px]' alt='Logo Sunrise Medika | Pelayanan Klinik dan Laboratorium Kesehatan'/>
                          <h2 className="font-extrabold font-raleway tracking-[1.1px] relative top-[4px] 2md:text-[20px] sm:text-[16px] text-[14px]">SUNRISE MEDIKA</h2>
                      </div>
                    </Link>
                
                    <input className="menu-btn" type="checkbox" id="menu-btn"/>
                    <label className="menu-icon sm:mr-[50px] mr-[20px] relative sm:bottom-[32px] bottom-[35px]" htmlFor="menu-btn"><span className="navicon"></span></label>
                    <div className="menu w-full 2md:h-[75px] 2md:w-[607px] z-100 flex items-center flex-shrink-1 relative 2md:top-[4px] sm:top-[-1px] top-[-25.5px] left-[-2px]">
                        <ul className="flex 2md:flex-row flex-col 2md:gap-0 sm:gap-y-[15px] gap-y-[10px] 2md:justify-between w-full h-auto font-raleway 2md:m-0 sm:ml-[40px] sm:mt-[60px] ml-[20px] mt-[40px] 2md:items-center items-start 2md:text-[14px] sm:text-[18px] text-[12.5px] font-semibold text-[#503129]">

                            {routes.map((route,index) => {
                                
                                let isActive;
                                if (route.name == "Layanan Kami") {
                                  isActive = pathname.startsWith(route.href[0]) || pathname.startsWith(route.href[1]);
                                } else {
                                  isActive = pathname.startsWith(route.href)
                                }
                                
                                if (route.name === "Home" && pathname != "/") {
                                    isActive = false
                                }

                                return (
                                    <li key={index} className="2md:flex justify-center items-center 2md:h-[52px] h-auto 2md:w-auto 2md:m-0">
                                        
                                        {route.name != "Layanan Kami" ?
                                          <Link href={route.href} className={isActive && isChecked === false ? "2md:m-[20px] 2md:w-auto active" : "2md:m-[20px]"}>{route.name}</Link>
                                          :
                                          <div className="">
                                            <input className="dropdown-btn" onChange={handleCheckbox} checked={isChecked} type="checkbox" id="dropdown-btn"/>
                                            <label className={isChecked || isActive ? "2md:m-[20px] active layanan-hover" : "2md:m-[20px] layanan-hover"} ref={checkboxRef} htmlFor="dropdown-btn">{route.name}</label>
                                            
                                            <div className="dropdown " ref={dropdownRef}>
                                                <div className="clip-path"></div>

                                                <div className="w-full h-full">
                                                {/*Departments Border Line*/}
                                                <div className="w-[2.5px] h-[210px] absolute bg-[rgba(189,189,189,0.8)] left-[225px] top-[35px] 2md:block hidden"></div>
                                                <div className="w-[2.5px] h-[210px] absolute bg-[rgba(189,189,189,0.8)] left-[430px] top-[35px] 2md:block hidden"></div>
                                                
                                                {/*ServicesBorder Line*/}
                                                <div className="w-[2.5px] h-[165px] absolute bg-[rgba(189,189,189,0.8)] left-[225px] top-[328px] 2md:block hidden"></div>
                                                <div className="w-[2.5px] h-[165px] absolute bg-[rgba(189,189,189,0.8)] left-[430px] top-[328px] 2md:block hidden"></div>
                                                
                                                <ul className="2md:!h-[54.4%] flex 2md:flex-row 2md:flex-wrap 2md:pt-[25px] 2md:pb-[45px] 2md:pl-[40px] 2md:gap-x-[30px] 2md:gap-y-0 flex-col sm:gap-y-[20px] gap-y-[10px] 2md:mt-0 sm:mt-[20px] mt-[14px]">
                                                    {department?.map((department,index) => {

                                                        const isActiveDepartment = pathname.slice(route.href[0].length+1).startsWith(department.href);
                                                       
                                                        
                                                        return (
                                                            <li key={index} className="flex items-center gap-[12px] 2md:w-[180px] w-auto 2md:h-[50px] cursor-pointer">
                                                                                                  
                                                                <Image  width={0} height={0} sizes='100vw' className='sm:w-[28px] w-[15px]' src={department.icon} alt={department.name}/>
                                                          
                                                                <Link href={route.href[0]+"/"+department.href} className={isActiveDepartment  ? " active !font-medium" : "!font-medium"}>{department.name}</Link>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>

                                                <ul className="2md:!h-[45.6%] 2md:bg-[rgba(189,189,189,0.3)] flex 2md:flex-row 2md:flex-wrap 2md:pt-[25px] 2md:pb-[45px] 2md:pl-[40px] 2md:gap-x-[30px] sm:gap-y-[20px] gap-y-[10px] 2md:gap-y-[5px] 2md:rounded-b-[15px] flex-col 2md:mt-0 sm:mt-[20px] mt-[10px]">
                                                    {layanan?.map((service,index) => {

                                                        const isActiveService = pathname?.slice(route.href[1].length+1).startsWith(service.href);

                                                        return (
                                                            <li key={index} className="flex items-center gap-[12px] 2md:w-[180px] sm:w-[220px] 2md:h-[50px] cursor-pointer">
                                                                <Image  width={0} height={0} sizes='100vw' className="sm:w-[28px] w-[15px]" src={service.icon} alt={service.name}/>
                                                                <Link href={route.href[1]+"/"+service.href} className={isActiveService  ? "active !font-medium" : "!font-medium"}>{service.name}</Link>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                                </div>
                                                

                                                

                                            </div>
                                          </div>
                                        }
                                    </li>
                                )
                            })}
                            <Link href="https://wa.me/628112681977" passHref><li className="consult-now-btn hidden 2md:flex justify-center items-center 2md:w-[167px] 2md:h-[50px] sm:w-[130px] sm:h-[40px] w-[110px] h-[40px] 2md:mr-0 mx-auto 2md:ml-[16px] rounded-[20px] shadow-button-tw">Daftar Sekarang</li></Link>
                        </ul>

                    </div>
                </div>
            
            </nav>
          </div>
    );
  }
        
export default NavbarClient;