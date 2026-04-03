"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Star } from "lucide-react"
import { gentleSpring, viewportOnce } from "@/lib/motion"

const testimonials = [
  {
    quote:
      "Absolutely amazing! Everything turned out better than I imagined. It completely transformed the space.",
    author: "Jessica M.",
    event: "Wedding Reception",
  },
  {
    quote:
      "So easy to work with and the final result was stunning. Highly recommend!",
    author: "Amanda R.",
    event: "Baby Shower",
  },
  {
    quote:
      "The attention to detail was incredible. Everyone at the party couldn't stop taking photos!",
    author: "Michelle K.",
    event: "Birthday Celebration",
  },
]

const grid = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
}

const card = {
  hidden: { opacity: 0, y: 24, rotate: -0.8 },
  show: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: gentleSpring,
  },
}

export function TestimonialsSection() {
  const reduceMotion = useReducedMotion()
  const skipEnter = reduceMotion ? "show" : "hidden"

  return (
    <section className="bg-primary/5 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto mb-16 max-w-2xl text-center"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={gentleSpring}
        >
          <h2 className="font-serif text-foreground mb-6 text-4xl tracking-tight md:text-5xl">
            Kind Words
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Don&apos;t just take our word for it—here&apos;s what our clients have to say.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-3"
          variants={grid}
          initial={skipEnter}
          whileInView="show"
          viewport={viewportOnce}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.author}
              variants={card}
              whileHover={reduceMotion ? undefined : { y: -6, scale: 1.02 }}
              transition={gentleSpring}
              className="bg-card border-border/50 rounded-2xl border p-8 shadow-sm"
            >
              <div className="mb-6 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-primary h-5 w-5 fill-primary" />
                ))}
              </div>
              <blockquote className="text-foreground mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div>
                <p className="text-foreground font-medium">{testimonial.author}</p>
                <p className="text-muted-foreground text-sm">{testimonial.event}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
