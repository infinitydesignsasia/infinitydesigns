import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Careers() {
  return (
    <div className=''>
      <Head>
        <title>Careers</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <div className='s-banner h-[400px] w-full relative'>
        <h1 className='absolute left-0 right-0 px-8 bottom-44 flex justify-center items-center text-white font-semibold  text-4xl md:text-6xl lg:text-8xl mb-4'>
          {/* Infinity Designs &#8212; Careers */}
          Careers
        </h1>
        <p className='absolute left-0 right-0 px-8 bottom-32 flex justify-center items-center text-gray-200 text-md sm:text-lg md:text-xl'>
          Having a career for you, become luckier with hard work.
        </p>
      </div>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 mt-[120px] flex justify-center items-center gap-16 flex-wrap'>
        <div className='flex gap-16 flex-wrap items-center justify-center'>
          <div className=''>
            <label className='block'>Select Location</label>
            <select
              className='bg-transparent border border-gray-300 bg-gray-100 px-4 py-2 min-w-[220px]'
              name='location'
              id='location'>
              <option value='alllocations'>All Locations</option>
              <option value='delhi'>Delhi NCR</option>
              <option value='fbd'>Faridabad</option>
              <option value='ggn'>Gurugram</option>
              <option value='noida'>Noida</option>
              <option value='blr'>Bangalore</option>
              <option value='tripur'>Tripur</option>
              <option value='amritsar'>Amritsar</option>
              <option value='mum'>Mumbai</option>
              <option value='ben'>West Bengal</option>
            </select>
          </div>
          <div className=''>
            <label className='block'>Select Category</label>
            <select
              className='bg-transparent border border-gray-300 bg-gray-100 px-4 py-2 min-w-[220px]'
              name='category'
              id='category'>
              <option value='allcateg'>All Categories</option>
              <option value='des'>Designer</option>
              <option value='srdes'>Sr. Designer</option>
              <option value='assmer'>Asst Merchant</option>
              <option value='merchant'>Merchant</option>
              <option value='srmerchant'>Sr Merchant</option>
              <option value='merchmgr'>Merchandising Manager</option>
              <option value='qualass'>Quality Assurance</option>
              <option value='qualctrl'>Quality Control</option>
              <option value='pattmast'>Pattern Master</option>
              <option value='shipexe'>Shipping Executive</option>
              <option value='accexe'>Account Executive</option>
              <option value='shipmgr'>Shipping Manager</option>
              <option value='accmgr'>Account Manager</option>
              <option value='offboy'>Office Boy</option>
              <option value='hrmgr'>HR Manager</option>
              <option value='offmgr'>Office Manager</option>
              <option value='crrexe'>Courier Executive</option>
            </select>
          </div>
          <div className=''>
            <label className='block'>Select Job Type</label>
            <select
              className='bg-transparent border border-gray-300 bg-gray-100 px-4 py-2 min-w-[220px]'
              name='job'
              id='job'>
              <option value='alljobs'>All jobs</option>
              <option value='des'>Designer</option>
              <option value='srdes'>Sr. Designer</option>
              <option value='assmer'>Asst Merchant</option>
              <option value='merchant'>Merchant</option>
              <option value='srmerchant'>Sr Merchant</option>
              <option value='merchmgr'>Merchandising Manager</option>
              <option value='qualass'>Quality Assurance</option>
              <option value='qualctrl'>Quality Control</option>
              <option value='pattmast'>Pattern Master</option>
              <option value='shipexe'>Shipping Executive</option>
              <option value='accexe'>Account Executive</option>
              <option value='shipmgr'>Shipping Manager</option>
              <option value='accmgr'>Account Manager</option>
              <option value='offboy'>Office Boy</option>
              <option value='hrmgr'>HR Manager</option>
              <option value='offmgr'>Office Manager</option>
              <option value='crrexe'>Courier Executive</option>
            </select>
          </div>
        </div>
        <div className='flex gap-16'>
          <button className='px-4 py-2 bg-cyan-300'>Reset</button>
          <button className='px-4 py-2 bg-cyan-300'>Filter</button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
