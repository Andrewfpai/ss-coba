
import Image from "next/image";
import Navbar from "./_components/navbar/page.js";
import Footer from "./_components/footer/page.js";
import Heading from "./_components/heading/page.js";
import Information from "./_components/information/page.js";
import Department from "./_components/department/page.js";
import Gallery from "./_components/gallery/page.js";
import FAQS from "./_components/faqs/page.js";
import PropTypes from 'prop-types';
import { getDepartemen, getLayanan, getGallery, getHeading, getInformation, getUsp, getFaq } from '@/sanity/sanity.query';

async function fetchDepartemen() {
  try {
    const departemen = await getDepartemen();
    return departemen

  } catch (error) {
    console.error('Error fetching Departemen:', error);
  }
  
}

async function fetchLayanan() {
  try {
    const layanan = await getLayanan();
    return layanan

  } catch (error) {
    console.error('Error fetching Layanan:', error);
  }
  
}

async function fetchGallery() {
  try {
    const layanan = await getGallery();
    return layanan

  } catch (error) {
    console.error('Error fetching Layanan:', error);
  }
  
}

async function fetchHeading() {
  try {
    const heading = await getHeading();
    return heading

  } catch (error) {
    console.error('Error fetching Heading:', error);
  }
  
}

async function fetchUsp() {
  try {
    const usp = await getUsp();
    return usp

  } catch (error) {
    console.error('Error fetching USP:', error);
  }
  
}

async function fetchFaq() {
  try {
    const faq = await getFaq();
    return faq

  } catch (error) {
    console.error('Error fetching Faq:', error);
  }
  
}

async function fetchInformation() {
  try {
    const information = await getInformation();
    return information

  } catch (error) {
    console.error('Error fetching Faq:', error);
  }
  
}

async function Home() {
  const departemen = await fetchDepartemen();
  const layanan = await fetchLayanan();
  const gallery = await fetchGallery();
  const heading = await fetchHeading();
  const usp = await fetchUsp();
  const faq = await fetchFaq();
  const information = await fetchInformation();


  return (
    <div className="relative bg-[#F6F6F6]">
      <Navbar/>
      <Heading heading={heading} usp={usp}/>
      <Information information={information}/>
      <Department departemen={departemen} layanan={layanan}/>
      <Gallery gallery={gallery}/>
      <FAQS faq={faq}/>
      <Footer departemen={departemen} layanan={layanan}/>
    </div>
  );
  
}

Home.propTypes = {
  departemen: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      dokter: PropTypes.array.isRequired,
      icon: PropTypes.string.isRequired,
      syaratKetentuan: PropTypes.array.isRequired,
    })),

  layanan:PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      isPromo: PropTypes.bool.isRequired,
      icon: PropTypes.string.isRequired,
      syaratKetentuan: PropTypes.array.isRequired,
    })),

  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      caption: PropTypes.shape({caption:PropTypes.string.isRequired}),
      src: PropTypes.string.isRequired,
    })),

  heading:PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      illustration: PropTypes.string.isRequired,
      caption: PropTypes.string.isRequired,
    })),

  usp:PropTypes.arrayOf(
    PropTypes.shape({
      judul: PropTypes.string.isRequired,
      icon: PropTypes.shape({asset: PropTypes.array.isRequired, _type: PropTypes.string}.isRequired),
      deskripsi: PropTypes.string.isRequired,
    })),

  faq:PropTypes.arrayOf(
    PropTypes.shape({
      pertanyaan: PropTypes.string.isRequired,
      jawaban: PropTypes.array.isRequired,
    })),

  information: PropTypes.arrayOf(
    PropTypes.shape({
      lokasi: PropTypes.string.isRequired,

      jamBuka: PropTypes.arrayOf(
        PropTypes.shape({
          hari: PropTypes.string.isRequired,
          jamBuka: PropTypes.string.isRequired,
          _key: PropTypes.string.isRequired,
        })
      ),
      kontak: PropTypes.string.isRequired,
      jadwalPraktek: PropTypes.string.isRequired,
  })),

}

Home.defaultProps = {
  departemen: [],
  layanan: [],
  gallery: [],
  heading : [],
  usp : [],
  faq: [],
  information: [],
}

export default Home;
