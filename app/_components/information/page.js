import Image from 'next/image'
import Link from 'next/link';
import locationIcon from './assets/location-icon.png'
import hourIcon from './assets/hour-icon.png'
import callIcon from './assets/call-icon.png'
import arrowIcon from './assets/arrow.png'
import './style.css'


export default function Information(props){

    return(
        <div className='mt-[48px] lg:mt-[72px] max-w-[1650px] w-[90%] mx-auto'>

            <div className='flex flex-col lg:flex-row justify-between  gap-[3.11%] font-raleway '>
                {/* LEFT SECTION */}
                <div className='border-mainBrown border-[3px] rounded-[15px] relative px-8 pr-5 lg:pr-[2.8%] lg:px-[3.74%] py-6 lg:py-10 w-full lg:max-w-[58.8%]'>
                    <h2 className='text-lg lg:text-2xl font-extrabold text-mainBrown tracking-[0.95px] bg-[#F6F6F6] p-3 absolute -top-[30px] lg:-top-[32px] left-[5.30%]'>Informasi Klinik</h2>

                    {/* Lokasi */}
                    <div className='flex flex-row justify-between items-center space-x-[4.20%] text-sm bg-[#BDBDBD]/30 rounded-[15px] p-4 lg:py-4 lg:pl-5 lg:pr-12 lg:-ml-5 -ml-4 hover:bg-mainGray/60 hover:cursor-pointer'>
                        <div className='flex flex-col'>
                            <div className='flex flex-row items-center gap-4 '>
                                <Image src={locationIcon} alt="Location Icon Sunrise Medika | Pelayanan Klinik dan Laboratorium Kesehatan"/>
                                <h3 className='font-semibold text-mainBrown tracking-[0.95px] text-[1em]'>Lokasi</h3>
                            </div>
                            <p className='text-xs tracking-[0.30px] xs:tracking-[0.95px] md:tracking-[0.30px] lg:tracking-[0.95px] lg:text-[1em] leading-5  font-medium mt-2 lg:mt-4 ml-10 lg:ml-0'>{props.information?.lokasi}</p>
                        </div>

                        
                            <Image className='w-6 h-6'src={arrowIcon} alt="Arrow Icon Sunrise Medika | Pelayanan Klinik dan Laboratorium Kesehatan"/>
                        
                        
                        
                    </div>

                    <div className='flex flex-col lg:flex-row leading-5 tracking-[0.95px] text-sm lg:space-x-[19.86%] mt-3 lg:mt-9'>

                        {/* JAM OPERASIONAL */}
                        <div className='flex flex-col'>
                            <div className='flex flex-row items-center gap-4'>
                                <Image src={hourIcon} alt="Hour Icon Sunrise Medika | Pelayanan Klinik dan Laboratorium Kesehatan"/>
                                <h3 className='font-semibold text-mainBrown tracking-[0.95px]'>Jam Operasional</h3>
                            </div>

                            <div className='flex flex-row text-xs lg:text-[1em]  leading-5 tracking-[0.30px] xs:tracking-[0.95px] md:tracking-[0.30px] lg:tracking-[0.95px] space-x-12 ml-10 lg:ml-0 font-medium mt-2 lg:mt-4'>
                                <div className='flex flex-col space-y-[1.05%]'>
                                    {props.information?.jamBuka?.map((jamBuka, index)=>{
                                      return <span key={index}>{jamBuka?.hari}</span>
                                    })}
                                </div>
                                <div className='flex flex-col space-y-[1.05%]'>
                                    {props.information?.jamBuka?.map((jamBuka, index)=>{
                                      return <span key={index}>{jamBuka?.jamBuka}</span>
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* KONTAK KAMI */}
                        <div className='flex flex-col tracking-[0.30px] xs:tracking-[0.95px] md:tracking-[0.30px] lg:tracking-[0.95px] leading-5 mt-3 lg:mt-0'>
                            <div className='flex flex-row items-center gap-4'>
                                <Image src={callIcon} alt="Call Icon Sunrise Medika | Pelayanan Klinik dan Laboratorium Kesehatan"/>
                                <h3 className='font-semibold text-mainBrown '>Kontak Kami</h3>
                            </div>

                            <div className='font-medium text-xs lg:text-[1em] mt-2 lg:mt-4 ml-10'>{props.information?.kontak}</div>
                        </div>

                    </div>



                </div>

                <div className='border-mainBrown border-[3px] rounded-[15px] relative px-8 lg:px-[3.74%] pt-10 pb-14 lg:pt-16 lg:pb-[3.74%] w-full lg:max-w-[38.16%] mt-8 lg:mt-0'>
                    <h2 className='text-lg lg:text-2xl font-extrabold text-mainBrown leading-[30px] tracking-[0.95px] bg-[#F6F6F6] p-3 absolute -top-[30px] lg:-top-[32px] left-[5.30%] lg:left-[8.15%] '>Jadwal Praktek Dokter</h2>

                    <div className='flex flex-col text-sm'>
                        
                        <p className='leading-5 tracking-[0.30px] xs:tracking-[0.95px] md:tracking-[0.30px] lg:tracking-[0.95px] font-medium text-xs lg:text-[1em]'>{props.information?.jadwalPraktek}</p>
                        
                        <div className='flex flex-row mt-5 lg:mt-8'>

                            <button className="text-xs lg:text-[1em] font-semibold px-[20px] py-[10px] lg:px-[30px] lg:py-3 border-[3px] border-mainBrown rounded-[10px] lg:rounded-[20px]  hover:shadow-button-tw hover:text-mainBrown/70 hover:border-transparent ease-out duration-300">Lihat Jadwal</button>
                            
                            <Link href="https://wa.me/628112681977" passHref><button className="text-xs lg:text-[1em] font-semibold px-[20px] py-[10px] lg:px-[30px] lg:py-3 border-none bg-none hover:text-orangeBrown">Hubungi Kami</button></Link>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}