import Image from "next/image";
import { useTranslation } from "../../i18n";
import Citrus from "/public/images/Sunny-Citrus-Jasmine.png";
import Macha from "/public/images/matcha-ice-1.png";
import { SliderTestimony } from "./ui/slider";

const Testimony = async ({ lng }) => {
  const { t } = await useTranslation(lng, "home");

  return (
    <section className="px-5 mt-10 mx-auto overflow-hidden">
      <div className="max-w-1200 flex flex-col gap-1 relative mx-auto">
        <div className="text-center px-5">
          <div className="flex justify-between relative">
            <div className="w-1/4 tablet:w-2/12 max-tablet:absolute max-tablet:top-0 max-tablet:-left-10">
              <Image
                src={Macha}
                alt="Macha"
                sizes="100%"
                style={{ width: "full", height: "auto" }}
                className="w-full"
              />
            </div>
            <div>
              <h1 className="px-5 font-bold text-3xl text-center text-primary">
                {t("testimony.title")}
              </h1>{" "}
              <div className="w-full mx-auto mt-10">
                {" "}
                <p className="inline mx-auto  border-2 rounded-3xl px-3 py-4 border-dashed border-[#97A259] text-[12px] text-[#97A259]">
                  {t("testimony.desc")}
                </p>
              </div>
            </div>
            <div className="w-1/4 tablet:w-2/12 max-tablet:absolute max-tablet:top-0 max-tablet:-right-10">
              <Image
                src={Citrus}
                alt="Sunny Citrus Jasmine"
                sizes="100%"
                style={{ width: "full", height: "auto" }}
                className="w-full"
              />
            </div>
          </div>
        </div>
        <SliderTestimony />
      </div>
    </section>
  );
};

export default Testimony;
