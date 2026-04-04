"use client"

import type { FormEvent } from "react"
import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { gentleSpring, viewportOnce } from "@/lib/motion"

const CONTACT_EMAIL = "hello@louballoons.com"

const fieldBase =
  "rounded-none shadow-none border-foreground/80 bg-background placeholder:italic focus-visible:rounded-none h-11 py-2"

const textareaField =
  "rounded-none shadow-none border-foreground/80 bg-background placeholder:italic focus-visible:rounded-none min-h-28 py-3 resize-y"

export function StoryContactSection() {
  const reduceMotion = useReducedMotion()

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const name    = String(fd.get("name") ?? "").trim()
    const email   = String(fd.get("email") ?? "").trim()
    const phone   = String(fd.get("phone") ?? "").trim()
    const date    = String(fd.get("eventDate") ?? "").trim()
    const time    = String(fd.get("eventTime") ?? "").trim()
    const loc     = String(fd.get("eventLocation") ?? "").trim()
    const desc    = String(fd.get("description") ?? "").trim()

    const body = [
      name  && `Name: ${name}`,
      email && `Email: ${email}`,
      phone && `Phone: ${phone}`,
      date  && `Date of event: ${date}`,
      time  && `Event start time: ${time}`,
      loc   && `Event address/city: ${loc}`,
      desc  && `Description:\n${desc}`,
    ].filter(Boolean).join("\n\n")

    const subject = encodeURIComponent("Event inquiry — Lou Balloons")
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${encodeURIComponent(body || "(No details provided)")}`
  }

  return (
    <section className="bg-[#ffffff] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16 xl:gap-24">

          {/* ── Left: headline + stacked photos ── */}
          <motion.div
            className="flex flex-col"
            initial={reduceMotion ? false : { opacity: 0, x: -28 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={gentleSpring}
          >
            <h2 className="font-display mb-10 text-5xl uppercase leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Ready To<br />Book? Fill<br />out the<br />contact<br />form.
            </h2>

            {/* Stacked offset photos */}
            <div className="relative hidden h-[420px] lg:block">
              {/* Top-right photo */}
              <motion.div
                className="absolute top-0 right-0 z-10 w-[58%] overflow-hidden rounded-none shadow-md"
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ ...gentleSpring, delay: 0.1 }}
              >
                <div className="relative aspect-3/4">
                  <Image
                    src="/images/gallery-1.jpg"
                    alt="Balloon installation"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 0px, 22vw"
                  />
                </div>
              </motion.div>

              {/* Bottom-left photo */}
              <motion.div
                className="absolute bottom-0 left-0 z-20 w-[52%] overflow-hidden rounded-none shadow-md"
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ ...gentleSpring, delay: 0.22 }}
              >
                <div className="relative aspect-3/4">
                  <Image
                    src="/images/gallery-2.jpg"
                    alt="Balloon garland"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 0px, 20vw"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ── Right: form ── */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 28 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={gentleSpring}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="sc-name" className="sr-only">Name</Label>
                  <Input
                    id="sc-name" name="name" type="text"
                    autoComplete="name" placeholder="Name"
                    required className={fieldBase}
                  />
                </div>
                <div>
                  <Label htmlFor="sc-email" className="sr-only">Email</Label>
                  <Input
                    id="sc-email" name="email" type="email"
                    autoComplete="email" placeholder="Email"
                    required className={fieldBase}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="sc-phone" className="sr-only">Phone Number</Label>
                <Input
                  id="sc-phone" name="phone" type="tel"
                  autoComplete="tel" placeholder="Phone Number"
                  required className={fieldBase}
                />
              </div>

              <div>
                <Label htmlFor="sc-date" className="text-sm font-normal italic text-foreground">
                  Date of event
                </Label>
                <Input
                  id="sc-date" name="eventDate" type="date"
                  required className={`${fieldBase} mt-1`}
                />
              </div>

              <div>
                <Label htmlFor="sc-time" className="text-sm font-normal italic text-foreground">
                  Event Start Time
                </Label>
                <Input
                  id="sc-time" name="eventTime" type="time"
                  required className={`${fieldBase} mt-1`}
                />
              </div>

              <div>
                <Label htmlFor="sc-location" className="text-sm font-normal italic text-foreground">
                  Event address/city
                </Label>
                <Input
                  id="sc-location" name="eventLocation" type="text"
                  autoComplete="address-level2"
                  placeholder="e.g. Provo, UT or venue address"
                  required className={`${fieldBase} mt-1`}
                />
              </div>

              <div>
                <Label htmlFor="sc-description" className="text-sm font-normal italic text-foreground">
                  Write a brief description of your event
                </Label>
                <Textarea
                  id="sc-description" name="description"
                  placeholder="Guest count, theme, colors, installations you have in mind…"
                  required className={`${textareaField} mt-1`}
                />
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  size="lg"
                  className="main-btn green-btn rounded-md w-full"
                >
                  Submit
                </Button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
