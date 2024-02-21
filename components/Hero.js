/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
export default function Hero() {
  return (
    <section className='h-[668px]' id='home'>
      <div className='hero w-full h-[668px] bg-contain'>
        <div className='text-white flex justify-center flex-col h-full max-w-7xl px-4 sm:px-6 mx-auto text-left'>
          <h1 className='font-head text-[3.75rem] md:text-6xl md:leading-[1.25] font-extrabold z-30 tracking-wider'>
            Bringing the soul back to <br /> Fashion
            <span className='max-w-[480px] mr-auto block text-3xl leading-[1]'></span>
          </h1>
          {/* <p className='text-sm md:text-xl text-white font-medium mt-8 z-30'>
            Elevate your brand's image with our fashion-forward approach  Your vision, our expertise-the perfect fit
           
          </p> */}
          <div className='relative h-[54px] z-30 flex justify-start mt-5 items-center'>
            <button className='bg-[#a34e76] hover:bg-[#a1426e] text-white transition-all duration-300 px-4 py-2 rounded-lg'>
              <a href='/buyer-contact'>Buyer Contact</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
