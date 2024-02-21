/* eslint-disable @next/next/no-html-link-for-pages */
import Subscribe from "./Subscribe";

/* eslint-disable @next/next/no-img-element */
export default function Newsletter() {
  return (
    <div className=''>
      <section className='max-w-7xl mx-auto px-4 sm:px-6 mt-[120px]'>
        <h1 className='pb-8 whitespace-nowrap font-semibold text-[#ff5b00] px-8 text-[24px] my-8 md:text-5xl lg:text-6xl w-full mx-auto flex justify-center'>
          Let your soul meets fashion!
        </h1>
        <div className='flex flex-wrap justify-between items-center'>
          <div className='group flex-[0 0 100%] lg:max-w-[45%] lg:flex-[0 0 45%] hover:scale-105 transition'>
            <video
              width='640'
              height='360'
              controls
              playsInline
              poster='/posters/bc1.png'>
              <source
                src='/videos/bc1.mp4'
                type='video/mp4'
                className='min-h-[420px] w-full h-full'></source>
            </video>
          </div>
          <div className='max-w-[100%] mt-[60px] lg:mt-0 flex-[0 0 100%] lg:max-w-[55%] lg:flex-[0 0 55%] xl:p-[100px] lg:p-[40px]'>
            <h1 className='text-3xl md:text-4xl font-bold mb-5 tracking-wide'>
              Truly Fashionable
            </h1>
            <p className='text-gray-700 text-lg pb-8'>
              Turn heads, ignite trends: your brand's fashion journey starts here.
              From runway to retail: powering your fashion business. 
              
            </p>

            <p className='font-bold pb-8 text-lg md:text-2xl tracking-wide'>
              #infinitydesigns
            </p>
            <button className='text-md bg-[#e8c085] px-4 font-semibold py-2 flex justify-center mx-auto text-[#000] rounded-lg hover:bg-[#e8b871]'>
              <a href='/buyer-contact'>Buyer Contact</a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
