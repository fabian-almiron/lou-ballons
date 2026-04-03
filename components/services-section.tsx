"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { gentleSpring, viewportOnce } from "@/lib/motion"
import { PopularPicksSection } from "@/components/popular-picks-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { SectionDivider } from "@/components/section-divider"

export function ServicesSection() {
  const reduceMotion = useReducedMotion()

  return (
    <>
      {/* Make Your Event Unforgettable */}
      <section id="services" className="w-full bg-background py-20 lg:py-28">
        <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-60">
          <div className="grid items-center gap-8 lg:grid-cols-[1.25fr_auto_1.25fr] lg:gap-12 xl:gap-26">
            {/* Left images — hard-edge stacked tiles */}
            <motion.div
              className="relative hidden min-h-0 overflow-visible lg:block"
              initial={reduceMotion ? false : { opacity: 0, x: -32 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={gentleSpring}
            >
              <div className="relative flex flex-col pt-2 pb-14">
                <div className="relative z-[1] aspect-[4/3] w-full -translate-x-2 overflow-hidden rounded-none bg-background">
                  <Image
                    src="/images/gallery-1.jpg"
                    alt="Balloon arch installation"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 32vw, 90vw"
                  />
                </div>
                <div className="relative z-[2] -mt-[18%] aspect-[4/3] w-full translate-x-3 overflow-hidden rounded-none bg-background">
                  <Image
                    src="/images/gallery-2.jpg"
                    alt="Corporate balloon decor"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 32vw, 90vw"
                  />
                </div>
              </div>
            </motion.div>

            {/* Center text */}
            <motion.div
              className="text-center"
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ ...gentleSpring, delay: 0.1 }}
            >
              <h2 className="font-display mb-6 text-4xl uppercase tracking-tight text-foreground md:text-5xl lg:text-6xl">
                Make Your Event<br />Unforgettable
              </h2>
              <p className="mx-auto mb-10 max-w-md text-base leading-relaxed text-muted-foreground">
                What sets us apart is our commitment to personalized balloon design and thoughtful service. We collaborate closely with each client to understand their vision, then bring it to life with custom balloon arches, elegant centerpieces, and playful bouquets. Whether you&apos;re planning a birthday bash or a formal event, we&apos;ll style it to match your vibe — beautifully and effortlessly!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="main-btn black-btn">
                  <Link href="/#contact">Corporate Events</Link>
                </Button>
                <Button asChild variant="green" size="lg" className="main-btn green-btn">
                  <Link href="/#contact">Special Occasions</Link>
                </Button>
              </div>
            </motion.div>

            {/* Right images — mirrored stack */}
            <motion.div
              className="relative hidden min-h-0 overflow-visible lg:block"
              initial={reduceMotion ? false : { opacity: 0, x: 32 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={gentleSpring}
            >
              <div className="relative flex flex-col pt-2 pb-14">
                <div className="relative z-[1] aspect-[4/3] w-full translate-x-2 overflow-hidden rounded-none bg-background">
                  <Image
                    src="/images/gallery-3.jpg"
                    alt="Colorful balloon installation"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 32vw, 90vw"
                  />
                </div>
                <div className="relative z-[2] -mt-[18%] aspect-[4/3] w-full -translate-x-3 overflow-hidden rounded-none bg-background">
                  <Image
                    src="/images/gallery-4.jpg"
                    alt="Balloon garland display"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 32vw, 90vw"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider align="right" tone="light" className="bg-background" />

      {/* Corporate Events — serif headline, highlight bars, feature row, hero photo */}
      <section className="w-full bg-[#f5f0e8] py-20 lg:py-24">
        <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14 xl:gap-20">
            <motion.div
              className="text-left"
              initial={reduceMotion ? false : { opacity: 0, x: -28 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={gentleSpring}
            >
              <h2 className="font-serif mb-10 text-[1.75rem] font-normal leading-[1.2] tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-[2.65rem] lg:leading-[1.18]">
                <span className="relative isolate inline-block px-0.5">
                  <span
                    className="absolute inset-x-0 top-[0.52em] bottom-[0.12em] -z-10 rounded-sm bg-foreground/9"
                    aria-hidden
                  />
                  <span className="relative">Balloon Decor For Any</span>
                </span>
                <br />
                <span className="relative isolate mt-1 inline-block px-0.5">
                  <span
                    className="absolute inset-x-0 top-[0.52em] bottom-[0.12em] -z-10 rounded-sm bg-foreground/9"
                    aria-hidden
                  />
                  <span className="relative">Corporate Event</span>
                </span>
              </h2>

              <div className="mb-10 grid gap-8 sm:grid-cols-3 sm:gap-5 lg:gap-8">
                <div className="flex flex-col items-start text-left">
                  <div className="mb-3 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-foreground/35 bg-background/40">
                    <svg className="h-5 w-5 text-foreground/85" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="4" strokeLinecap="round" />
                      <path strokeLinecap="round" d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold leading-snug text-foreground">
                    Quick &amp; Easy Install Process
                  </p>
                  <p className="mt-2 text-[0.8125rem] leading-relaxed text-muted-foreground">
                    We arrive, install, and leave you party-ready.
                  </p>
                </div>
                <div className="flex flex-col items-start text-left">
                  <div className="mb-3 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-foreground/35 bg-background/40">
                    <svg className="h-5 w-5 text-foreground/85" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold leading-snug text-foreground">5 Years of Experience</p>
                  <p className="mt-2 text-[0.8125rem] leading-relaxed text-muted-foreground">
                    From backyard birthdays to corporate activations, we&apos;ve styled it all.
                  </p>
                </div>
                <div className="flex flex-col items-start text-left">
                  <div className="mb-3 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-foreground/35 bg-background/40">
                    <svg className="h-5 w-5 text-foreground/85" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold leading-snug text-foreground">
                    <a
                      href="https://g.co/kgs/lou-balloons"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-foreground/40 underline-offset-[0.2em] transition-colors hover:decoration-foreground"
                    >
                      5.0 Review Google Rating
                    </a>
                  </p>
                  <p className="mt-2 text-[0.8125rem] leading-relaxed text-muted-foreground">
                    Clients rave about our creativity, communication, and flawless installs.
                  </p>
                </div>
              </div>

              <Button asChild variant="green" size="lg" className="main-btn green-btn rounded-md px-10">
                <Link href="/#contact">Hire Us!</Link>
              </Button>
            </motion.div>

            <motion.div
              className="relative aspect-4/3 min-h-[220px] overflow-hidden rounded-none sm:min-h-[280px] lg:min-h-0"
              initial={reduceMotion ? false : { opacity: 0, x: 28 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={gentleSpring}
            >
              <Image
                src="/images/services-image.avif"
                alt="Corporate balloon decor installation"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider
        align="center"
        tone="light"
        size="compact"
        className="bg-[#f5f0e8]"
      />

      <PopularPicksSection />

      <TestimonialsSection />

      {/* Special Occasions — cream text column, full-bleed photo */}
      <section className="flex w-full flex-col overflow-hidden lg:flex-row lg:min-h-[min(85vh,640px)]">
        <motion.div
          className="flex w-full shrink-0 flex-col justify-center bg-[#fff] px-6 py-16 sm:px-8 lg:w-0 lg:max-w-[34rem] lg:flex-[0.95] lg:px-12 xl:max-w-[36rem] xl:pl-16 xl:pr-12 2xl:pl-24 2xl:pr-16 lg:py-24"
          initial={reduceMotion ? false : { opacity: 0, x: -28 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={viewportOnce}
          transition={gentleSpring}
        >
          <h2 className="font-serif mb-8 text-[1.75rem] font-normal leading-[1.2] tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-[2.65rem] lg:leading-[1.18]">
            Special Occasions
          </h2>
          <p className="mb-10 max-w-xl text-left text-base leading-[1.75] text-foreground/80">
            Celebrate the milestones that matter most with custom balloon decor designed to elevate any special occasion. Whether you&apos;re hosting a baby shower, bridal shower, birthday party, engagement, or wedding, we&apos;ll create a display that brings your vision to life. Each install is thoughtfully tailored to your theme, color palette, and venue. With a streamlined setup process and a keen eye for detail, we&apos;ll make your event feel as memorable as the moment you&apos;re celebrating.
          </p>
          <div>
            <Button asChild size="lg" className="main-btn black-btn rounded-md px-10">
              <Link href="/#contact">Hire Us!</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="relative aspect-[4/3] min-h-[220px] w-full lg:aspect-auto lg:min-h-0 lg:flex-1 lg:self-stretch"
          initial={reduceMotion ? false : { opacity: 0, x: 32 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={viewportOnce}
          transition={gentleSpring}
        >
          <Image
            src="/images/special-occasions.avif"
            alt="Elegant balloon garland for special occasions"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
        </motion.div>
      </section>
    </>
  )
}
