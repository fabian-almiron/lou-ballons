"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { gentleSpring, viewportOnce } from "@/lib/motion"
import { products, type Product } from "@/lib/products"

const POPULAR_ORDER = [
  "balloon-towers",
  "balloon-arch",
  "balloon-garland",
  "jumbo-helium",
] as const

function getPopularPicks(): Product[] {
  return POPULAR_ORDER.map((id) => products.find((p) => p.id === id)).filter(
    (p): p is Product => p != null
  )
}

const listContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.06 },
  },
}

const listItem = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: gentleSpring,
  },
}

export function PopularPicksSection() {
  const reduceMotion = useReducedMotion()
  const picks = getPopularPicks()
  const skipStagger = reduceMotion ? "show" : "hidden"

  return (
    <section
      className="w-full bg-white py-16 lg:py-24"
      aria-labelledby="popular-picks-heading"
    >
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <motion.h2
          id="popular-picks-heading"
          className="mb-10 text-center text-3xl font-bold tracking-tight text-foreground sm:mb-12 sm:text-4xl md:text-5xl"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={gentleSpring}
        >
          Most Popular Balloon Picks
        </motion.h2>

        <motion.ul
          className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6"
          variants={listContainer}
          initial={skipStagger}
          whileInView="show"
          viewport={viewportOnce}
        >
          {picks.map((product) => (
            <motion.li key={product.id} variants={listItem} className="min-w-0">
              <Link
                href="/#contact"
                className="group block outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-none bg-muted">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/75 via-black/25 to-transparent" />
                  <div className="absolute right-0 bottom-0 left-0 p-4 md:p-5">
                    <h3 className="font-serif text-lg font-semibold text-white md:text-xl">
                      {product.name}
                    </h3>
                    <p className="mt-0.5 text-sm text-white/85">
                      {product.priceLabel}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
