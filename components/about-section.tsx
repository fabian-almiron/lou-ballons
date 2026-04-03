"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { gentleSpring, viewportOnce } from "@/lib/motion"

export function AboutSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="about" className="bg-foreground py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: text */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -36 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={gentleSpring}
          >
            <h2 className="font-display mb-6 text-5xl uppercase leading-none tracking-tight text-background md:text-6xl lg:text-7xl">
              About<br />The<br />Founder
            </h2>
            <p className="mb-2 font-semibold text-background">Hello!</p>
            <p className="mb-8 leading-relaxed text-background/80">
              I&apos;m McKenzie— wife, mom, &amp; owner of Lou Balloons. I believe life is full of moments worth celebrating! Whether big or small, I want to make your events &amp; occasions memorable. My company offers incredible balloon styling for all occasions &amp; we can&apos;t wait to work with you!
            </p>
            <Button asChild variant="white" size="lg">
              <Link href="/#services">Services</Link>
            </Button>

            {/* Divider line */}
            <div className="mt-12 h-16 w-px bg-background/30" />
          </motion.div>

          {/* Right: photo */}
          <motion.div
            className="relative"
            initial={reduceMotion ? false : { opacity: 0, x: 36 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ ...gentleSpring, delay: 0.08 }}
          >
            <motion.div
              className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-muted"
              whileHover={reduceMotion ? undefined : { scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <Image
                src="/images/meet-the-creator.avif"
                alt="McKenzie — founder of Lou Balloons"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-black/65 via-black/25 to-transparent"
                aria-hidden
              />
              <motion.div
                className="absolute right-4 bottom-4 left-4 md:right-6 md:bottom-6 md:left-6"
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ ...gentleSpring, delay: 0.15 }}
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
          </motion.div>
        </div>
      </div>
    </section>
  )
}
