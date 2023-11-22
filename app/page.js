"use client"
import AboutSection from "@/components/AboutSection"
import HeroSection from "@/components/HeroSection"
import ProjectsSection from "@/components/ProjectSection"
import Skills from "@/components/MySkills"
import Contact from "@/components/Contact"




export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      
      <HeroSection />
      <AboutSection />
      <Skills />
      <ProjectsSection />
      <Contact />
    </main>
  )
}
