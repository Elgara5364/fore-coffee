import Image from "next/image";
import { useTranslation } from "../../i18n";
import Citrus from "/public/images/Sunny-Citrus-Jasmine.png";
import Macha from "/public/images/matcha-ice-1.png";

import { SliderTestimony } from "./ui/slider";

const Testimony = async ({ lng }) => {
  const { t } = await useTranslation(lng, "home");

  return (
    <section className="max-w-1200 px-4 mx-auto">
      <div className="flex flex-col gap-1 relative">
        <div className="text-center px-5">
          <h1 className="px-5 font-bold text-3xl text-center text-primary">
            {t("testimony.title")}
          </h1>
          <div className="w-full mx-auto mt-10">
            <p className="inline mx-auto  border-2 rounded-3xl px-3 py-4 border-dashed border-[#97A259] text-[12px] text-[#97A259]">
              {t("testimony.desc")}
            </p>
          </div>
        </div>
        <div className="w-full absolute">
          <Image
            src={Citrus}
            alt="Sunny Citrus Jasmine"
            sizes="100%"
            style={{ width: "80px", height: "105px" }}
            className="relative left-[80%]"
          />
          <Image
            src={Macha}
            alt="Macha"
            sizes="100%"
            style={{ width: "70px", height: "90px" }}
            className="relative -top-7 -left-[2%]"
          />
        </div>
        <SliderTestimony />
      </div>
    </section>
  );
};

export default Testimony;
