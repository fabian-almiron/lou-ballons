"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Award, Sparkles, Users } from "lucide-react"
import { gentleSpring, viewportOnce } from "@/lib/motion"

const pillars = [
  {
    number: "01",
    icon: Users,
    title: "Trusted Balloon Experts",
    body: "With years of hands-on experience, our team knows how to deliver stunning installs and smooth setups. You can count on us to show up on time, bring creative ideas, and make your event stress-free and stylish.",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "All Events, All Styles",
    body: "We've styled it all — from kids' birthdays and baby showers to weddings and corporate launches. No matter the occasion, we tailor each balloon install to match your vibe, your colors, and your guest list.",
  },
  {
    number: "03",
    icon: Award,
    title: "Quality & Experience",
    body: "We combine creative design with top-tier materials and a decade of event know-how. The result? Balloon decor that looks amazing, lasts all day, and gets your guests talking.",
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.05 } },
}

const item = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: gentleSpring },
}

export function WhyUsSection() {
  const reduceMotion = useReducedMotion()
  const skipEnter = reduceMotion ? "show" : "hidden"

  return (
    <section className="bg-[#f5f0e8] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          className="mx-auto mb-16 max-w-2xl text-center"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={gentleSpring}
        >
          <h2 className="font-serif text-foreground mb-4 text-[1.75rem] font-normal leading-[1.2] tracking-tight sm:text-3xl md:text-4xl lg:text-[2.65rem] lg:leading-[1.18]">
            Why Choose Lou Balloons?
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed md:text-lg">
            We bring the creativity, the care, and the confetti — you just show up and celebrate.
          </p>
        </motion.div>

        {/* Pillar cards */}
        <motion.div
          className="grid gap-6 md:grid-cols-3 lg:gap-8"
          variants={container}
          initial={skipEnter}
          whileInView="show"
          viewport={viewportOnce}
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.number}
              variants={item}
              className="relative flex flex-col bg-card px-8 py-10 lg:px-10 lg:py-12"
            >
              {/* Number */}
              <span className="font-serif text-primary/30 mb-6 block text-5xl font-normal leading-none lg:text-6xl">
                {pillar.number}
              </span>

              {/* Icon */}
              <div className="bg-primary/10 mb-6 flex h-12 w-12 items-center justify-center rounded-full">
                <pillar.icon className="text-primary h-6 w-6" strokeWidth={1.75} />
              </div>

              {/* Copy */}
              <h3 className="font-serif text-foreground mb-4 text-xl tracking-tight lg:text-2xl">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed lg:text-base">
                {pillar.body}
              </p>

              {/* Bottom accent line */}
              <div className="bg-primary/30 mt-auto h-0.5 w-10 pt-8" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
