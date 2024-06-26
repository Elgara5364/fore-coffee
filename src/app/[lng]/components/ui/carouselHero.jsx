"use client";

import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import { useTranslation } from "../../../i18n/client";

export function CarouselHero({ data, lng }) {
  const { t } = useTranslation(lng, "home");
  const [state, setState] = useState(0);

  return (
    <div className="w-full h-auto">
      <div className="text-center pt-10 pb-5 h-full">
        <h2 className="text-primary text-4xl font-extrabold">
          {t(`hero-title.title${state + 1}`)}
        </h2>
        <br />
        <p className="px-6 text-[#97A259] text-sm">
          {t(`hero-par.par${state + 1}`)}
        </p>
      </div>
      <button
        className={
          state === 0
            ? "absolute left-10 top-1/2 text-3xl text-[#88a59c]"
            : "absolute left-10 top-1/2 text-3xl text-[#006041]"
        }
        disabled={state === 0}>
        <IoIosArrowBack onClick={() => setState(state - 1)} />
      </button>
      <div className="w-full ">
        {data.map((item, idx) => (
          <div key={idx} className="w-full flex justify-center">
            <Image
              src={item.src}
              alt={item.alt}
              sizes="100%"
              // width={1000}
              // height={1000}
              style={{ width: "90%", padding: "0px 25px", height: "auto" }}
              className={state === idx ? "block" : "hidden"}
            />
          </div>
        ))}
      </div>
      <button
        className={
          state === data.length - 1
            ? "absolute right-10 top-1/2 text-3xl text-[#88a59c] "
            : "absolute right-10 top-1/2 text-3xl text-[#006041]"
        }
        disabled={state === data.length - 1}>
        <IoIosArrowForward
          className="absolute right-1 top-1/2"
          onClick={() => setState(state + 1)}
        />
      </button>
    </div>
  );
}
