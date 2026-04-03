"use client"

import Image from "next/image"
import { useRef } from "react"
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { bouncySpring, gentleSpring } from "@/lib/motion"

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: gentleSpring },
}

export function HeroSection() {
  const reduceMotion = useReducedMotion()
  const skipEnter = reduceMotion ? "show" : "hidden"
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const bgY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? ["0%", "0%"] : ["0%", "18%"],
  )

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-svh items-center overflow-hidden pt-20"
    >
      {/* Full-bleed background — no gradient, photo shows through fully */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="relative h-[118%] w-full"
          style={{ y: bgY }}
        >
          <Image
            src="/images/hero-bg-new.jpg"
            alt="Black and white balloon installation with couple"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </motion.div>
      </div>

      {/* Content: dark card pinned left */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <motion.div
          variants={container}
          initial={skipEnter}
          animate="show"
          className="max-w-xs sm:max-w-sm"
        >
          {/* Dark frosted card */}
          <motion.div
            variants={fadeUp}
            className="rounded-2xl bg-[#1a1a1a]/85 px-7 py-8 backdrop-blur-sm"
          >
            <motion.h1
              variants={fadeUp}
              className="font-display mb-5 text-4xl uppercase leading-tight text-white sm:text-5xl"
            >
              It&apos;s<br />
              Time To<br />
              Party!
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mb-7 text-sm leading-relaxed text-white/75 sm:text-base"
            >
              Custom Balloon Decor for Utah County &amp; Salt Lake City From arches to garlands, we style unforgettable celebrations big and small.
            </motion.p>

            <motion.div variants={fadeUp}>
              <motion.div
                whileHover={reduceMotion ? undefined : { scale: 1.04 }}
                whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                transition={bouncySpring}
                className="inline-block"
              >
                <Button size="lg" className="main-btn green-btn group gap-2">
                  Book Our Services
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
