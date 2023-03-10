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
    title: "Idea II Life II Elegance II Fun II Freedom",
    description: "Every outfit counts change the way to wear",
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
            className={`flex justify-center md:justify-between items-center flex-wrap mt-32 gap-8 ${
              item.rev ? "flex-row-reverse" : "flex-row"
            }`}>
            <div className='w-[400px] lg:w-[568px] box'>
              {item.src ? (
                <img src={item.src} alt='' className='w-[400px] lg:w-[568px]' />
              ) : (
                <div className='video-background'>
                  <video
                    playsInline
                    width='640'
                    height='120'
                    controls
                    poster='/posters/about.png'>
                    <source src='/videos/about.mp4' type='video/mp4'></source>
                  </video>
                </div>
              )}
            </div>
            <div className='max-w-xl'>
              <p className='text-sm md:text-md text-[#a34e76] font-bold tracking-wide uppercase'>
                {item.category}
              </p>
              <h1 className='text-[16px] whitespace-nowrap md:text-[20px] lg:text-[30px] font-semibold mt-2 md:leading-[3.2rem]'>
                {item.title}
              </h1>

              <p className='w-full block text-[15px] md:text-[19px] leading-8 text-gray-700 mt-5 mb-4'>
                <em>{item.description}</em>
              </p>

              {item.rev ? (
                <p className='font-bold py-3 text-lg md:text-2xl tracking-wide'>
                  #Passion For Fashion
                </p>
              ) : (
                ""
              )}
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
              <button
                className={`text-lg bg-[#e8c085] py-2 px-5 md:py-3 md:px-5 text-[#000] font-semibold rounded-lg mt-4 md:mt-8 hover:bg-[#e8b871] mx-auto flex justify-center`}>
                <a href='/buyer-contact'>{item.button}</a>
              </button>
            </div>
          </section>
        );
      })}
    </main>
  );
}
