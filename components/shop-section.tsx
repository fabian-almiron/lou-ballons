"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ProductCard } from "./product-card"
import { getProductsByCategory, categories } from "@/lib/products"
import type { Product } from "@/lib/products"
import { gentleSpring, viewportOnce } from "@/lib/motion"

interface ShopSectionProps {
  categoryId: Product["category"]
  className?: string
}

const gridContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.04,
    },
  },
}

export function ShopSection({ categoryId, className = "" }: ShopSectionProps) {
  const products = getProductsByCategory(categoryId)
  const category = categories.find((c) => c.id === categoryId)
  const reduceMotion = useReducedMotion()

  if (!category) return null

  const skipEnter = reduceMotion ? "show" : "hidden"

  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-12 text-center"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={gentleSpring}
        >
          <motion.h2
            className="font-serif text-3xl text-foreground md:text-4xl lg:text-5xl mb-4"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ ...gentleSpring, delay: reduceMotion ? 0 : 0.05 }}
          >
            {category.name}
          </motion.h2>
          {category.note && (
            <p className="text-muted-foreground italic">({category.note})</p>
          )}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={gridContainer}
          initial={skipEnter}
          whileInView="show"
          viewport={viewportOnce}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
