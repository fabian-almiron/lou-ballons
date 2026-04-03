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
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
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
    reduceMotion ? ["0%", "0%"] : ["0%", "20%"],
  )
  const bgScale = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [1, 1] : [1, 1.05],
  )

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-svh items-center overflow-hidden pt-20"
    >
      {/* Background image with parallax */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="relative h-[120%] w-full"
          style={{ y: bgY, scale: bgScale }}
        >
          <Image
            src="/images/hero-bg.avif"
            alt="Elegant balloon installation"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </motion.div>
        {/* Left-to-right gradient so text is legible over the photo */}
        <div className="absolute inset-0 bg-linear-to-r from-background via-background/80 to-background/10" />
        {/* Bottom fade to blend into next section */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-background to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <motion.div
          variants={container}
          initial={skipEnter}
          animate="show"
          className="max-w-2xl"
        >
          <motion.h1
            variants={fadeUp}
            className="font-display mb-6 text-6xl uppercase tracking-tight text-balance text-white md:text-7xl lg:text-8xl"
          >
            It&apos;s<br />
            Time To<br />
            Party!
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mb-10 max-w-lg text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            Custom Balloon Decor for Utah County &amp; Salt Lake City From arches to garlands, we style unforgettable celebrations big and small.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-4"
          >
            <motion.div
              whileHover={reduceMotion ? undefined : { scale: 1.05 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
              transition={bouncySpring}
            >
              <Button
                size="lg"
                className="group gap-2 px-8 font-semibold shadow-md shadow-primary/15"
              >
                Book Our Services
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
