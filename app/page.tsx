import Hero from "@/components/hero"
import { About } from "@/components/about"
import { Education } from "@/components/education"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Achievements } from "@/components/achievements"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { Blog } from "@/components/blog"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Skills />
        <Experience />
        <Achievements />
        <Blog />
        <Contact />
      </main>
    </div>
  )
}
