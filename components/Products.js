/* eslint-disable @next/next/no-img-element */
export default function Products() {
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 3,
      src: "/images/menwear.jpg",
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/1000373/pexels-photo-1000373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/1381558/pexels-photo-1381558.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 9,
      src: "https://images.pexels.com/photos/1309373/pexels-photo-1309373.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];
  return (
    <section className='max-w-7xl mx-auto px-4 sm:px-6 mt-[120px]'>
      <div className='text-center'>
        <h1 className='text-3xl font-bold'>Our Products</h1>
        <p className='text-black font-medium my-5'>
          Featuring one of the bests in the market
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
        {images.map((image) => {
          return (
            <img
              key={image.id}
              src={image.src}
              alt=''
              className='hover:scale-105 transition-all duration-300 ease-out h-full'
            />
          );
        })}
      </div>

      <div className='w-full text-center mt-12'>
        <button className='text-xl bg-[#B2A4FF] hover:bg-[#8b78f7] px-4 py-2 rounded-lg text-white'>
          View More
        </button>
      </div>
    </section>
  );
}
