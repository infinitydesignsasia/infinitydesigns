/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import Subscribe from "./Subscribe";
import { FaHome, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
// import { AiOutlineArrowUp } from "react-icons/ai";

export default function Footer() {
  return (
    <div className='bg-[#F7F5F2] mt-[120px] relative z-50'>
      {/* <hr className='bg-black' /> */}

      <footer className='max-w-7xl mx-auto px-4 sm:px-6 text-center lg:text-left text-black'>
        <div className='flex justify-center items-center lg:justify-between py-6 border-b border-black'>
          <div className='mr-12 hidden lg:block'>
            <span> Stay connected with us on social media:</span>
          </div>
          <div className='flex justify-center'>
            <a href='https://wa.me/+917838920406' className='mr-6 text-black'>
              <FaWhatsapp />
            </a>

            <a
              href='https://www.linkedin.com/company/infinitydesignsindia/'
              className='mr-6 text-black'>
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <div className='py-10 text-center md:text-left'>
          <div className='grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className=''>
              <img
                src='/images/logo.jpg'
                alt='logo'
                className='w-36 mb-4 mx-auto md:mx-0'
              />
              <p>Empower your business with trend-setting apparel</p>
            </div>
            <Subscribe />

            <div className=''>
              <h6 className='font-semibold mb-4 flex justify-center md:justify-start'>
                Useful links
              </h6>
              <p className='mb-4'>
                <a href='/#about-us' className='text-black'>
                  About Us
                </a>
              </p>
              <p className='mb-4'>
                <a href='/buyer-contact' className='text-black'>
                  Buyer Contact
                </a>
              </p>
              <p className='mb-4'>
                <a href='/terms-conditions' className='text-black'>
                  Terms & Conditions
                </a>
              </p>
            </div>
            <div className=''>
              <h6 className='font-semibold mb-4 flex justify-center md:justify-start'>
                Corporate Office
              </h6>
              <p className='mb-2'>
                UG16A Ozone Centre Sector 12 Faridabad
                121007 (Haryana) India
              </p>
              <div>
                <h1 className='font-semibold'>Open Hours</h1>
                <p className='flex items-center justify-center md:justify-start mb-4'>
                  Mon - Sat: 10:00 am - 6:00 pm <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='text-center p-6 border-t border-black'>
          <span>© {new Date().getFullYear()} Copyright:</span>{" "}
          <a className='text-black font-semibold'>Infinity designs</a>
        </div>
      </footer>
    </div>
  );
}
