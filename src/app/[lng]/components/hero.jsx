import { CarouselHero } from "./ui/carousel";

const Hero = ({ lng }) => {
  return (
    <section className="px-4 bg-[#F4F2EF]">
      <div className="max-w-1200 mx-auto">
        <div>
          <div className="block overflow-hidden">
            <CarouselHero lng={lng} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
