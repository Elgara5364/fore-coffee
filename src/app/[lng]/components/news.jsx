import { useTranslation } from "../../i18n";
import { CarouselNews } from "./ui/carousel";

const ForeNews = async ({ lng }) => {
  const { t } = await useTranslation(lng, "home");

  return (
    <section className="max-w-1200 ">
      <div className="text-center bg-[#0080000b] py-10">
        <h1 className="font-extrabold text-4xl text-center text-primary">
          {t("fore-news.title")}
        </h1>{" "}
        <br />
        <p className="px-6 text-[#97A259] text-sm">{t(`fore-news.details`)}</p>
        <CarouselNews lng={lng} />
      </div>
    </section>
  );
};

export default ForeNews;
