import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ShopSection } from "@/components/shop-section"
import { AboutSection } from "@/components/about-section"
import { ProcessSection } from "@/components/process-section"
import { GallerySection } from "@/components/gallery-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <div id="shop">
        <ShopSection categoryId="popular-picks" />
        <ShopSection categoryId="prop-rentals" className="bg-muted/50" />
        <ShopSection categoryId="grab-and-go" />
        <ShopSection categoryId="add-ons" className="bg-muted/50" />
      </div>
      <AboutSection />
      <ProcessSection />
      <GallerySection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
