import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ServicesNav from "../components/Services";

export default function Services() {
  return (
    <div className=''>
      <Head>
        <title>Services</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <div className='s-banner h-[400px] w-full relative'>
        <h1 className='absolute left-0 right-0 px-8 bottom-36 flex justify-center items-center text-white text-4xl md:text-6xl lg:text-8xl'>
          Our Services
        </h1>
      </div>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 mt-[120px] gap-16'>
        <video
          width='640'
          height='560'
          controls
          className='mx-auto w-full max-w-3xl'
          playsInline
          autoPlay
          poster='/posters/services.png'>
          <source src='/videos/services.mp4' type='video/mp4'></source>
        </video>
      </div>
      <ServicesNav />
      <Footer />
    </div>
  );
}
