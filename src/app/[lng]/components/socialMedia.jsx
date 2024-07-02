import Image from "next/image";
import Instagram from "/public/images/instagram-1.png";
import { ig } from "../data/CarouselData";
import Link from "next/link";

// * TODO create a vertical gradient background from color to white
const SocialMedia = ({ lng }) => {
  return (
    <section className="mt-10 pb-5 px-5 bg-[#c2e9f253]">
      <div className="max-w-1200 mx-auto ">
        <div className="pt-10 text-center flex flex-col gap-5 mb-12">
          <h2 className="text-[#97A259] ">Follow kami!</h2>
          <p className="text-[#006041] text-3xl font-extrabold">@fore.coffee</p>
          <div className="mx-auto px-3 py-1 flex justify-center self-center w-40 gap-3 border-2 rounded-full border-[#006041]">
            <Image
              src={Instagram}
              alt="IG"
              sizes="100%"
              style={{ width: "25px", height: "25px" }}
              className="self-center"
            />
            <p className="text-[#006041] text-2xl">Follow</p>
          </div>
        </div>
        <div className="mx-auto max-w-1200 px-4 grid grid-flow-row-dense grid-cols-2 min-[500px]:grid-cols-3 min-[550px]:grid-cols-4 items-center gap-3">
          {ig.map((item, index) => (
            <Link href={item.link} key={index} className="relative">
              <Image
                src={item.src}
                alt="IG"
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                  aspectRatio: "1/1",
                  objectFit: "cover",
                  objectPosition: "top",
                }}
                className="rounded-xl"
              />
              <Image
                src={Instagram}
                alt="path"
                className="absolute top-1 right-1 w-6"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
