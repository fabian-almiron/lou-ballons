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
          className="relative h-[88%] w-full"
          style={{ y: bgY }}
        >
          <Image
            src="/images/hero-bg.avif"
            alt="Balloon installation backdrop"
            fill
            className="object-cover object-center"
            priority
            quality={90}
            sizes="100vw"
          />
        </motion.div>
      </div>

      {/* Vertical divider line — sits at the right edge of the card */}
      <div className="absolute z-20 hidden w-[1.5px] bg-[#878771] lg:block" style={{ left: "calc(8rem + 1px)", top: "49%", transform: "translateY(-50%)", height: "63%" }} />

      {/* Content: dark card pinned left */}
      <div className="relative z-10 mx-auto w-full max-w-full px-6 py-24 lg:px-40 lg:py-10">
        <motion.div
          variants={container}
          initial={skipEnter}
          animate="show"
          className="max-w-xs sm:max-w-lg"
        >
          {/* Dark frosted card */}
          <motion.div
            variants={fadeUp}
            className=" bg-[#18191c] px-16 py-12 "
          >
            <motion.h1
              variants={fadeUp}
              className="font-display mb-5 text-4xl uppercase leading-tight text-white sm:text-7xl"
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
