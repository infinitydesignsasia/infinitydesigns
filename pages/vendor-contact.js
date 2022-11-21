import Head from "next/head";
import Header from "../components/Header";

export default function Vendor() {
  return (
    <div className=''>
      <Head>
        <title>Vendor Contact</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <div className='flex justify-center items-center mt-[60px] mb-[120px]'>
        <iframe
          src='https://share-eu1.hsforms.com/1M0vmMuJhT-OqEw-iU9JdCwfui2i'
          width='640'
          height='1500'
          frameborder='0'
          marginheight='0'
          scrolling='no'
          marginwidth='0'>
          Loading…
        </iframe>
      </div>
    </div>
  );
}
