"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import { gentleSpring, viewportOnce } from "@/lib/motion"

export function AboutSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="about" className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            className="relative"
            initial={reduceMotion ? false : { opacity: 0, x: -36, rotate: -1 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, x: 0, rotate: 0 }}
            viewport={viewportOnce}
            transition={gentleSpring}
          >
            <motion.div
              className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-muted"
              whileHover={reduceMotion ? undefined : { scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <Image
                src="/images/meet-the-creator.avif"
                alt="Lou Balloons founder"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              {/* Bottom scrim so white signature reads on the photo */}
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-black/65 via-black/25 to-transparent"
                aria-hidden
              />
              <motion.div
                className="absolute right-4 bottom-4 left-4 md:right-6 md:bottom-6 md:left-6"
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ ...gentleSpring, delay: reduceMotion ? 0 : 0.15 }}
              >
                <Image
                  src="/images/founder-signature.avif"
                  alt="Founder signature"
                  width={320}
                  height={120}
                  className="h-auto max-w-[min(14rem,72%)] object-contain object-left drop-shadow-md"
                />
              </motion.div>
            </motion.div>
            <motion.div
              aria-hidden
              className="animate-float-soft bg-primary/10 absolute -right-6 -bottom-6 -z-10 h-48 w-48 rounded-full"
              initial={reduceMotion ? false : { scale: 0.85, opacity: 0.6 }}
              whileInView={reduceMotion ? undefined : { scale: 1, opacity: 1 }}
              viewport={viewportOnce}
              transition={gentleSpring}
            />
          </motion.div>

          <motion.div
            className="lg:pl-8"
            initial={reduceMotion ? false : { opacity: 0, x: 36 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ ...gentleSpring, delay: reduceMotion ? 0 : 0.08 }}
          >
            <p className="text-primary mb-4 text-sm font-medium tracking-wide uppercase">
              About
            </p>
            <h2 className="font-serif text-foreground mb-8 text-4xl tracking-tight md:text-5xl">
              Meet the Creator
            </h2>
            <div className="space-y-6 leading-relaxed text-muted-foreground">
              <p className="text-lg">
                Hi, I&apos;m Sarah—the creative behind it all. What started as a love for celebrating life&apos;s moments has grown into a passion for designing experiences that feel as good as they look.
              </p>
              <p>
                I believe every event deserves something special. My goal is to make the process simple, enjoyable, and completely tailored to you—so you can focus on celebrating while I handle the details.
              </p>
              <p>
                Whether it&apos;s an intimate dinner party or a grand celebration, I pour my heart into every installation, ensuring your vision comes to life exactly as you imagined.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
