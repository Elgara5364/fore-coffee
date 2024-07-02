import { CarouselHero } from "./ui/carousel";

const Hero = ({ lng }) => {
  return (
    <section className="px-2 bg-[#F4F2EF]">
      <div className="max-w-1200 mx-auto">
        <CarouselHero lng={lng} />
      </div>
    </section>
  );
};

export default Hero;
