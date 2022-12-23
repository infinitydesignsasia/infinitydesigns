import { useState } from "react";
import Designing from "./Tabs/Designing";
import Production from "./Tabs/Production";
import ProdQual from "./Tabs/ProdQual";
import QualityControl from "./Tabs/QualityControl";
import Logistics from "./Tabs/Logistics";
import { useRouter } from "next/router";

export default function ServicesNav() {
  const [tab, setTab] = useState({
    a: true,
    b: false,
    c: false,
    d: false,
    e: false,
  });

  const router = useRouter();
  console.log(router.query);

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 mt-[120px] gap-16'>
      <nav className='flex justify-between items-center font-semibold overflow-auto gap-8 whitespace-nowrap'>
        <div>
          <button
            onClick={() => {
              setTab({ a: true });
            }}
            className={`${tab.a ? "text-black" : "text-gray-700"}`}>
            Designing
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              setTab({ b: true });
            }}
            className={`${tab.b ? "text-black" : "text-gray-700"}`}>
            Production Development
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              setTab({ c: true });
            }}
            className={`${tab.c ? "text-black" : "text-gray-700"}`}>
            Production & Quality
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              setTab({ d: true });
            }}
            className={`${tab.d ? "text-black" : "text-gray-700"}`}>
            Quality Control
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              setTab({ e: true });
            }}
            className={`${tab.e ? "text-black" : "text-gray-700"}`}>
            Logistics
          </button>
        </div>
      </nav>

      <div>{tab.a && <Designing />}</div>
      <div>{tab.b && <Production />}</div>
      <div>{tab.c && <ProdQual />}</div>
      <div>{tab.d && <QualityControl />}</div>
      <div>{tab.e && <Logistics />}</div>
    </div>
  );
}
