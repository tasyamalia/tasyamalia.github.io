import { Academic } from "@/components/sections/academic";
import { Expertise } from "@/components/sections/expertise";
import { Experience } from "@/components/sections/experience";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Impact } from "@/components/sections/impact";
import { Navbar } from "@/components/sections/navbar";
import { Projects } from "@/components/sections/projects";
import { Recommendations } from "@/components/sections/recommendations";
import { TechStack } from "@/components/sections/tech-stack";
import { WhyWorkWithMe } from "@/components/sections/why-work-with-me";
import { Writing } from "@/components/sections/writing";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <Navbar />
      <Hero />
      <Impact />
      <Experience />
      <Recommendations />
      <Projects />
      <Expertise />
      <Academic />
      <TechStack />
      <Writing />
      <WhyWorkWithMe />
      <Footer />
    </main>
  );
}
