

import Image from 'next/image'
import Link from 'next/link';
import './style.css'




import CalendarIcon from './assets/calendar-icon.png'
import jamIcon from './assets/jam-icon.png'


import PortableTextRenderer from '@/app/_components/portableText/PortableTextRenderer';


import Department from '@/app/_components/department/page';


export default function Departments(props){

    const {departemen, layanan, params} = props

   

      const matchingDepartemen = departemen?.find((departemen)=>{
        return departemen?.href?.toLowerCase() === params?.departemen?.toLowerCase()
      })

     
    return(
        <div id="department" className="flex flex-col mx-auto font-raleway bg-[#F6F6F6] ">
            {/* {console.log("departemen",departemen)} */}
            <div className='flex flex-col bg-mainGray py-9 mt-[120px] md:mt-[170px] '>
                {matchingDepartemen?<Image width={0} height={0} sizes='100vw' className='sm:w-[60px] w-[20px] mx-auto' src={matchingDepartemen?.icon} alt={"Icon "+matchingDepartemen.name}/> :null}
                {/* {console.log("matchingDepartemen",matchingDepartemen)} */}
                {/* {console.log("Foto",matchingDepartemen?.dokter[0]?.foto)} */}

                {matchingDepartemen && (
                    <h1 className='mt-5 text-center text-lg xs:text-2xl md:text-[32px] text-mainBrown font-bold tracking-[0.95px]'>
                        {matchingDepartemen?.name}
                    </h1>
                    // <h1 className='px-7 py-[10px] text-center text-[32px] text-mainBrown font-bold tracking-[0.95px]'>saraf</h1> 

                )}
                {/* <h1 className='px-7 py-[10px] text-center text-[32px] text-mainBrown font-bold tracking-[0.95px]'>{params.departemen}</h1> */}
            </div>

            <div className='flex mx-auto w-[80%] max-w-[1650px] '>
                
                <div className='flex flex-col justify-around w-full flex-1'>
                    <div className='flex flex-row items-center mt-14 md:mt-24'>
                        <span className="border-l-[8px] md:border-l-[10px] h-[30px] md:h-[40px] border-mainOrange"></span>
                        <h2 className='text-mainBrown text-lg md:text-2xl font-extrabold ml-3 md:ml-6 tracking-[0.95px]'>Dokter Kami</h2>
                    </div>

                    {matchingDepartemen?.dokter?.map((item, index)=>{

                    return(
                    <div key={index} className='flex flex-1 flex-col md:flex-row mt-6 md:mt-10 md:space-x-[6.51%] '>
                        

                        <div className='max-w-[523px]'>
                            <Image priority width={0} height={0} sizes='100vw' className="w-[523px] rounded-[15px] object-cover object-top md:object-center h-[170px] md:h-[360px]" src={item?.foto} alt={"Foto "+item?.nama}/>
                        </div>

                            {/* SECTION KANAN DOKTER KAMI */}
                        
                            <div className='relative mt-8 mb-12 md:mt-12 w-full md:min-w-[400px] md:max-w-[570px] text-md md:text-2xl'>
                                {/* {console.log(item)} */}
                                <h3 className='text-mainBrown text-[1em] font-bold tracking-[0.95px] ml-0 md:ml-8'>{item?.nama}</h3>
                                <p className='text-[#a7a7a7] text-[0.834em] font-medium tracking-[0.95px] ml-0 md:ml-8 md:mt-1'>{item?.jenisDokter}</p>

                                <div className='md:border-mainBrown md:border-[3px] md:rounded-[15px] relative md:px-[12.3%] md:pt-6 pb-[3.74%] max-w-full mt-5 md:mt-11 text-md md:text-2xl'>
                                    <h2 className='text-[1em] font-bold md:font-extrabold text-mainBrown leading-[30px] tracking-[0.95px] bg-[#F6F6F6] md:p-3 md:absolute md:-top-[32px] md:left-[16px] '>Jadwal Praktek Dokter</h2>
                                    
                                    <div className='flex flex-row md:justify-between space-x-4 md:space-x-[3%] text-[12px] mt-1 md:mt-0 md:text-sm'>
                                        <div className='flex flex-row text-[1em]  items-center'>
                                            <Image width={0} height={0} sizes='100vw' className='w-5 h-5 md:w-[26px] md:h-[26px]' src={CalendarIcon} alt='Calendar Icon'/>

                                            <div className='flex flex-col space-y-2'>
                                                {item?.jadwalPraktek ? (
                                                    item.jadwalPraktek.map((jadwal, index) => (
                                                        <p key={index} className='leading-5 tracking-[0.95px] font-medium ml-2 md:ml-4' >
                                                            {jadwal?.hari}
                                                        </p>
                                                    ))
                                                ) : (
                                                    <p className='leading-5 tracking-[0.95px] font-medium ml-2 md:ml-4'>Data Tidak Tersedia</p>
                                                )}
                                            </div>
                                            
                                        </div>
                                        <div className='flex flex-row text-[1em] items-center'>
                                            <Image width={0} height={0} sizes='100vw' className='w-5 h-5 md:w-[26px] md:h-[26px]' src={jamIcon} alt='Clock Icon'/>
                                            <p className='leading-5 tracking-[0.95px]  font-medium ml-2 md:ml-4'>Sesuai Perjanjian</p>
                                        </div>
                                    </div>
                                </div>

                                <Link href="https://wa.me/628112681977" passHref><button className="text-[0.667em] font-raleway font-semibold px-[20px] py-[10px] md:px-[30px] md:py-[17px] bg-brightYellow rounded-[10px] md:rounded-[20px] shadow-button-tw hover:bg-mainOrange ease-out duration-300 mt-2 md:mt-11">Hubungi Dokter</button></Link>
                            </div>
                    </div>
                            )})} 
                </div>

            </div>


            <div className='flex mx-auto w-[80%] max-w-[1650px]'>
                <div className='flex flex-col justify-around w-full '>
                    <div className='flex flex-row items-center mt-12'>
                        <span className="border-l-[8px] md:border-l-[10px] h-[30px] md:h-[40px] border-mainOrange"></span>
                        <h2 className='text-mainBrown text-lg md:text-2xl font-extrabold ml-3 md:ml-6 tracking-[0.95px]'>Syarat & Ketentuan</h2>
                    </div>

                    <div className='bg-[#E7E7E7] p-[25px] mt-10 rounded-[12.91px] text-[12px] md:text-sm'>
                        <div className='p-2 md:px-8 max-h-[320px] overflow-y-auto custom-scrollbar-cc font-medium leading-6'>
                            <PortableTextRenderer value={matchingDepartemen?.syaratKetentuan} />
                        </div>
                    </div>
                </div>
                    
            </div>

                       
            <div className="h-[0.75em] w-full bg-[#FF9704] mt-[115px] mb-[3em]"></div>

            <div className="pt-[95px] mb-[7.29em] text-[#503129] tracking-[1.1px] lg:text-[24px] md:text-[20px] text-[16px] ">
                <h2 className="mx-auto text-center font-extrabold text-[1em] 2md:mb-[20px] mb-[25px]">Departemen dan Layanan Lainnya</h2>
            
                <Department department={matchingDepartemen?.name} layanan={layanan} departemen={departemen}/>                
            
            </div>


        </div>
    )
}