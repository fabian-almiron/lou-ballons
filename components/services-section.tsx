"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { gentleSpring, viewportOnce } from "@/lib/motion"

export function ServicesSection() {
  const reduceMotion = useReducedMotion()

  return (
    <>
      {/* Make Your Event Unforgettable */}
      <section id="services" className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto_1fr] lg:gap-12">
            {/* Left images */}
            <motion.div
              className="hidden gap-4 lg:flex lg:flex-col"
              initial={reduceMotion ? false : { opacity: 0, x: -32 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={gentleSpring}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/gallery-1.jpg"
                  alt="Balloon arch installation"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/gallery-2.jpg"
                  alt="Corporate balloon decor"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
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
                <Button asChild className="rounded-none px-8 font-semibold">
                  <Link href="/#contact">Corporate Events</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-none border-primary/60 px-8 font-semibold text-primary hover:bg-primary/5">
                  <Link href="/#contact">Special Occasions</Link>
                </Button>
              </div>
            </motion.div>

            {/* Right images */}
            <motion.div
              className="hidden gap-4 lg:flex lg:flex-col"
              initial={reduceMotion ? false : { opacity: 0, x: 32 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={gentleSpring}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/gallery-3.jpg"
                  alt="Colorful balloon installation"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/gallery-4.jpg"
                  alt="Balloon garland display"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Corporate Events Banner */}
      <section className="bg-[#f5f0e8] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left: text + stats */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, x: -32 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={gentleSpring}
            >
              <h2 className="font-serif mb-8 text-3xl font-normal tracking-tight text-foreground md:text-4xl lg:text-5xl">
                Balloon Decor For Any<br />Corporate Event
              </h2>
              <div className="mb-8 grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border-2 border-foreground">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.344.346a3.5 3.5 0 01-4.95 0l-.344-.346z" /></svg>
                  </div>
                  <p className="text-sm font-semibold text-foreground">Quick &amp; Easy<br />Install Process</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">We arrive, install, and leave you party-ready.</p>
                </div>
                <div>
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border-2 border-foreground">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                  </div>
                  <p className="text-sm font-semibold text-foreground">5 Years of<br />Experience</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">From backyard birthdays to corporate activations, we&apos;ve styled it all.</p>
                </div>
                <div>
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border-2 border-foreground">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm3.707-11.707l-4.5 4.5-1.5-1.5a1 1 0 00-1.414 1.414l2.207 2.207a1 1 0 001.414 0l5.207-5.207a1 1 0 00-1.414-1.414z"/></svg>
                  </div>
                  <p className="text-sm font-semibold text-foreground">
                    <a href="https://g.co/kgs/lou-balloons" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">5.0 Review<br />Google Rating</a>
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">Clients rave about our creativity, communication, and flawless installs.</p>
                </div>
              </div>
              <Button asChild variant="outline" className="rounded-none border-primary/60 px-10 font-semibold text-primary hover:bg-primary/5">
                <Link href="/#contact">Hire Us!</Link>
              </Button>
            </motion.div>

            {/* Right: photo */}
            <motion.div
              className="relative aspect-[4/3] overflow-hidden rounded-2xl"
              initial={reduceMotion ? false : { opacity: 0, x: 32 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={gentleSpring}
            >
              <Image
                src="/images/gallery-4.jpg"
                alt="doTERRA Founders corporate balloon installation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Special Occasions */}
      <section className="bg-[#f5f0e8] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left: text */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, x: -32 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={gentleSpring}
            >
              <h2 className="font-serif mb-6 text-3xl font-normal tracking-tight text-foreground md:text-4xl lg:text-5xl">
                Special Occasions
              </h2>
              <p className="mb-8 text-center text-base leading-relaxed text-muted-foreground">
                Celebrate the milestones that matter most with custom balloon decor designed to elevate any special occasion. Whether you&apos;re hosting a baby shower, bridal shower, birthday party, engagement, or wedding, we&apos;ll create a display that brings your vision to life. Each install is thoughtfully tailored to your theme, color palette, and venue. With a streamlined setup process and a keen eye for detail, we&apos;ll make your event feel as memorable as the moment you&apos;re celebrating.
              </p>
              <Button asChild className="rounded-none px-10 font-semibold">
                <Link href="/#contact">Hire Us!</Link>
              </Button>
            </motion.div>

            {/* Right: photo */}
            <motion.div
              className="relative aspect-[4/3] overflow-hidden rounded-2xl"
              initial={reduceMotion ? false : { opacity: 0, x: 32 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={gentleSpring}
            >
              <Image
                src="/images/gallery-5.jpg"
                alt="Elegant gold and white balloon garland for special occasion"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
