import "../styles/globals.css";
import { AiOutlineArrowUp } from "react-icons/ai";
import { useEffect, useState } from "react";
import { BiMessageDetail } from "react-icons/bi";
import { IoMdCall } from "react-icons/io";
import { RiWhatsappFill } from "react-icons/ri";

import { initGA, logPageView } from "../components/Ga";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const [hide, setHide] = useState(false);
  const [msg, setMsg] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setHide(true);
    } else {
      setHide(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const router = useRouter();

  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();

    // Add event listener for scroll
    window.addEventListener("scroll", toggleVisibility);

    // Clean up function to remove the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      <Component {...pageProps} />

      <div
        onClick={scrollToTop}
        className={`${
          hide ? "block" : "hidden"
        } fixed right-14 z-50 bottom-5 bg-green-400 p-3 rounded-full hover:animate-pulse cursor-pointer`}
      >
        <AiOutlineArrowUp className="text-white text-[45px]" />
      </div>
      <div
        data-style="bottomright"
        className="grecaptcha-badge w-[256px] h-[60px] overflow-hidden block fixed bottom-[14px] right-[-186px] hover:z-50 transition-all duration-300 hover:right-0 shadow-lg rounded-sm"
      >
        <div className="grecaptcha-logo">
          <iframe
            title="reCAPTCHA"
            src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LevtA4cAAAAAKHdqZis3dPrdLAr4UweAn5k1sXq&amp;co=aHR0cHM6Ly90aGVpbmZpbml0eWJpei5jb206NDQz&amp;hl=en&amp;v=5qcenVbrhOy8zihcc2aHOWD4&amp;size=invisible&amp;cb=p9su4e234xop"
            width="256"
            height="80"
            role="presentation"
            name="a-aues1j6g7ix5"
            frameBorder="0"
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
          ></iframe>
        </div>
        <div className="grecaptcha-error"></div>
        <textarea
          id="g-recaptcha-response-100000"
          name="g-recaptcha-response"
          className="g-recaptcha-response w-[250px] h-[40px] border-2 border-[rgb(193, 193, 193)] my-[10px] mx-[25px] p-0 resize-none hidden"
        ></textarea>
      </div>
      <iframe className="hidden"></iframe>

      <div
        className={`rounded-full w-16 h-16 bg-purple-600 fixed right-8 ${
          msg ? "z-[100]" : "z-40"
        }  bottom-5 hover:z-[70] cursor-pointer`}
        onClick={() => setMsg(!msg)}
      >
        <BiMessageDetail className="absolute right-[14px] z-50 w-9 h-9 text-white bottom-3" />
        <div
          className={`justify-center items-center gap-4 flex-col absolute bottom-20 right-[14px] ${
            msg ? "flex" : "hidden"
          }`}
        >
          <div className="group flex justify-center items-center">
            <span className="hidden group-hover:block absolute whitespace-nowrap bg-[#eee] w-auto px-4 py-1 rounded right-12">
              Buyer Contact
            </span>
            <a href="tel:+917838920406">
              <IoMdCall className="w-10 h-10 text-blue-600" />
            </a>
          </div>
          <div className="group flex justify-center items-center">
            <span className="hidden group-hover:block absolute whitespace-nowrap w-auto bg-[#eee] py-1 px-4 rounded right-12">
              Buyer Contact
            </span>
            <a href="https://wa.me/+917838920406">
              <RiWhatsappFill className="w-10 h-10 text-green-800" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyApp;
