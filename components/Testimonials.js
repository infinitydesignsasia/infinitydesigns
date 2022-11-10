import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials() {
  const settings = {
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 400,
    fade: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  return (
    <section className='max-w-7xl mx-auto px-4 sm:px-6 mt-[120px]'>
      <div className='mx-auto px-2 text-center'>
        <Slider {...settings}>
          <div className=''>
            <h3 className='text-[#ff5b00] text-xl md:text-2xl lg:text-4xl font-semibold'>
              “A platform for women that aims to empower, educate and diagnose
              in a confidential, safe and reliable manner.”
            </h3>
            <p className='mt-12 text-md md:text-xl font-bold uppercase tracking-wide'>
              THE ECONOMIC TIMES
            </p>
          </div>
          <div className=''>
            <h3 className='text-[#ff5b00] text-xl md:text-2xl lg:text-4xl font-semibold'>
              “Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              architecto magni molestiae eveniet pariatur cum perferendis”
            </h3>
            <p className='mt-12 text-md md:text-xl font-bold uppercase tracking-wide'>
              Forbes
            </p>
          </div>
          <div className=''>
            <h3 className='text-[#ff5b00] text-xl md:text-2xl lg:text-4xl font-semibold'>
              “Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Sapiente dolores eos temporibus, enim nam fugit.”
            </h3>
            <p className='mt-12 text-md md:text-xl font-bold uppercase tracking-wide'>
              Arash Arora
            </p>
          </div>
        </Slider>
      </div>
    </section>
  );
}
