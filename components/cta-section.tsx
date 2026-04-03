"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { bouncySpring, gentleSpring, viewportOnce } from "@/lib/motion"

const ctaContainer = {
  hidden: { opacity: 0, scale: 0.96, y: 28 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      ...bouncySpring,
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const ctaChild = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: gentleSpring,
  },
}

export function CTASection() {
  const reduceMotion = useReducedMotion()
  const skipEnter = reduceMotion ? "show" : "hidden"

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="bg-primary relative overflow-hidden rounded-3xl px-8 py-16 text-center lg:px-16 lg:py-24"
          variants={ctaContainer}
          initial={skipEnter}
          whileInView="show"
          viewport={viewportOnce}
        >
          <div className="animate-float-soft bg-primary-foreground/10 absolute top-0 left-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full" />
          <div className="animate-float-soft-reverse bg-primary-foreground/10 absolute right-0 bottom-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full" />

          <div className="relative">
            <motion.h2
              variants={ctaChild}
              className="font-serif text-primary-foreground mb-6 text-4xl tracking-tight text-balance md:text-5xl lg:text-6xl"
            >
              Ready to Make Your Event Pop?
            </motion.h2>
            <motion.p
              variants={ctaChild}
              className="text-primary-foreground/80 mx-auto mb-10 max-w-2xl text-lg leading-relaxed md:text-xl"
            >
              Serving Utah County &amp; Salt Lake City — let&apos;s create something beautiful together. Reach out today and let&apos;s start planning!
            </motion.p>
            <motion.div
              variants={ctaChild}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.div
                whileHover={reduceMotion ? undefined : { scale: 1.06 }}
                whileTap={reduceMotion ? undefined : { scale: 0.96 }}
                transition={bouncySpring}
              >
                <Button
                  size="lg"
                  variant="secondary"
                  className="group gap-2 px-8"
                >
                  Book Your Event
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={reduceMotion ? undefined : { scale: 1.04 }}
                whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                transition={gentleSpring}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground border-primary-foreground/30 bg-transparent px-8"
                >
                  Get a Quote
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
