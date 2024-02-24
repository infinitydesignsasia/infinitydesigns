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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-[120px] gap-16">
      <nav className="text-xl flex justify-between items-center font-semibold overflow-auto gap-8 whitespace-nowrap">
        <div>
          <button
            onClick={() => {
              setTab({ a: true });
            }}
            className={`${
              tab.a ? "bg-[#e8b871]" : "bg-[#e8c085]"
            } hover:bg-[#e8b871] px-3 py-1 rounded-lg`}
          >
            Designing
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              setTab({ b: true });
            }}
            className={`${
              tab.b ? "bg-[#e8b871]" : "bg-[#e8c085]"
            } hover:bg-[#e8b871] px-3 py-1 rounded-lg`}
          >
            Product Development
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              setTab({ c: true });
            }}
            className={`${
              tab.c ? "bg-[#e8b871]" : "bg-[#e8c085]"
            } hover:bg-[#e8b871] px-3 py-1 rounded-lg`}
          >
            Production & Quality
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              setTab({ d: true });
            }}
            className={`${
              tab.d ? "bg-[#e8b871]" : "bg-[#e8c085]"
            } hover:bg-[#e8b871] px-3 py-1 rounded-lg`}
          >
            Quality Control
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              setTab({ e: true });
            }}
            className={`${
              tab.e ? "bg-[#e8b871]" : "bg-[#e8c085]"
            } hover:bg-[#e8b871] px-3 py-1 rounded-lg`}
          >
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
