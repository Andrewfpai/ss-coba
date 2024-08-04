"use client"

import React, {useState, useEffect, useReducer, } from 'react';

import Image from 'next/image';
import "./style.css";

import Link from "next/link";
import {useRouter} from 'next/navigation';
// The Code below is so unstructured and chaotic. it's unmodifiable. 
// Note : props.departemen = the whole list of departments
//        props.department = the department in the route 'departemen-kami' (if any) (string)


const initialState = {
  showingAllDepartment: false,
  showingAllService: false,
  showingNumber: 3,
  departmentDisplay: [],
  serviceDisplay: [],
  finalAdditionDepartment: 0,
  finalAdditionService: 0
}

const ACTIONS = {
  SET_SHOWING_NUMBER: "setShowingNumber",
  SET_SHOWING_ALL_DEPARTMENT:"setShowingAllDepartment",
  SET_SHOWING_ALL_SERVICE: "setshowingAllService",
  SET_DEPARTMENT_DISPLAY:"setDepartmentDisplay",
  SET_SERVICE_DISPLAY:"setServiceDisplay",
  SET_FINAL_ADDITION_DEPARTMENT:"setFinalAdditionDepartment",
  SET_FINAL_ADDITION_SERVICE:"setFinalAdditionService",
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_SHOWING_ALL_DEPARTMENT:
      return { ...state, showingAllDepartment: action.payload };
    case ACTIONS.SET_SHOWING_ALL_SERVICE:
      return { ...state, showingAllService: action.payload };
    case ACTIONS.SET_SHOWING_NUMBER:
      return { ...state, showingNumber: action.payload };
    case ACTIONS.SET_DEPARTMENT_DISPLAY:
      return { ...state, departmentDisplay: action.payload };
    case ACTIONS.SET_SERVICE_DISPLAY:
      return { ...state, serviceDisplay: action.payload };
    case ACTIONS.SET_FINAL_ADDITION_DEPARTMENT:
      return { ...state, finalAdditionDepartment: action.payload };
    case ACTIONS.SET_FINAL_ADDITION_SERVICE:
      return { ...state, finalAdditionService: action.payload };
    default:
      return state;
  }
};

const Department = (props) => {

  

      //useReducer
      const [state, dispatch] = useReducer(reducer, {
        ...initialState,
        departmentDisplay: props.departemen?.slice(0, initialState.showingNumber),
        serviceDisplay: props.layanan?.slice(0, initialState.showingNumber)
      });

      // Change the number of box showing each window width
      useEffect(() => {
        const handleResize = () => {
           if (window.innerWidth <= 640 && window.innerWidth > 335) {
              dispatch({ type: ACTIONS.SET_SHOWING_NUMBER, payload: 2 })
            } else if (window.innerWidth > 1820)  {
              dispatch({ type: ACTIONS.SET_SHOWING_NUMBER, payload: 4 })
            } else if (window.innerWidth <= 335) {
              dispatch({ type: ACTIONS.SET_SHOWING_NUMBER, payload: 1 })
            } else {
              dispatch({ type: ACTIONS.SET_SHOWING_NUMBER, payload: 3 })
            }
          };

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

      // Fix The 'Justify-Between' Problem
      useEffect(() => {
        if ((props.departemen?.length - (props.department ? 1 : 0)) % state.showingNumber != 0 && state.showingNumber > 2) {
          dispatch({ type: ACTIONS.SET_FINAL_ADDITION_DEPARTMENT, payload: state.showingNumber - ((props.departemen?.length - (props.department ? 1 : 0)) % state.showingNumber)});
      
        } else {
          dispatch({type: ACTIONS.SET_FINAL_ADDITION_DEPARTMENT, payload: 0});
        }

        if ((props.layanan?.length - (props.service ? 1 : 0)) % state.showingNumber != 0 && state.showingNumber > 2) {
          dispatch({ type: ACTIONS.SET_FINAL_ADDITION_SERVICE, payload: state.showingNumber - ((props.layanan?.length - (props.service ? 1 : 0)) % state.showingNumber)});
          } else {
            dispatch({type: ACTIONS.SET_FINAL_ADDITION_SERVICE, payload: 0});
          }
  
      }, [props.departemen,props.layanan,state.showingNumber, props.department, props.service])


      // Lihat Sebagian & Lihat Selengkapnya
      useEffect(() => {
        if (!state.showingAllDepartment) {
          dispatch({ type: ACTIONS.SET_DEPARTMENT_DISPLAY, payload: props.departemen?.filter(content => content.name !== props.department).slice(0, state.showingNumber) });
          } else {
            dispatch({ type: ACTIONS.SET_DEPARTMENT_DISPLAY, payload: props.departemen })
          }

        if (!state.showingAllService) {
          dispatch({ type: ACTIONS.SET_SERVICE_DISPLAY, payload: props.layanan?.filter(content => content.name != props.service).slice(0, state.showingNumber) });
        } else {
          dispatch({ type: ACTIONS.SET_SERVICE_DISPLAY, payload: props.layanan});
        }
    
      }, [props.departemen, props.department,props.layanan, props.service,state.showingNumber, state.showingAllDepartment, state.showingAllService]); {/*Removed department, layanan,*/}

    const handleSeeMoreDepartment = () => {
        dispatch({ type: ACTIONS.SET_SHOWING_ALL_DEPARTMENT, payload: !state.showingAllDepartment });
    };
    
    const handleSeeMoreService = () => {
      dispatch({ type: ACTIONS.SET_SHOWING_ALL_SERVICE, payload: !state.showingAllService });
    }

    // Handle routing bug for safari
    const router = useRouter();

    const handleRouter = (path) => {
      router.push(path);
    }
  

  return (
    <div id="department" className="font-raleway text-[#503129] tracking-[1.1px] lg:text-[24px] md:text-[20px] text-[16px] max-w-[1650px] mx-auto w-[90%]">
        <h2 className={props.department || props.service ? "hidden" : "mt-[70px] mx-auto text-center font-extrabold text-[1em] 2md:mb-[20px] mb-[25px]"}>Departemen dan Layanan</h2>

        {/*department*/}
        <div className="mb-[60px]">

            <div className="flex gap-[12px] items-center mb-[30px] justify-normal">
                <div className="bg-[#FF9704] w-[0.4167em] h-[1.6667em]"></div>
                <h3 className="font-semibold">Departemen</h3>
            </div>
            
            <div className="department-service-container flex justify-between flex-wrap 2md:gap-[1.25em] 2md:gap-y-[2em] gap-[0.75em] select-none">

                {state.departmentDisplay.map((content,index) => {
                  if (content.name != props.department) {
                    return (
                        
                        <div onClick={() => handleRouter("/departemen-kami/"+content.href)} key={index} className="department-service-box department-gradient relative 2l:w-[24.1875em] sm:w-[31%] 2xs:w-[48%] w-[70%] lg:h-[15.625em] h-[13em] rounded-[15px] font-bold text-[0.667em] tracking-[0.4px] sm:mx-0 mx-auto">
                            <div className="center-absolute-shit"> {/*w-full h-full flex flex-col items-center justify-center gap-[1.25em]*/}
                              <Image width={0} height={0} sizes='100vw' className="w-[3.5em] mx-auto mb-[1.25em]" src={content.icon} alt={content.name + " - Sunrise Medika"} />
                              <h3 className="text-center">{content.name}</h3>
                            </div>
                        </div>

                  // <div key={index} className="department-service-box department-gradient 2l:w-[24.1875em] sm:w-[31%] 2xs:w-[48%] w-[70%] lg:h-[15.625em] h-[13em] rounded-[15px] font-bold text-[0.667em] tracking-[0.4px] sm:mx-0 mx-auto">
                  // <Link href={"/departemen-kami/"+content.href} className="flex flex-col items-center justify-center gap-[1.25em] w-full h-full relative z-[50]">
                  //   <Image  width={0} height={0} sizes='100vw' className="w-[3.5em] relative z-[100]" src={content.icon} alt="" />
                  //   <h3 className="relative z-[100]">{content.name}</h3>
                  // </Link>
                  // </div>
                      
                    )
                  }
                })}

                {state.showingAllDepartment ? Array.from({ length: state.finalAdditionDepartment }, (_, index) => (
                    <div key={index} className="text-[0.667em] 2l:w-[24.1875em] sm:w-[31%] 2xs:w-[48%] w-[70%] lg:h-[15.625em] h-[13em]">
                            
                    </div>
                ))
            :
            null
            }
    
            </div>
            <button className="see-more-btn text-[0.6em] font-semibold flex justify-center items-center w-[13em] h-[3.8em] bg-[#FFE97B] rounded-[1.35em] shadow-button-tw mx-auto mt-[3.75em] text-[#503129] tracking-[0.2px]" onClick={handleSeeMoreDepartment}>{state.showingAllDepartment ? "Lihat Sebagian" : "Lihat Selengkapnya"}</button>

        </div>


        {/*Layanan*/}
        <div>

            <div className="flex gap-[12px] items-center mb-[30px] justify-normal">
                <div className="bg-[#FF9704] w-[0.4167em] h-[1.6667em]"></div>
                <h3 className="font-semibold">Layanan</h3>
            </div>
            
            <div className="department-service-container flex justify-between flex-wrap 2md:gap-y-[2em] 2md:gap-x-[1.25em] gap-[0.75em] select-none">

                {state.serviceDisplay?.map((content,index) => {
                  if (content.name != props.service) {
                    return (
                      <div key={index} onClick={() => handleRouter("/layanan-kami/"+content.href)} className="department-service-box service-gradient relative 2l:w-[24.1875em] sm:w-[31%] 2xs:w-[48%] w-[70%] lg:h-[15.625em] h-[13em] rounded-[15px] font-bold text-[0.667em] tracking-[0.4px] sm:mx-0 mx-auto"> {/**/}
                            <div className="center-absolute-shit">
                              <Image width={0} height={0} sizes='100vw' className="w-[3.5em] mx-auto mb-[1.25em]" src={content?.icon} alt={content.name + " - Sunrise Medika"} />
                              <h3 className="text-center">{content?.name}</h3>
                            </div>
                            <div className={content?.isPromo?'promo absolute top-[0.75em] left-[0.8em] bg-[#FF0000] w-[4.625em] h-[1.875em] rounded-[1.25em] pt-[0.3em] text-white':'hidden'}>
                                <div className="font-black text-center text-[0.875em]">PROMO</div>
                            </div>
                      </div>

                        // <div key={index} className="department-service-box service-gradient relative 2l:w-[24.1875em] sm:w-[31%] 2xs:w-[48%] w-[70%] lg:h-[15.625em] h-[13em] rounded-[15px] font-bold text-[0.667em] tracking-[0.4px] sm:mx-0 mx-auto">
                        // <Link key={index} href={"/layanan-kami/"+content.href} className="w-full h-full flex flex-col items-center justify-center gap-[1.25em]">
                        //   <Image width={0} height={0} sizes='100vw' className="w-[3.5em]" src={content?.icon} alt="" />
                        //   <h3 className="">{content?.name}</h3>
                        //   <div className={content?.isPromo?'promo absolute top-[0.75em] left-[0.8em] bg-[#FF0000] w-[4.625em] h-[1.875em] rounded-[1.25em] pt-[0.3em] text-white':'hidden'}>
                        //       <div className=" font-black text-center text-[0.875em]">PROMO</div>
                        //   </div>
                        // </Link>
                        // </div>
                 
                    )
                  }
                })}

                {state.showingAllService ? Array.from({ length: state.finalAdditionService }, (_, index) => (
                    <div key={index} className="text-[0.667em] 2l:w-[24.1875em] sm:w-[31%] 2xs:w-[48%] w-[70%] lg:h-[15.625em] h-[13em]">
                            
                    </div>
                ))
            :
            null
            }
                
            </div>
            <button className="see-more-btn text-[0.6em] font-semibold flex justify-center items-center w-[13em] h-[3.8em] bg-[#FFD604] rounded-[1.35em] shadow-button-tw mx-auto mt-[3.75em] text-[#503129] tracking-[0.2px]" onClick={handleSeeMoreService}>{state.showingAllService ? "Lihat Sebagian" : "Lihat Selengkapnya"}</button>

        </div>
        


    </div>
  )
}

// Department.propTypes = {
//   department: PropTypes.string,
//   service: PropTypes.string,
  
// }

// Department.defaultProps = {
//   department: "",
//   service: "",
// }


export default Department
