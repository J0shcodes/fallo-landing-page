import Image from "next/image";

import Newsletter from "@/components/Newsletter";
import GetStarted from "@/components/GetStarted";
import FalloTeam from "@/components/FalloTeam";
import Testimonials from "@/components/Testimonials";
import ChooseFallo from "@/components/ChooseFallo";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <FalloTeam />
      <ChooseFallo />
      {/* <Testimonials /> */}
      <GetStarted />
      <Newsletter />
    </main>
  );
}
