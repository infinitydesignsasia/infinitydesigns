/* eslint-disable @next/next/no-img-element */
const data = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
    category: "Apparel",
    title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    description:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. In consequatur eveniet blanditiis quisquam harum? Optio, modi? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    rev: false,
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1490725263030-1f0521cec8ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80",
    category: "Apparel",
    title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    description:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. In consequatur eveniet blanditiis quisquam harum? Optio, modi? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    rev: true,
  },
];
export default function Showcase() {
  return (
    <main className='max-w-7xl mx-auto px-4 sm:px-6 mt-[120px]'>
      {data.map((item) => {
        return (
          <section
            key={item.id}
            className={`flex justify-between items-center mt-32 ${
              item.rev ? "flex-row-reverse" : "flex-row"
            }`}>
            <div className=''>
              <img src={item.src} alt='' className='w-[550px] h-[400px] box' />
            </div>
            <div className='max-w-xl'>
              <p className='text-[#FFABE1] font-bold tracking-wide uppercase'>
                {item.category}
              </p>
              <h1 className='text-2xl font-semibold mt-2'>{item.title}</h1>
              <p className='text-lg text-gray-600 mt-5'>
                <em>{item.description}</em>
              </p>
              <button className='text-md bg-[#B2A4FF] px-4 py-2 text-[#FFf] rounded-lg mt-5 hover:bg-[#8b78f7]'>
                Shop
              </button>
            </div>
          </section>
        );
      })}
    </main>
  );
}
