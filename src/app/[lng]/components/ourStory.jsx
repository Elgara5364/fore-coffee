import Image from "next/image";
import Story from "/public/images/web2-768x735.png";
import { useTranslation } from "../../i18n";
import { OurStoryButton } from "./ui/button";

const OurStory = async ({ lng }) => {
  const { t } = await useTranslation(lng, "home");

  return (
    <section className="my-10 max-w-1200 px-10">
      <h1 className="font-extrabold text-4xl text-center text-primary">
        {t("our-story.title")}
      </h1>
      <div className="flex max-tablet:flex-col gap-4 mt-10">
        <div className="w-full">
          <Image
            src={Story}
            alt="Our Story"
            sizes="100%"
            style={{ width: "full", height: "auto" }}
            className=" pb-8 "
          />
        </div>
        <div className="tablet:w-3/4 tablet:pt-5">
          <p className="text-sm font-normal leading-6 mb-2.5">
            {t("our-story.details1")}
          </p>{" "}
          <p className="text-sm font-normal leading-6">
            {t("our-story.details2")}
          </p>
          <OurStoryButton lng={lng} />
        </div>
      </div>
    </section>
  );
};

export default OurStory;
