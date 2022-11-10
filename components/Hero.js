/* eslint-disable @next/next/no-img-element */
export default function Hero() {
  return (
    <section className='h-[668px]'>
      <div className='hero w-full h-[668px] bg-[#024EA6] bg-center bg-no-repeat bg-contain '>
        <div className='text-white flex justify-center flex-col h-full max-w-7xl px-4 sm:px-6 mx-auto text-left'>
          <h1
            className='text-5xl md:text-6xl font-bold z-30'
            style={{ lineHeight: 1.25 }}>
            Bringing the soul back to <span className='md:block'>fashion</span>
          </h1>
          <p className='text-sm md:text-xl text-white font-medium mt-8 z-30'>
            Scientifically backed fashion apparel by women,{" "}
            <span className='md:block'>for women in India</span>
          </p>
          <div className='relative h-[54px] z-30 flex justify-start mt-5 items-center'>
            <button className='bg-[#B2A4FF] hover:bg-[#8b78f7] text-white transition-all duration-300 px-4 py-2 rounded-lg'>
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
