import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Careers() {
  return (
    <div className=''>
      <Head>
        <title>Careers</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <div className='max-w-7xl mx-auto px-4 sm:px-6 mt-[120px] flex justify-center items-center gap-16 flex-wrap'>
        <div className='flex gap-16 flex-wrap items-center justify-center'>
          <div className=''>
            <label className='block'>Select Location</label>
            <select
              className='bg-transparent border border-gray-300 bg-gray-100 px-4 py-2 min-w-[220px]'
              name='location'
              id='location'>
              <option value='alllocations'>All Locations</option>
              <option value='delhi'>Delhi</option>
              <option value='paris'>Paris</option>
            </select>
          </div>
          <div className=''>
            <label className='block'>Select Category</label>
            <select
              className='bg-transparent border border-gray-300 bg-gray-100 px-4 py-2 min-w-[220px]'
              name='category'
              id='category'>
              <option value='allcateg'>All Categories</option>
              <option value='technical'>Technical</option>
              <option value='nontech'>Non Technical</option>
            </select>
          </div>
          <div className=''>
            <label className='block'>Select Job Type</label>
            <select
              className='bg-transparent border border-gray-300 bg-gray-100 px-4 py-2 min-w-[220px]'
              name='job'
              id='job'>
              <option value='alljobs'>All jobs</option>
              <option value='1'>Job Type 1</option>
              <option value='2'>JOb Type 2</option>
            </select>
          </div>
        </div>
        <div className='flex gap-16'>
          <button className='px-4 py-2 bg-cyan-300'>Reset</button>
          <button className='px-4 py-2 bg-cyan-300'>Filter</button>
        </div>
      </div>
    </div>
  );
}
