"use client";

import Slider from "react-slick";
import { Card, CardContent } from "/components/ui/card";
import { Carousel, CarouselItem } from "/components/ui/carousel.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { useTranslation } from "@/src/app/i18n/client";
import { testimonyId } from "../../data/CarouselData";
import Image from "next/image";

export function SliderTestimony({ lng }) {
  // const { t } = useTranslation(lng, "home"); Inilah Penyebab Masalah infinite Loop

  var settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Carousel className="w-full mt-10 max-w-xs mx-auto">
      <Slider {...settings}>
        {testimonyId.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="shadow  ">
                <CardContent className="flex aspect-video items-center justify-center p-6">
                  <p className="text-[#18191F] text-[13px] tracking-wider ">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col p-3 gap-3 items-center justify-center text-center">
                  <Image
                    src={item.src}
                    alt="PT"
                    sizes="100%"
                    style={{ width: "50px", borderRadius: "100%" }}
                  />
                  <p className="text-[#888888] text-[13px] leading-6 tracking-wider">
                    {item.job}
                  </p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </Slider>
    </Carousel>
  );
}
