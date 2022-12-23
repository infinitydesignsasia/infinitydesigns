/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import Subscribe from "./Subscribe";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
// import { AiOutlineArrowUp } from "react-icons/ai";

export default function Footer() {
  return (
    <div className='bg-[#F7F5F2] mt-[120px] relative'>
      {/* <hr className='bg-black' /> */}

      <footer className='max-w-7xl mx-auto px-4 sm:px-6 text-center lg:text-left text-black'>
        <div className='flex justify-center items-center lg:justify-between py-6 border-b border-black'>
          <div className='mr-12 hidden lg:block'>
            <span>Get connected with us on social networks:</span>
          </div>
          <div className='flex justify-center'>
            <a href='#!' className='mr-6 text-black'>
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
              <img src='/images/logo.jpg' alt='logo' className='w-36 mb-4' />
              <p>Clothes for your best movements</p>
            </div>
            <Subscribe />

            <div className=''>
              <h6 className='font-semibold mb-4 flex justify-center md:justify-start'>
                Useful links
              </h6>
              <p className='mb-4'>
                <a href='/#about' className='text-black'>
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
              <div>
                <h1 className='font-semibold'>Open Hours</h1>
                <p className='flex items-center justify-center md:justify-start mb-4'>
                  Mon - Sat: 9:30 am - 6:30 pm <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='text-center p-6 border-t border-black'>
          <span>© {new Date().getFullYear()} Copyright:</span>{" "}
          <a className='text-black font-semibold'>Infinity Desings</a>
        </div>
      </footer>
    </div>
  );
}
