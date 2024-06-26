import Hero from "./components/hero";
import ForeNews from "./components/news";
import OurStory from "./components/ourStory";

export default function Home({ params: { lng } }) {
  return (
    <>
      <Hero lng={lng} />
      <OurStory lng={lng} />
      <ForeNews lng={lng} />
    </>
  );
}
