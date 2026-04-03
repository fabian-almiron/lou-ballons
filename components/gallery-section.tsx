"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { gentleSpring, viewportOnce } from "@/lib/motion"

const eventTypes = [
  {
    label: "Birthday Parties",
    src: "/images/gallery-1.jpg",
    alt: "Pink Barbie-themed birthday balloon arch",
    href: "/#contact",
  },
  {
    label: "Weddings",
    src: "/images/gallery-2.jpg",
    alt: "Elegant outdoor wedding balloon arch",
    href: "/#contact",
  },
  {
    label: "Corporate Events",
    src: "/images/gallery-4.jpg",
    alt: "Blue and orange corporate event balloon installation",
    href: "/#contact",
  },
  {
    label: "Holidays",
    src: "/images/gallery-6.jpg",
    alt: "Cute Easter bunny foil balloons",
    href: "/#contact",
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: gentleSpring },
}

export function GallerySection() {
  const reduceMotion = useReducedMotion()
  const skipEnter = reduceMotion ? "show" : "hidden"

  return (
    <section id="gallery" className="bg-[#f5f0e8] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.h2
          className="font-display mb-12 text-center text-4xl font-black uppercase tracking-tight text-foreground md:text-5xl lg:text-6xl"
          style={{ WebkitTextStroke: "2px currentColor" }}
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={gentleSpring}
        >
          Types of Events We Can<br />Make Pop!
        </motion.h2>

        <motion.div
          className="mb-12 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6"
          variants={container}
          initial={skipEnter}
          whileInView="show"
          viewport={viewportOnce}
        >
          {eventTypes.map((ev) => (
            <motion.div key={ev.label} variants={item} className="group">
              <Link href={ev.href} className="block">
                <div className="relative mb-3 aspect-[3/4] overflow-hidden rounded-2xl">
                  <Image
                    src={ev.src}
                    alt={ev.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <p className="text-center text-sm font-semibold underline underline-offset-2 text-foreground group-hover:text-primary transition-colors">
                  {ev.label}
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <Button asChild className="rounded-none px-12 font-semibold">
            <Link href="/#services">Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
