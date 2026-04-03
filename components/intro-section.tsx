"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { gentleSpring, viewportOnce } from "@/lib/motion"

export function IntroSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden">
      {/* Background photo strip */}
      <div className="relative h-48 w-full md:h-64">
        <Image
          src="/images/hero-bg.avif"
          alt="Balloon installation backdrop"
          fill
          className="object-cover object-top"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-foreground/20" />
      </div>

      {/* Content band */}
      <div className="bg-[#8a9a7a] px-6 py-14 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-2 lg:gap-20">
          {/* Left: headline */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -28 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={gentleSpring}
          >
            <h2 className="font-serif text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Balloon Event Decor in Utah County &amp; Salt Lake City
            </h2>
          </motion.div>

          {/* Right: body + link */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 28 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ ...gentleSpring, delay: 0.08 }}
          >
            <p className="mb-8 leading-relaxed text-white/90">
              At Lou Balloons, we turn everyday spaces into unforgettable party moments. Whether you&apos;re hosting a baby shower, bridal brunch, or grand opening, our custom balloon installations are designed to wow — with quick setup, creative styling, and pro-level service across Utah County and Salt Lake City.
            </p>
            <div className="h-px w-12 bg-white/50 mb-6" />
            <Link
              href="/#about"
              className="text-sm font-semibold tracking-wide text-white underline underline-offset-4 hover:text-white/80 transition-colors"
            >
              Read More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
