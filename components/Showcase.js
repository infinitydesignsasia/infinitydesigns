/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
const data = [
  {
    id: 1,
    src: false,
    category: "About Us",
    idName: "about-us",
    title: "We design dreams!",
    description:
      "Infinity designs is a buying agency currently based in India, working with leading brands worldwide. We believe in creating end to end solutions and work closely with our vendor base, client's as well with constant speed, innovations in place.",
    services: true,
    button: "Buyer Contact",
    rev: false,
  },
  {
    id: 2,
    src: "/images/buyercontact1.JPG",
    category: "Buyer Contact",
    title:
      "Idea II Life II Elegance II Fun II Freedom II Clothes that will make you smile",
    button: "Let's Connect",
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
            id={item.idName}
            className={`flex justify-between items-center flex-wrap mt-32 gap-8 ${
              item.rev ? "flex-row-reverse" : "flex-row"
            }`}>
            <div className='w-[400px] lg:w-[568px] box'>
              {item.src ? (
                <img src={item.src} alt='' className='w-[400px] lg:w-[568px]' />
              ) : (
                <div className='video-background'>
                  <iframe
                    src='https://player.vimeo.com/video/770610537?h=d14a516ebb'
                    allow='autoplay; fullscreen'
                    className='h-full w-full m-0 p-0'></iframe>
                </div>
              )}
            </div>
            <div className='max-w-xl'>
              <p className='text-sm md:text-md text-[#FFABE1] font-bold tracking-wide uppercase'>
                {item.category}
              </p>
              <h1 className='text-lg md:text-xl lg:text-3xl font-semibold mt-2'>
                {item.title}
              </h1>
              <p className='block text-sm md:text-[16px] leading-6 text-gray-600 mt-5'>
                <em>{item.description}</em>
              </p>
              {item.services ? (
                <>
                  <h3 className='my-4 font-bold text-lg md:text-xl lg:text-2xl'>
                    Providing Services
                  </h3>
                  <div className='flex flex-col md:flex-row justify-left md:items-center md:gap-32'>
                    <ul className='text-md md:text-lg list-square ml-8'>
                      <li>Sourcing</li>
                      <li>Vendor Development</li>
                      <li>Designing</li>
                      <li>Product Development</li>
                    </ul>
                    <ul className='text-md md:text-lg list-square ml-8 md:ml-0'>
                      <li>Pricing</li>
                      <li>Production & Quality</li>
                      <li>Quality Control</li>
                      <li>Logistics</li>
                    </ul>
                  </div>
                </>
              ) : (
                ""
              )}
              <button className='text-md bg-[#B2A4FF] px-4 py-2 text-[#FFf] rounded-lg mt-5 hover:bg-[#8b78f7]'>
                <a href='/buyer-contact'>{item.button}</a>
              </button>
            </div>
          </section>
        );
      })}
    </main>
  );
}
