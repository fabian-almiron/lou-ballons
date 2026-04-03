"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { gentleSpring, viewportOnce } from "@/lib/motion"

const eventTypes = [
  {
    label: "Birthday Parties",
    src: "/images/birthday-parties.avif",
    alt: "Birthday party balloon decor",
    href: "/#contact",
  },
  {
    label: "Weddings",
    src: "/images/weddings.avif",
    alt: "Elegant wedding balloon decor",
    href: "/#contact",
  },
  {
    label: "Corporate Events",
    src: "/images/corporate.avif",
    alt: "Corporate event balloon decor",
    href: "/#contact",
  },
  {
    label: "Holidays",
    src: "/images/holidays.avif",
    alt: "Holiday balloon garland and decor",
    href: "/#contact",
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const itemFade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: gentleSpring },
}

export function GallerySection() {
  const reduceMotion = useReducedMotion()
  const skipEnter = reduceMotion ? "show" : "hidden"

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#f5f0e8_0%,#f5f0e8_50%,#878771_50%,#878771_100%)] py-16 lg:py-24"
    >
      <div className="mx-auto max-w-8xl px-6 lg:px-45">
        <motion.h2
          className="font-display relative z-10 mb-10 text-center text-4xl uppercase tracking-tight text-foreground md:mb-14 md:text-5xl lg:mb-20 lg:text-6xl"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={gentleSpring}
        >
          Types of Events We Can<br />Make Pop!
        </motion.h2>

        <motion.div
          className="mb-14 grid grid-cols-2 gap-4 pb-4 lg:mb-16 lg:grid-cols-4 lg:gap-10 lg:pb-8 items-start"
          variants={container}
          initial={skipEnter}
          whileInView="show"
          viewport={viewportOnce}
        >
          {eventTypes.map((ev) => (
            <motion.div
              key={ev.label}
              variants={itemFade}
              className="group odd:translate-y-6 even:-translate-y-4 md:odd:translate-y-8 md:even:-translate-y-6 lg:odd:translate-y-10 lg:even:-translate-y-8"
            >
              <Link href={ev.href} className="block">
                <div className="relative mb-3 aspect-[3/4] overflow-hidden shadow-md">
                  <Image
                    src={ev.src}
                    alt={ev.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <p className="text-center text-sm font-semibold text-white underline-offset-4 decoration-white/40 underline group-hover:decoration-white transition-colors">
                  {ev.label}
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <Button asChild className="main-btn black-btn">
            <Link href="/#services">Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
