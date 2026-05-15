import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WaveformBackground, GridBackground } from "@/components/waveform-background"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background effects */}
      <WaveformBackground />
      <GridBackground />

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
        <Footer />
      </div>

      {/* Performance monitoring */}
      <SpeedInsights />
    </main>
  )
}
