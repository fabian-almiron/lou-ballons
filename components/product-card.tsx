"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import type { Product } from "@/lib/products"
import { ShoppingBag } from "lucide-react"
import { bouncySpring, gentleSpring } from "@/lib/motion"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className="group relative"
      variants={{
        hidden: { opacity: 0, y: 32, rotate: -1 },
        show: {
          opacity: 1,
          y: 0,
          rotate: 0,
          transition: gentleSpring,
        },
      }}
      whileHover={reduceMotion ? undefined : { y: -10, rotate: 0.5 }}
      transition={gentleSpring}
    >
      <motion.div
        className="relative aspect-[3/4] overflow-hidden rounded-lg"
        whileHover={reduceMotion ? undefined : { scale: 1.02 }}
        transition={bouncySpring}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
        <div className="absolute right-0 bottom-0 left-0 p-4">
          <h3 className="font-serif text-lg text-white">{product.name}</h3>
          <p className="text-sm text-white/80">{product.priceLabel}</p>
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-foreground/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <motion.div whileTap={reduceMotion ? undefined : { scale: 0.95 }}>
            <Button onClick={() => addItem(product)} className="gap-2" size="lg">
              <ShoppingBag className="h-4 w-4" />
              Add to Cart
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}
