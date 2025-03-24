import Image from "next/image";
import { Hero } from "./_components/hero";
import { About } from "./_components/about";
import { Footer } from "./_components/footer";
import { Services } from "./_components/services";
import { Reviews } from "./_components/reviews";

export default function Home() {
  return (
    <>
      <main>
        <Hero/>
        <About/>
        <Services/>
        <Reviews/>
        <Footer/>
      </main>
    </>
  );
}