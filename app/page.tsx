import { AboutSection } from "@/components/about-section"
import { CTASection } from "@/components/cta-section"
import { GallerySection } from "@/components/gallery-section"
import { HeroSection } from "@/components/hero-section"
import { IntroSection } from "@/components/intro-section"
import { ServicesSection } from "@/components/services-section"
import { SectionDivider } from "@/components/section-divider"
import { SiteChrome } from "@/components/site-chrome"

export default function Home() {
  return (
    <SiteChrome>
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
    </SiteChrome>
  )
}
