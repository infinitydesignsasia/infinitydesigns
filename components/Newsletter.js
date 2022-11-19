import Subscribe from "./Subscribe";

/* eslint-disable @next/next/no-img-element */
export default function Newsletter() {
  return (
    <div className=''>
      <section className='max-w-7xl mx-auto px-4 sm:px-6 mt-[120px]'>
        <div className='flex flex-wrap justify-between items-center'>
          <div className='group max-w-[100%] flex-[0 0 100%] lg:max-w-[50%] lg:flex-[0 0 50%] hover:scale-105 transition'>
            <img
              src='/images/news.svg'
              alt=''
              className='w-full h-full group-hover:-rotate-3 transition-all'></img>
          </div>
          <div className='max-w-[100%] mt-[60px] lg:mt-0 flex-[0 0 100%] lg:max-w-[50%] lg:flex-[0 0 50%] xl:p-[100px] lg:p-[40px]'>
            <p className='text-gray-600 pb-8'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              velit distinctio veritatis quis recusandae quas necessitatibus,
              excepturi placeat culpa, perferendis enim.
            </p>
            <h1 className='pb-8 font-semibold text-[#ff5b00] text-2xl'>
              Join our community of Lorem ipsum dolor sit amet consectetur
              adipisicing elit..!
            </h1>
            <p className='font-bold pb-8 tracking-wide'>#infinitydesigns</p>
            <a
              href='https://instagram.com'
              className='border-black border-b-2 hover:text-[#ff5b00] hover:border-[#ff5b00] transition-colors'>
              Follow on us Instagram
            </a>
          </div>
        </div>
      </section>
      <Subscribe />
    </div>
  );
}
