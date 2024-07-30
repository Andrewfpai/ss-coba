


import './style.css';

// import SAMPLE from '../components/heading/assets/heading-illustration.jpg';

import { getDokter, getInformation, getTentangKami } from '@/sanity/sanity.query';


import AboutClient from './about.client';


export default async function About(){

    const dokter = await getDokter()
    const information = await getInformation()
    const tentangKami = await getTentangKami()


      

      

    return(
        <AboutClient dokter={dokter} information={information} tentangKami={tentangKami}/>
    )
}