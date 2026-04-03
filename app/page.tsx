import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { IntroSection } from "@/components/intro-section"
import { ServicesSection } from "@/components/services-section"
import { GallerySection } from "@/components/gallery-section"
import { AboutSection } from "@/components/about-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { SectionDivider } from "@/components/section-divider"

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <SectionDivider align="left" tone="light" bleed="lg" />
      <IntroSection />
      <SectionDivider
        align="right"
        tone="intro-green"
        className="bg-[#8a9a7a]"
        bleed="md"
      />
      <ServicesSection />
      <GallerySection />
      <AboutSection />
      <SectionDivider align="right" tone="dark" className="bg-foreground" />
      <CTASection />
      <Footer />
    </main>
  )
}
