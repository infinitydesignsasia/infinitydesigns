/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
export default function Hero() {
  return (
    <section className='h-[668px]'>
      <div className='hero w-full h-[668px] bg-center bg-no-repeat bg-contain '>
        <div className='text-white flex justify-center flex-col h-full max-w-7xl px-4 sm:px-6 mx-auto text-left'>
          <h1 className='text-5xl md:text-6xl md:leading-[1.25] font-bold z-30'>
            Bringing the soul back to <br /> Fashion
            <span className='max-w-[480px] mr-auto block text-3xl leading-[1]'></span>
          </h1>
          <p className='text-sm md:text-xl text-white font-medium mt-8 z-30'>
            Idea II Life II Elegance II Fun II Freedom II Clothes that will make
            you smile
          </p>
          <div className='relative h-[54px] z-30 flex justify-start mt-5 items-center'>
            <button className='bg-[#B2A4FF] hover:bg-[#8b78f7] text-white transition-all duration-300 px-4 py-2 rounded-lg'>
              <a href='/buyer-contact'>Buyer Contact</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
