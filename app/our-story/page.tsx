import type { Metadata } from "next"

import { AboutSection } from "@/components/about-section"
import { PageHeader } from "@/components/page-header"
import { SiteChrome } from "@/components/site-chrome"
import { StoryContactSection } from "@/components/story-contact-section"
import { WhyUsSection } from "@/components/why-us-section"

export const metadata: Metadata = {
  title: "Our Story | Lou Balloons",
  description:
    "Learn about Lou Balloons and our approach to custom balloon design in Utah County and Salt Lake City.",
}

export default function OurStoryPage() {
  return (
    <SiteChrome>
      <PageHeader
        title="Our Story"
        description="The people and passion behind your favorite balloon moments."
      />
      <AboutSection />
      <WhyUsSection />
      <StoryContactSection />
    </SiteChrome>
  )
}
