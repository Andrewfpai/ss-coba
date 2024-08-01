import './style.css'
import Image from "next/image"
import Icon from "./assets/icon1.png"
import Link from 'next/link'


export default function Heading(props){

    return( 
        <div className='pt-[100px] sm:pt-[170px] md:pt-[200px] max-w-[1650px] w-[90%] mx-auto'>
            <div className="relative flex flex-col mx-auto md:text-5xl sm:text-4xl text-3xl">
                {props.heading.illustration?<Image priority width={0} height={0} sizes='100vw' className="absolute z-10 rounded-[15px] object-cover object-right w-full h-[400px] md:h-[660px]" src={props.heading?.illustration} alt={props.heading?.caption} />:null}
                <div className="z-10 clip-mask-cc"></div>

                <div className="z-20 text-mainBrown space-y-4 md:space-y-9 pt-7 sm:pt-10 md:pt-[104px] pb-[30px] md:pb-[80px] px-[6.67%] md:px-[4.98%] leading-tight md:leading-[58px]">
                    <h1 className="font-radioCanada text-[1em] font-bold max-w-[600px]">{props.heading?.title}</h1>
                    <p className="text-[0.40em] font-raleway font-semibold max-w-[550px] leading-4 md:leading-[25px] tracking-[0.3px] md:tracking-[0.95px]">{props.heading?.subtitle}</p>
                    <button className="text-[0.40em] sm:text-[0.29em] font-raleway font-semibold py-3 px-4 md:px-[30px] md:py-[0px] bg-mainOrange rounded-[20px] shadow-button-cc hover:bg-mainYellow ease-out duration-300"><Link href="https://wa.me/628112681977">Daftar Sekarang</Link></button>
                </div>

                <div className="z-20 flex flex-col md:flex-row items-start justify-between md:items-center rounded-b-[15px] p-5 md:px-[4.98%] md:py-6 background-custom-cc lg:text-[24px] md:text-[20px] text-[16px] font-raleway">
                    <div className="flex flex-row lg:flex-row gap-4 md:gap-[15%] md:w-[28%] md:flex-col text-left md:text-center lg:text-left">
                        <Image width={0} height={0} sizes='100vw' className="w-7 h-7 md:w-11 md:h-11 mx-auto" src={props.usp?.icon1} alt="Icon" />
                        <div className="flex flex-col gap-[5px] text-xs md:text-xs lg:text-sm xs:text-sm -mt-[2px] md:mt-4 lg:-mt-1 ">
                            <h3 className="font-extrabold text-[1em] text-mainBrown tracking-[0.30px] xs:tracking-[0.95px] md:tracking-[0.30px] lg:tracking-[0.95px] ">
                                {props.usp?.usp1?.judul || ''}
                            </h3>
                            <p className="leading-4 md:leading-5 text-[1em] tracking-[0.30px] xs:tracking-[0.95px] md:tracking-[0.30px] lg:tracking-[0.95px] font-medium ">
                                {props.usp?.usp1?.deskripsi || ''}
                            </p>
                        </div>
                    </div>

                    <span className="mt-4 mb-4 md:mb-0 border-b-2 w-[100%] sm:w-[70%] border-[#BDBDBD] block md:hidden"></span>
                    <span className="border-l-2 h-[125px] border-[#BDBDBD] hidden md:block"></span>

                    <div className="flex flex-row lg:flex-row gap-4 md:gap-[15%] md:w-[28%] md:flex-col text-left md:text-center lg:text-left">
                        <Image width={0} height={0} sizes='100vw' className="w-7 h-7 md:w-11 md:h-11 mx-auto" src={props.usp?.icon2} alt="Icon" />
                        <div className="flex flex-col gap-[5px] text-xs md:text-xs lg:text-sm xs:text-sm -mt-[2px] md:mt-4 lg:-mt-1 ">
                            <h3 className="font-extrabold text-[1em] text-mainBrown tracking-[0.30px] xs:tracking-[0.95px] md:tracking-[0.30px] lg:tracking-[0.95px]">
                                {props.usp?.usp2?.judul || ''}
                            </h3>
                            <p className="leading-4 md:leading-5 text-[1em] tracking-[0.30px] xs:tracking-[0.95px] md:tracking-[0.30px] lg:tracking-[0.95px] font-medium ">
                                {props.usp?.usp2?.deskripsi || ''}
                            </p>
                        </div>
                    </div>

                    <span className="mt-4 mb-4 md:mb-0 border-b-2 w-[100%] sm:w-[70%] border-[#BDBDBD] block md:hidden"></span>
                    <span className="border-l-2 h-[125px] border-[#BDBDBD] hidden md:block"></span>

                    <div className="flex flex-row lg:flex-row gap-4 md:gap-[15%] md:w-[28%] md:flex-col text-left md:text-center lg:text-left">
                        <Image width={0} height={0} sizes='100vw' className="w-7 h-7 md:w-11 md:h-11 mx-auto" src={props.usp?.icon3} alt="Icon" />
                        <div className="flex flex-col gap-[5px] text-xs md:text-xs lg:text-sm xs:text-sm -mt-[2px] md:mt-4 lg:-mt-1 ">
                            <h3 className="font-extrabold text-[1em] text-mainBrown tracking-[0.30px] xs:tracking-[0.95px] md:tracking-[0.30px] lg:tracking-[0.95px]">
                                {props.usp?.usp3?.judul || ''}
                            </h3>
                            <p className="leading-4 md:leading-5 text-[1em] tracking-[0.30px] xs:tracking-[0.95px] md:tracking-[0.30px] lg:tracking-[0.95px] font-medium ">
                                {props.usp?.usp3?.deskripsi || ''}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
