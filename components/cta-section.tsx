"use client"

import type { FormEvent } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"
import { bouncySpring, gentleSpring, viewportOnce } from "@/lib/motion"

const CONTACT_EMAIL = "hello@louballoons.com"

const fieldBase =
  "rounded-none shadow-none border-foreground/80 bg-card placeholder:italic focus-visible:rounded-none h-11 py-2"

const textareaField =
  "rounded-none shadow-none border-foreground/80 bg-card placeholder:italic focus-visible:rounded-none min-h-28 py-3 resize-y"

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

type CTASectionProps = {
  /** Two columns on large screens (contact page). Default keeps stacked blocks for home. */
  layout?: "stacked" | "split"
}

export function CTASection({ layout = "stacked" }: CTASectionProps) {
  const reduceMotion = useReducedMotion()
  const skipEnter = reduceMotion ? "show" : "hidden"
  const isSplit = layout === "split"

  function handleInquirySubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const name = String(fd.get("name") ?? "").trim()
    const email = String(fd.get("email") ?? "").trim()
    const phone = String(fd.get("phone") ?? "").trim()
    const eventDate = String(fd.get("eventDate") ?? "").trim()
    const eventTime = String(fd.get("eventTime") ?? "").trim()
    const eventLocation = String(fd.get("eventLocation") ?? "").trim()
    const description = String(fd.get("description") ?? "").trim()

    const body = [
      name && `Name: ${name}`,
      email && `Email: ${email}`,
      phone && `Phone: ${phone}`,
      eventDate && `Date of event: ${eventDate}`,
      eventTime && `Event start time: ${eventTime}`,
      eventLocation && `Event address/city: ${eventLocation}`,
      description && `Description:\n${description}`,
    ]
      .filter(Boolean)
      .join("\n\n")

    const subject = encodeURIComponent("Event inquiry — Lou Balloons")
    const encodedBody = encodeURIComponent(body || "(No details provided)")
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${encodedBody}`
  }

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* ── Split layout (contact page) ── */}
        {isSplit && (
          <div className="border-foreground/15 flex flex-col overflow-hidden rounded-none border lg:grid lg:min-h-[min(720px,calc(100vh-8rem))] lg:grid-cols-[1fr_minmax(0,1.15fr)] lg:items-stretch">
            {/* Left: green CTA */}
            <motion.div
              className="bg-primary relative overflow-hidden px-8 py-16 text-left lg:flex lg:min-h-0 lg:flex-col lg:justify-center lg:px-10 lg:py-16 xl:px-14"
              variants={ctaContainer}
              initial={skipEnter}
              whileInView="show"
              viewport={viewportOnce}
            >
              <div className="animate-float-soft bg-primary-foreground/10 absolute top-0 left-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full" />
              <div className="animate-float-soft-reverse bg-primary-foreground/10 absolute right-0 bottom-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full" />
              <div className="relative">
                <motion.h2 variants={ctaChild} className="font-serif text-primary-foreground mb-6 text-4xl tracking-tight text-balance md:text-5xl lg:text-5xl xl:text-[3.25rem]">
                  Ready to Make Your Event Pop?
                </motion.h2>
                <motion.p variants={ctaChild} className="text-primary-foreground/80 mb-10 max-w-md text-lg leading-relaxed md:text-xl">
                  Serving Utah County &amp; Salt Lake City — let&apos;s create something beautiful together. Reach out today and let&apos;s start planning!
                </motion.p>
                <motion.div variants={ctaChild} className="flex flex-wrap justify-start gap-4">
                  <motion.div whileHover={reduceMotion ? undefined : { scale: 1.06 }} whileTap={reduceMotion ? undefined : { scale: 0.96 }} transition={bouncySpring}>
                    <Button asChild size="lg" variant="white" className="main-btn white-btn group gap-2">
                      <a href="#inquiry-form">Book Your Event <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={reduceMotion ? undefined : { scale: 1.04 }} whileTap={reduceMotion ? undefined : { scale: 0.97 }} transition={gentleSpring}>
                    <Button asChild size="lg" variant="outline" className="main-btn bordered-light">
                      <a href="#inquiry-form">Get a Quote</a>
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right: form */}
            <motion.div
              id="inquiry-form"
              className="bg-card border-foreground/15 scroll-mt-28 flex flex-col border-t px-6 py-10 lg:min-h-0 lg:overflow-y-auto lg:border-t-0 lg:border-l lg:px-12 lg:py-12"
              variants={ctaChild}
              initial={skipEnter}
              whileInView="show"
              viewport={viewportOnce}
            >
              <h3 className="font-serif text-foreground mb-2 text-left text-2xl tracking-tight md:text-3xl">Tell us about your event</h3>
              <p className="text-muted-foreground mb-8 text-left text-sm italic md:text-base">Fill out the form below and we&apos;ll get back to you shortly.</p>
              <InquiryForm onSubmit={handleInquirySubmit} />
            </motion.div>
          </div>
        )}

        {/* ── Stacked layout (home page) ── */}
        {!isSplit && (
          <motion.div
            className="bg-primary relative overflow-hidden rounded-none"
            variants={ctaContainer}
            initial={skipEnter}
            whileInView="show"
            viewport={viewportOnce}
          >
            <div className="animate-float-soft bg-primary-foreground/10 absolute top-0 left-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full" />
            <div className="animate-float-soft-reverse bg-primary-foreground/10 absolute right-0 bottom-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full" />

            {/* Green top band */}
            <div className="relative px-8 pt-16 pb-12 text-center lg:px-16 lg:pt-20 lg:pb-14">
              <motion.h2 variants={ctaChild} className="font-serif text-primary-foreground mb-6 text-4xl tracking-tight text-balance md:text-5xl lg:text-6xl">
                Ready to Make Your Event Pop?
              </motion.h2>
              <motion.p variants={ctaChild} className="text-primary-foreground/80 mx-auto max-w-2xl text-lg leading-relaxed md:text-xl">
                Serving Utah County &amp; Salt Lake City — let&apos;s create something beautiful together. Reach out today and let&apos;s start planning!
              </motion.p>
            </div>

            {/* White form panel — flush against the green band */}
            <motion.div
              id="inquiry-form"
              className="relative bg-card scroll-mt-28 px-6 py-10 lg:px-16 lg:py-14"
              variants={ctaChild}
            >
              <div className="mx-auto max-w-3xl">
                <h3 className="font-serif text-foreground mb-2 text-center text-2xl tracking-tight md:text-3xl">Tell us about your event</h3>
                <p className="text-muted-foreground mb-8 text-center text-sm italic md:text-base">Fill out the form below and we&apos;ll get back to you shortly.</p>
                <InquiryForm onSubmit={handleInquirySubmit} centered />
              </div>
            </motion.div>
          </motion.div>
        )}

      </div>
    </section>
  )
}

/* ── Shared form fields ─────────────────────────────────────────────────── */
function InquiryForm({
  onSubmit,
  centered = false,
}: {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  centered?: boolean
}) {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="inquiry-name" className="sr-only">Name</Label>
          <Input id="inquiry-name" name="name" type="text" autoComplete="name" placeholder="Name" required className={fieldBase} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="inquiry-email" className="sr-only">Email</Label>
          <Input id="inquiry-email" name="email" type="email" autoComplete="email" placeholder="Email" required className={fieldBase} />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="inquiry-phone" className="sr-only">Phone number</Label>
        <Input id="inquiry-phone" name="phone" type="tel" autoComplete="tel" placeholder="Phone Number" required className={fieldBase} />
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="inquiry-event-date" className="text-foreground font-normal italic">Date of event</Label>
          <Input id="inquiry-event-date" name="eventDate" type="date" required className={fieldBase} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="inquiry-event-time" className="text-foreground font-normal italic">Event Start Time</Label>
          <Input id="inquiry-event-time" name="eventTime" type="time" required className={fieldBase} />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="inquiry-location" className="text-foreground font-normal italic">Event address/city</Label>
        <Input id="inquiry-location" name="eventLocation" type="text" autoComplete="address-level2" placeholder="e.g. Provo, UT or venue address" required className={fieldBase} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="inquiry-description" className="text-foreground font-normal italic">Write a brief description of your event</Label>
        <Textarea id="inquiry-description" name="description" placeholder="Guest count, theme, colors, installations you have in mind…" required className={textareaField} />
      </div>
      <div className={cn("pt-2", centered && "flex justify-center")}>
        <Button type="submit" variant="green" size="lg" className="main-btn green-btn rounded-md w-full sm:w-auto">
          Send Inquiry
        </Button>
      </div>
    </form>
  )
}
