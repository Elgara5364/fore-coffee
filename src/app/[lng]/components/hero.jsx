import { CarouselHero } from "./ui/carouselHero";
import { slides } from "../data/CarouselData";
// import { data } from "../data/CarouselData";

const Hero = ({ lng }) => {
  return (
    <section className="px-4 bg-[#F4F2EF]">
      <div className="max-w-1200 mx-auto">
        <div>
          <div className="block overflow-hidden">
            <CarouselHero data={slides} lng={lng} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
