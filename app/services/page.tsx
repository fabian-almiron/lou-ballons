import type { Metadata } from "next"

import { PageHeader } from "@/components/page-header"
import { ProcessSection } from "@/components/process-section"
import {
  GarlandAddonsSection,
  GrabAndGoSection,
  PropRentalsSection,
} from "@/components/services-offerings-bands"
import { ServicesSection } from "@/components/services-section"
import { SiteChrome } from "@/components/site-chrome"

export const metadata: Metadata = {
  title: "Services | Lou Balloons",
  description:
    "Custom balloon arches, garlands, installs, and shop picks for Utah County and Salt Lake City events.",
}

export default function ServicesPage() {
  return (
    <SiteChrome>
      <PageHeader
        title="Services"
        description="Arches, garlands, corporate installs, and everything you need to make your celebration unforgettable."
      />
      <ServicesSection variant="inner" />
      <GrabAndGoSection />
      <GarlandAddonsSection />
      <PropRentalsSection />
      <ProcessSection />
    </SiteChrome>
  )
}
