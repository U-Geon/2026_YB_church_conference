import StickyNav from "@/components/StickyNav";
import Hero from "@/components/Hero";
import Schedule from "@/components/Schedule";
import FloorGuide from "@/components/FloorGuide";
import PopupGuide from "@/components/PopupGuide";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <StickyNav />
      <main>
        <Hero />
        <Schedule />
        <FloorGuide />
        <PopupGuide />
        <Contact />
      </main>
    </>
  );
}
