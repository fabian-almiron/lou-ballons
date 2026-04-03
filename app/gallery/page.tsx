import type { Metadata } from "next"

import { GallerySection } from "@/components/gallery-section"
import { PageHeader } from "@/components/page-header"
import { SiteChrome } from "@/components/site-chrome"

export const metadata: Metadata = {
  title: "Gallery | Lou Balloons",
  description:
    "Browse balloon decor for birthdays, weddings, corporate events, holidays, and more across Utah.",
}

export default function GalleryPage() {
  return (
    <SiteChrome>
      <PageHeader
        title="Gallery"
        description="A glimpse of installs we've created for celebrations of every kind."
      />
      <GallerySection />
    </SiteChrome>
  )
}
