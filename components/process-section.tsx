"use client"

import { motion, useReducedMotion } from "framer-motion"
import { MessageSquare, Palette, PartyPopper } from "lucide-react"
import { bouncySpring, gentleSpring, viewportOnce } from "@/lib/motion"

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Tell Us Your Vision",
    description:
      "Share your event details, inspiration, and ideas—we'll take it from there.",
  },
  {
    icon: Palette,
    number: "02",
    title: "We Design",
    description:
      "We create a custom concept tailored to your space, style, and occasion.",
  },
  {
    icon: PartyPopper,
    number: "03",
    title: "We Install",
    description:
      "We handle delivery and setup so everything looks perfect, stress-free.",
  },
]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.06 },
  },
}

const stepVariant = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: gentleSpring,
  },
}

export function ProcessSection() {
  const reduceMotion = useReducedMotion()
  const skipEnter = reduceMotion ? "show" : "hidden"

  return (
    <section id="process" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto mb-16 max-w-2xl text-center"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={gentleSpring}
        >
          <h2 className="font-serif text-foreground mb-6 text-4xl tracking-tight md:text-5xl">
            How It Works
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            From concept to celebration, we make the process effortless.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-3 lg:gap-12"
          variants={container}
          initial={skipEnter}
          whileInView="show"
          viewport={viewportOnce}
        >
          {steps.map((step, index) => (
            <motion.div key={step.title} variants={stepVariant} className="relative">
              {index < steps.length - 1 && (
                <div className="bg-border absolute top-12 left-1/2 hidden h-px w-full md:block" />
              )}

              <motion.div
                className="bg-background relative rounded-2xl p-8 text-center"
                whileHover={reduceMotion ? undefined : { y: -6, scale: 1.02 }}
                transition={bouncySpring}
              >
                <motion.div
                  className="bg-primary/10 mx-auto mb-6 inline-flex h-24 w-24 items-center justify-center rounded-full"
                  whileHover={reduceMotion ? undefined : { rotate: [0, -8, 8, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <step.icon className="text-primary h-10 w-10" />
                </motion.div>
                <span className="text-primary mb-2 block text-sm font-medium">
                  Step {step.number}
                </span>
                <h3 className="font-serif text-foreground mb-4 text-2xl">
                  {step.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
