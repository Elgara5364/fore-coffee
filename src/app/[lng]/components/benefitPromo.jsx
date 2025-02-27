import { CarouselPromo } from "./ui/carousel";

const BenefitPromo = ({ lng }) => {
  return (
    <section className="pb-10 px-5">
      <div className="max-w-1200 mx-auto">
        <CarouselPromo lng={lng} />
      </div>
    </section>
  );
};

export default BenefitPromo;
