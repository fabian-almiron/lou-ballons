"use client"

import { useState } from "react"
import { motion, useReducedMotion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { gentleSpring, viewportOnce } from "@/lib/motion"

const testimonials = [
  {
    quote:
      "I have had Lou Balloons help me with multiple events now and I am a huge fan!! Kenzie does an amazing job and her work adds such a fun touch to any event! Now I don't feel like a party will be complete without balloons 🎈",
    author: "Sadie Lemmon",
  },
  {
    quote:
      "Lou Balloons is AMAZING! She can't touch anything without turning it to gold. Adds the best touches to any event to take it over the top! She is easy to work with and just as beautiful on the inside as she is on the out. You won't regret booking her!",
    author: "Kyra Unga",
  },
  {
    quote:
      "I have worked with this company twice and have been so pleased each time. The pop and excitement that something like balloons brings is just amazing. And she was so professional and kind about everything. Definitely recommend her and would work with her again.",
    author: "Tandilion Suitter",
  },
]

export function TestimonialsSection() {
  const reduceMotion = useReducedMotion()
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  return (
    <section className="bg-foreground py-24 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.h2
          className="mb-16 text-center font-serif text-4xl font-bold tracking-tight text-background md:text-5xl"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={gentleSpring}
        >
          Read What Our Clients Are Saying...
        </motion.h2>

        <div className="relative flex items-center justify-center gap-6">
          {/* Prev */}
          <button
            onClick={prev}
            className="shrink-0 text-background/60 transition-colors hover:text-background"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          {/* Slide */}
          <div className="min-h-[220px] flex-1 text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -16 }}
                transition={gentleSpring}
              >
                <p className="mb-4 font-medium text-background">
                  {testimonials[current].author}
                </p>
                <div className="mx-auto mb-6 h-px w-12 bg-background/40" />
                <blockquote className="mx-auto max-w-4xl text-lg leading-relaxed text-background/90 md:text-xl">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </blockquote>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next */}
          <button
            onClick={next}
            className="shrink-0 text-background/60 transition-colors hover:text-background"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-10 flex justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                i === current ? "bg-background scale-125" : "bg-background/30"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
