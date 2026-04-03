import type { Metadata } from "next"

import { CTASection } from "@/components/cta-section"
import { SiteChrome } from "@/components/site-chrome"

export const metadata: Metadata = {
  title: "Contact | Lou Balloons",
  description:
    "Book your event or request a quote. Serving Utah County and Salt Lake City with custom balloon decor.",
}

export default function ContactPage() {
  return (
    <SiteChrome>
      <CTASection layout="split" />
    </SiteChrome>
  )
}
