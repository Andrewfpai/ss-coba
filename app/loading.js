import "../styles/loading.css";
import logo from './_components/navbar/assets/logo.svg';
import Image from 'next/image';


export default function Loading() {
    return (
        <div className="relative flex justify-center items-center h-[100vh] w-full">
         <div className="loader relative"></div>
         <Image className="w-[45px] absolute z-[10]" src={logo} alt="Logo Sunrise Medika | Pelayanan Klinik dan Laboratorium Kesehatan"/>
        </div>
    )
}