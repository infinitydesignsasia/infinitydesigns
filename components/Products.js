/* eslint-disable @next/next/no-img-element */
export default function Products() {
  const images = [
    {
      id: 1,
      src: "/images/photo1.JPG",
    },
    {
      id: 2,
      src: "/images/photo2.JPG",
    },
    {
      id: 3,
      src: "/images/photo3.JPG",
    },
    {
      id: 4,
      src: "/images/photo4.JPG",
    },
    {
      id: 5,
      src: "/images/photo5.jpg",
    },
    {
      id: 6,
      src: "/images/photo6.JPG",
    },
    {
      id: 7,
      src: "/images/photo7.JPG",
    },
    {
      id: 8,
      src: "/images/photo8.JPG",
    },
    {
      id: 9,
      src: "/images/photo9.JPG",
    },
  ];
  return (
    <section
      className='max-w-7xl mx-auto px-4 sm:px-6 mt-[120px]'
      id='our-products'>
      <div className='text-center my-16'>
        <h1 className='text-3xl font-bold'>Our Products</h1>
        {/* <p className='text-black font-medium my-8'>We Design Dreams</p> */}
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
        {images.map((image) => {
          return (
            <img
              key={image.id}
              src={image.src}
              alt=''
              className='hover:scale-105 transition-all duration-300 ease-out md:h-full'
            />
          );
        })}
      </div>

      {/* <div className='w-full text-center mt-12'>
        <button className='text-xl bg-[#B2A4FF] hover:bg-[#8b78f7] px-4 py-2 rounded-lg text-white'>
          View More
        </button>
      </div> */}
    </section>
  );
}
