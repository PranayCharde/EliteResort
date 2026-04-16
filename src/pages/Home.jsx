import Hero from "../components/home/Hero";
import AboutStrip from "../components/home/AboutStrip";
import About from "../components/home/About";
import Offers from "../components/home/Offers";
import Amenities from "../components/home/Amenities";
import Sustainability from "../components/home/Sustainability";
import Testimonials from "../components/home/Testimonials";
import Faq from "../components/home/Faq";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutStrip />
      <About />
      <Offers />
      <Amenities />
      <Sustainability />
      <Testimonials />
      <Faq />
    </>
  );
}

