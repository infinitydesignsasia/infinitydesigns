/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Vendor() {
  return (
    <div className=''>
      <Head>
        <title>Buyer Contact</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <div className='bc-banner h-[400px] w-full relative'>
        <h1 className='absolute left-0 right-0 bottom-36 flex justify-center items-center text-white text-4xl'>
          Infinty Designs &#8212; Buyer Contact
        </h1>
      </div>
      <div className='flex justify-center items-center mt-[60px] mb-[120px]'>
        <iframe
          src='https://share-eu1.hsforms.com/1l_6lUo_qRb-3sGzVi9EEAgfui2i'
          width='640'
          height='1300'
          frameBorder='0'
          marginHeight='0'
          scrolling='no'
          marginWeight='0'>
          Loading…
        </iframe>
      </div>
      <Footer />
    </div>
  );
}
