import * as React from "react";

import { Card, CardContent } from "/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "/components/ui/carousel.jsx";
import Image from "next/image";
import { newsIndo } from "../../data/CarouselData";
import Link from "next/link";
import { ReadMoreButton } from "./button";

export function CarouselNews({ lng }) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-5/6 mt-14 h-auto max-w-sm mx-auto">
      <CarouselContent>
        {newsIndo.map((item, index) => (
          <CarouselItem
            key={index}
            className=" min-[550px]:basis-1/2 md:basis-1/3 lg:basis-1/4">
            <div className="p-1">
              <Card>
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
      <CarouselPrevious className="relative -bottom-10 left-0.5 bg-transparent border-none" />
      <CarouselNext className="relative -bottom-10 right-0.5 bg-transparent border-none" />
    </Carousel>
  );
}
