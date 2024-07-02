import Image from "next/image";
import Promo from "/public/images/Promo-2.png";
import { Card, CardContent } from "/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "/components/ui/carousel.jsx";
import { newsIndo, promo, slidesEn, slidesId } from "../../data/CarouselData";
import { ReadMoreButton } from "./button";
import { useTranslation } from "@/src/app/i18n";

export async function CarouselHero({ lng }) {
  const { t } = await useTranslation(lng, "home");

  return (
    <div className="w-full px-5 h-auto">
      <Carousel className="max-w-1200 mx-auto p-0">
        <CarouselContent>
          {lng === "en"
            ? slidesEn.map((item, idx) => (
                <CarouselItem key={idx}>
                  <Card className="border-0 outline-0  ">
                    <CardContent className="bg-[#F4F2EF] p-0 flex max-tablet:flex-col tablet:place-items-center ">
                      <div className="tablet:w-1/2 text-center pt-10 pb-5 h-full tablet:text-start tablet:ps-5">
                        <h2 className="text-primary text-4xl font-extrabold">
                          {item.title}
                        </h2>
                        <br />
                        <p className="text-base font-semibold tracking-wider text-[#97A259] ">
                          {item.desc}
                        </p>
                      </div>
                      <div className="tablet:w-1/2">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          sizes="100%"
                          style={{
                            width: "full",
                            height: "full",
                            margin: "auto",
                            padding: "",
                          }}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))
            : slidesId.map((item, idx) => (
                <CarouselItem key={idx}>
                  <Card className="border-0 outline-0">
                    <CardContent className="bg-[#F4F2EF] p-0">
                      <div className="text-center pt-10 pb-5 h-full">
                        <h2 className="text-primary text-4xl font-extrabold">
                          {item.title}
                        </h2>
                        <br />
                        <p className="text-base font-semibold tracking-wider text-[#97A259]">
                          {item.desc}
                        </p>
                      </div>
                      <Image
                        src={item.src}
                        alt={item.alt}
                        sizes="100%"
                        style={{ width: "90%", height: "auto", margin: "auto" }}
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-1 tablet:-left-5 bg-transparent border-none" />
        <CarouselNext className="absolute right-1 tablet:-right-5 bg-transparent border-none" />
      </Carousel>
    </div>
  );
}

export function CarouselNews({ lng }) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-4/6 mt-14 h-auto max-w-1200 mx-auto">
      <CarouselContent>
        {newsIndo.map((item, index) => (
          <CarouselItem
            key={index}
            className=" min-[550px]:basis-1/2 md:basis-1/3 lg:basis-1/4">
            <div className="p-1">
              <Card className="shadow border">
                <CardContent className="flex flex-col justify-center text-start p-6">
                  <Image src={item.src} alt={item.alt} />
                  <h3 className="line-clamp-3 text-[12px] font-bold my-2.5">
                    {item.title}
                  </h3>
                  <p className="text-[#B3b3b3] text-[10px] font-medium line-clamp-3">
                    {item.details}
                  </p>
                  <p className="mt-1.5 text-[#B3B3B3] text-[10px] italic">
                    {item.date}
                  </p>
                  <ReadMoreButton lng={lng} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="relative -bottom-10 -left-4 bg-transparent border-none" />
      <CarouselNext className="relative -bottom-10 left-4 bg-transparent border-none" />
    </Carousel>
  );
}

export async function CarouselPromo({ lng }) {
  const { t } = await useTranslation(lng, "home");

  return (
    <div className="flex h-auto relative">
      <Carousel className="pt-10 tablet:pt-16 px-2 w-full max-w-1200 mx-auto">
        <div className="relative flex flex-col gap-3 text-center mb-7">
          <h3 className="text-primary text-2xl font-extrabold">
            {t("promo.title")}
          </h3>
          <p className="text-[10px] text-[#97A269]">{t("promo.desc")}</p>
        </div>
        <div className="px-5">
          <CarouselContent>
            {promo.map((item, index) => (
              <CarouselItem key={index} className="basis-1/2 tablet:basis-1/3">
                <Card className=" outline-none border-0 bg-transparent">
                  <CardContent className=" p-0 flex aspect-square items-center justify-center ">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      sizes="100%"
                      className="rounded-2xl "
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
      </Carousel>
      <Image
        src={Promo}
        alt="BG"
        sizes="100%"
        className="absolute top-5 -z-10 w-full h-[105%] tablet:h-[110%] object-cover rounded-3xl"
      />
    </div>
  );
}
