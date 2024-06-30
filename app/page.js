"use client"
import AboutSection from "@/components/AboutSection"
import HeroSection from "@/components/HeroSection"
import ProjectsSection from "@/components/ProjectSection"
import Skills from "@/components/MySkills"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Education from "@/components/Education"




export default function Home() {
  return (
    <>
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl flex flex-col gap-12">
      
      <HeroSection />
      <AboutSection />
      <Skills />
      <Contact />
    </main>
      <Footer/>
    </>
  )
}
