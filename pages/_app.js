import "../styles/globals.css";
import { AiOutlineArrowUp } from "react-icons/ai";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [hide, setHide] = useState(false);
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

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <Component {...pageProps} />

      <div
        onClick={scrollToTop}
        className={`${
          hide ? "block" : "hidden"
        } fixed right-2 bottom-5 bg-green-400 p-3 rounded-full hover:animate-pulse cursor-pointer`}>
        <AiOutlineArrowUp className='text-white text-[45px]' />
      </div>
    </>
  );
}

export default MyApp;
