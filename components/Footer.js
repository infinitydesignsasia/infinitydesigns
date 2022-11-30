/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import Subscribe from "./Subscribe";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='bg-[#F7F5F2] mt-[120px]'>
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

            <a href='#!' className='mr-6 text-black'>
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
              <p className='flex items-center justify-center md:justify-start mb-4'>
                <svg
                  aria-hidden='true'
                  focusable='false'
                  dataprefix='fas'
                  dataicon='home'
                  className='w-4 mr-4 flex-shrink-0'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 576 512'>
                  <path
                    fill='currentColor'
                    d='M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z'></path>
                </svg>
                Uf16A Ozone Centre, Sector 12 Near district court, Faridabad
                121007 Haryana India
              </p>
              <p className='flex items-center justify-center md:justify-start mb-4'>
                <svg
                  aria-hidden='true'
                  focusable='false'
                  dataprefix='fas'
                  dataicon='envelope'
                  className='w-4 mr-4'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'>
                  <path
                    fill='currentColor'
                    d='M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z'></path>
                </svg>
                <a href=''>Email Us</a>
              </p>
              <p className='flex items-center justify-center md:justify-start mb-4'>
                <FaWhatsapp className='w-4 mr-4' />
                <a href=''>Whatsapp Us</a>
              </p>
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
