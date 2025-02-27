import { useTranslation } from "../../i18n";
import { CarouselNews } from "./ui/carousel";

const ForeNews = async ({ lng }) => {
  const { t } = await useTranslation(lng, "home");

  return (
    <section className=" bg-[#0080000b]">
      <div className="max-w-1200 mx-auto text-center  py-10">
        <div className="desktop:flex desktop:justify-between desktop:self-center desktop:gap-40">
          <h1 className="font-extrabold text-4xl text-center text-primary desktop:text-8xl ">
            {t("fore-news.title")}
          </h1>{" "}
          <p className="px-6 text-[#97A259] text-sm desktop:text-2xl desktop:text-start desktop:self-center">
            {t(`fore-news.details`)}
          </p>
        </div>
        <CarouselNews lng={lng} />
      </div>
    </section>
  );
};

export default ForeNews;
