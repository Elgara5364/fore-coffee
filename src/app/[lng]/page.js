import BenefitPromo from "./components/benefitPromo";
import DownloadApp from "./components/downloadApp";
import Footer from "./components/footer";
import Hero from "./components/hero";
import ForeNews from "./components/news";
import OurStory from "./components/ourStory";
import SocialMedia from "./components/socialMedia";
import Testimony from "./components/testimony";

export default function Home({ params: { lng } }) {
  return (
    <>
      <Hero lng={lng} />
      <OurStory lng={lng} />
      <ForeNews lng={lng} />
      <DownloadApp lng={lng} />
      <BenefitPromo lng={lng} />
      <Testimony lng={lng} />
      <SocialMedia lng={lng} />
      <Footer />
    </>
  );
}
